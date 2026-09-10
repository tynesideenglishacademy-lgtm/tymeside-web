const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * Lead capture for the whole site. Every form goes through the `submit-lead`
 * Edge Function rather than writing to `public.leads` directly - the browser
 * has no write access to that table and is not meant to. The function owns
 * validation, the source tag and the `status` value; see
 * supabase/functions/submit-lead/index.ts.
 */

/** Must match SOURCE_TAGS in the Edge Function, or the lead is rejected. */
export type LeadSource = 'contact' | 'aptis' | 'empresas' | 'level-test';

export interface LeadInput {
  source: LeadSource;
  name: string;
  email?: string;
  phone?: string;
  /**
   * The part of `notes` specific to this enquiry. The Edge Function prefixes
   * the source tag, so do not repeat it here.
   */
  notes?: string;
  /**
   * Honeypot. Bound to a field no sighted user can reach; anything non-empty
   * marks the submission as automated and it is dropped server-side.
   */
  website?: string;
}

/**
 * Sends one lead. Resolves only when the row is stored, and throws otherwise -
 * callers show the failure screen on a throw. Silently resolving on failure is
 * what previously showed a thank-you for enquiries nobody ever received.
 */
export async function submitLead(input: LeadInput): Promise<void> {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured; the lead would be dropped.');
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/submit-lead`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${supabaseAnonKey}`,
      apikey: supabaseAnonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  const data = (await response.json().catch(() => null)) as {
    ok?: boolean;
    error?: string;
  } | null;

  if (!response.ok || !data?.ok) {
    throw new Error(`submit-lead rejected the lead: ${data?.error ?? 'unknown reason'}`);
  }
}
