import { supabase, isSupabaseConfigured } from './supabaseClient';

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

  const { data, error } = await supabase.functions.invoke<{ ok?: boolean; error?: string }>(
    'submit-lead',
    { body: input }
  );

  if (error) throw error;
  if (!data?.ok) {
    throw new Error(`submit-lead rejected the lead: ${data?.error ?? 'unknown reason'}`);
  }
}
