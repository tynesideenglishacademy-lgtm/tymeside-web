// Supabase Edge Function: submit-lead
//
// Every lead the public website captures goes through here. The website holds
// no write access to the database at all: `anon` has zero grants on
// public.leads, so the anon key - which ships inside the public JS bundle by
// design - buys nobody the ability to read or write a single row. This function
// runs with the service-role key, which Supabase injects into the runtime and
// which never reaches the browser.
//
// The alternative was `grant insert on public.leads to anon` plus an RLS
// policy. That works, but it hands anyone who opens devtools a direct write
// endpoint with no validation in front of it, and any mistake in the policy
// leaks the whole table. Keeping the credential server-side is the boundary;
// everything below is the validation that boundary exists to enforce.

import { createClient, type SupabaseClient } from 'jsr:@supabase/supabase-js@2';

/**
 * Where the lead came from. The tag is written into `notes` here rather than by
 * the caller, so a forged request cannot pass itself off as a different form.
 * `[Test de Nivel Online]` is the prefix the CRM's own copy of the placement
 * test already writes, so both land in one place for reception.
 */
const SOURCE_TAGS: Record<string, string> = {
  contact: '[Formulario de contacto]',
  aptis: '[APTIS Oposiciones 2027]',
  empresas: '[FUNDAE / Empresas]',
  'level-test': '[Test de Nivel Online]',
};

/**
 * Browsers are told which origins may call this. It is not a security control -
 * curl ignores CORS entirely - it just stops the endpoint being usable from
 * someone else's page. Add tynesideacademy.com here when the domain is
 * recovered; until then the Vercel hosts are the live site.
 */
const STATIC_ORIGINS = new Set([
  'https://tyneside-web.vercel.app',
  'https://tymeside-web-btloban93-5646s-projects.vercel.app',
  'https://tymeside-web-git-main-btloban93-5646s-projects.vercel.app',
]);
const PREVIEW_ORIGIN = /^https:\/\/tymeside-[a-z0-9]+-btloban93-5646s-projects\.vercel\.app$/;
const LOCAL_ORIGIN = /^http:\/\/localhost:\d+$/;

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return STATIC_ORIGINS.has(origin) || PREVIEW_ORIGIN.test(origin) || LOCAL_ORIGIN.test(origin);
}

function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (isAllowedOrigin(origin)) {
    headers['Access-Control-Allow-Origin'] = origin as string;
    headers['Access-Control-Allow-Headers'] = 'authorization, x-client-info, apikey, content-type';
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Vary'] = 'Origin';
  }
  return headers;
}

/**
 * At most RATE_LIMIT submissions from one address per window.
 *
 * The count lives in public.rate_limit_counters, not in this isolate's memory.
 * An in-memory Map was the first attempt and it did nothing measurable: Supabase
 * spreads requests across isolates that cold-start freely, so twelve rapid POSTs
 * were served by enough separate instances that no counter ever reached the
 * limit. The database is the only thing every isolate shares.
 *
 * public.rate_limit_increment already existed for the CRM. It is one atomic
 * upsert with a sliding reset, it is SECURITY DEFINER, and EXECUTE on it is
 * granted to service_role and postgres only - so this function can call it and
 * a browser cannot.
 */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_BUCKET = 'submit-lead';

/**
 * The counter is keyed by a hash, never the address itself: an IP is personal
 * data under the GDPR and this table has no business holding a plain one. Set
 * the LEAD_RATE_LIMIT_PEPPER secret to make the hashes unguessable - the IPv4
 * space is small enough to enumerate without one. Absent the secret the keys are
 * still pseudonymous, just not resistant to a determined lookup.
 */
async function rateLimitKey(ip: string): Promise<string> {
  const pepper = Deno.env.get('LEAD_RATE_LIMIT_PEPPER') ?? '';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${pepper}:${ip}`));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function isRateLimited(admin: SupabaseClient, ip: string): Promise<boolean> {
  const { data, error } = await admin.rpc('rate_limit_increment', {
    p_bucket: RATE_BUCKET,
    p_key: await rateLimitKey(ip),
    p_window_ms: RATE_WINDOW_MS,
  });

  if (error) {
    // Fail open. A throttle that is itself broken must not be the reason a
    // parent's enquiry is refused; the flood it would have stopped is the
    // smaller loss. Logged so the outage is visible.
    console.error('rate_limit_increment failed, allowing request through:', error.message);
    return false;
  }

  const hits = Array.isArray(data) ? data[0]?.hits : (data as { hits?: number } | null)?.hits;
  return typeof hits === 'number' && hits > RATE_LIMIT;
}

/** Trim, collapse whitespace and hard-cap a field before it reaches the table. */
function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, max);
}

function json(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get('origin');

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (req.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405, origin);
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('submit-lead is missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return json({ error: 'server_misconfigured' }, 500, origin);
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // Requests arriving without a forwarded address all share the 'unknown' key.
  // That is deliberate: it is a bucket for traffic we cannot attribute, and it
  // should be throttled as one.
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('cf-connecting-ip') ||
    'unknown';
  if (await isRateLimited(admin, ip)) {
    return json({ error: 'rate_limited' }, 429, origin);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'invalid_json' }, 400, origin);
  }

  // Honeypot. The forms render a field no human ever sees; a bot that fills
  // every input trips it. Answer 200 so the bot has nothing to tune against,
  // but write nothing.
  if (clean(payload.website, 200) !== '') {
    return json({ ok: true }, 200, origin);
  }

  const source = clean(payload.source, 40);
  const tag = SOURCE_TAGS[source];
  if (!tag) {
    return json({ error: 'unknown_source' }, 400, origin);
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160);
  const phone = clean(payload.phone, 40);
  const detail = clean(payload.notes, 1000);

  if (name.length < 2) {
    return json({ error: 'invalid_name' }, 400, origin);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ error: 'invalid_email' }, 400, origin);
  }
  // A lead nobody can be called back on is not a lead.
  if (!email && !phone) {
    return json({ error: 'missing_contact' }, 400, origin);
  }

  const { error } = await admin.from('leads').insert([
    {
      name,
      email: email || null,
      phone: phone || null,
      status: 'Active Lead',
      notes: detail ? `${tag} ${detail}` : tag,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    // Logged in full for us, opaque to the caller: the database's own error
    // text describes the schema and does not belong in a public response.
    console.error('submit-lead insert failed:', error.message);
    return json({ error: 'insert_failed' }, 500, origin);
  }

  return json({ ok: true }, 200, origin);
});
