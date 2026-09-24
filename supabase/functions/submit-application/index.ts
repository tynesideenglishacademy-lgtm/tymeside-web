import { createClient, type SupabaseClient } from 'jsr:@supabase/supabase-js@2';

const BUCKET = 'career-applications';
const MAX_FILE_BYTES = 6 * 1024 * 1024;
const MAX_PAYLOAD_BYTES = MAX_FILE_BYTES + 1024 * 1024; // Allow 1MB for form overhead
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 30 * 60 * 1000;
const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const STATIC_ORIGINS = new Set([
  'https://tynesideacademy.com',
  'https://www.tynesideacademy.com',
  'https://tyneside-web.vercel.app',
]);
const PREVIEW_ORIGIN = /^https:\/\/tymeside-[a-z0-9]+-btloban93-5646s-projects\.vercel\.app$/;
const LOCAL_ORIGIN = /^http:\/\/localhost:\d+$/;

function isAllowedOrigin(origin: string | null) {
  return Boolean(origin && (STATIC_ORIGINS.has(origin) || PREVIEW_ORIGIN.test(origin) || LOCAL_ORIGIN.test(origin)));
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

function json(body: unknown, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });
}

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

async function hashKey(ip: string) {
  const pepper = Deno.env.get('LEAD_RATE_LIMIT_PEPPER') ?? '';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${pepper}:careers:${ip}`));
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function isRateLimited(admin: SupabaseClient, ip: string) {
  const { data, error } = await admin.rpc('rate_limit_increment', {
    p_bucket: 'submit-application',
    p_key: await hashKey(ip),
    p_window_ms: RATE_WINDOW_MS,
  });
  if (error) {
    console.error('application rate limit failed open:', error.message);
    return false;
  }
  const hits = Array.isArray(data) ? data[0]?.hits : (data as { hits?: number } | null)?.hits;
  return typeof hits === 'number' && hits > RATE_LIMIT;
}

async function ensurePrivateBucket(admin: SupabaseClient) {
  const { data, error } = await admin.storage.getBucket(BUCKET);
  if (data && !error) return;
  const created = await admin.storage.createBucket(BUCKET, {
    public: false,
    fileSizeLimit: MAX_FILE_BYTES,
    allowedMimeTypes: [...ALLOWED_TYPES],
  });
  if (created.error && !/already exists/i.test(created.error.message)) throw created.error;
}

function safeFileName(name: string) {
  const dot = name.lastIndexOf('.');
  const extension = dot >= 0 ? name.slice(dot).toLowerCase().replace(/[^.a-z0-9]/g, '') : '';
  const stem = (dot >= 0 ? name.slice(0, dot) : name)
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
    .slice(0, 60) || 'cv';
  return `${stem}${extension}`;
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(origin) });
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405, origin);
  if (!isAllowedOrigin(origin)) return json({ error: 'origin_not_allowed' }, 403, origin);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) return json({ error: 'server_misconfigured' }, 500, origin);
  const admin = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });

  const ip = req.headers.get('cf-connecting-ip')?.trim() || 'unknown';
  if (await isRateLimited(admin, ip)) return json({ error: 'rate_limited' }, 429, origin);

  let form: FormData;
  try {
    if (!req.body) throw new Error('empty_body');
    let readBytes = 0;
    const bodyLimiter = new TransformStream({
      transform(chunk, controller) {
        readBytes += chunk.byteLength;
        if (readBytes > MAX_PAYLOAD_BYTES) {
          controller.error(new Error('payload_too_large'));
        } else {
          controller.enqueue(chunk);
        }
      },
    });
    const limitedReq = new Request(req.url, {
      method: req.method,
      headers: req.headers,
      body: req.body.pipeThrough(bodyLimiter),
      duplex: 'half'
    });
    form = await limitedReq.formData();
  } catch (error) {
    if (error instanceof Error && error.message === 'payload_too_large') {
      return json({ error: 'payload_too_large' }, 413, origin);
    }
    return json({ error: 'invalid_form' }, 400, origin);
  }

  if (clean(form.get('website'), 200)) return json({ ok: true }, 200, origin);

  const name = clean(form.get('name'), 120);
  const email = clean(form.get('email'), 160);
  const phone = clean(form.get('phone'), 40);
  const message = clean(form.get('message'), 1000);
  const consent = clean(form.get('gdpr'), 10) === 'true';
  const file = form.get('cv');

  if (name.length < 2) return json({ error: 'invalid_name' }, 400, origin);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json({ error: 'invalid_email' }, 400, origin);
  if (!consent) return json({ error: 'consent_required' }, 400, origin);
  if (!(file instanceof File) || file.size === 0) return json({ error: 'cv_required' }, 400, origin);
  if (file.size > MAX_FILE_BYTES) return json({ error: 'file_too_large' }, 413, origin);
  if (!ALLOWED_TYPES.has(file.type)) return json({ error: 'invalid_file_type' }, 415, origin);

  let objectPath = '';
  try {
    await ensurePrivateBucket(admin);
    const day = new Date().toISOString().slice(0, 10);
    objectPath = `${day}/${crypto.randomUUID()}-${safeFileName(file.name)}`;
    const uploaded = await admin.storage.from(BUCKET).upload(objectPath, file, {
      contentType: file.type, cacheControl: '0', upsert: false,
    });
    if (uploaded.error) throw uploaded.error;

    const inserted = await admin.from('leads').insert([{
      name, email, phone: phone || null, status: 'Active Lead',
      notes: `[Trabaja con nosotros] CV privado: ${objectPath}${message ? ` · Mensaje: ${message}` : ''}`,
      created_at: new Date().toISOString(),
    }]);
    if (inserted.error) throw inserted.error;
  } catch (error) {
    if (objectPath) await admin.storage.from(BUCKET).remove([objectPath]);
    console.error('application storage failed:', error instanceof Error ? error.message : String(error));
    return json({ error: 'application_failed' }, 500, origin);
  }

  const resendKey = Deno.env.get('RESEND_API_KEY');
  const from = Deno.env.get('CAREERS_FROM_EMAIL');
  if (resendKey && from) {
    const notification = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: ['secretaria@tynesideacademy.com'], reply_to: email,
        subject: `Nueva candidatura web: ${name}`,
        text: `Nueva candidatura recibida.\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || 'No indicado'}\nMensaje: ${message || 'Sin mensaje'}\n\nCV guardado de forma privada en Supabase: ${objectPath}`,
      }),
    });
    if (!notification.ok) console.error('application email notification failed:', await notification.text());
  } else {
    // Explicitly approved: FormSubmit receives the notification fields below.
    // The CV itself remains in the private Supabase bucket and is not attached.
    const notification = await fetch('https://formsubmit.co/ajax/secretaria@tynesideacademy.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'No indicado',
        message: message || 'Sin mensaje',
        cv_private_reference: objectPath,
        _subject: `Nueva candidatura web: ${name}`,
        _template: 'table',
        _url: 'https://www.tynesideacademy.com/#careers',
      }),
    });
    if (!notification.ok) console.error('FormSubmit application notification failed:', await notification.text());
  }

  return json({ ok: true }, 200, origin);
});
