const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function submitApplication(form: FormData): Promise<void> {
  if (!supabaseUrl || !supabaseAnonKey) throw new Error('Supabase is not configured.');
  const response = await fetch(`${supabaseUrl}/functions/v1/submit-application`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${supabaseAnonKey}`, apikey: supabaseAnonKey },
    body: form,
  });
  const data = await response.json().catch(() => null) as { ok?: boolean; error?: string } | null;
  if (!response.ok || !data?.ok) throw new Error(data?.error ?? 'application_failed');
}
