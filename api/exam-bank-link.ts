/**
 * POST /api/exam-bank-link  { examId }
 * Authorization: Bearer <student's Supabase access token>
 *
 * Checks the student's CRM login, then asks the Exam Bank for a short-lived
 * signed link tied to their CRM student record. The issuer key never leaves
 * this server. Nothing is stored here.
 *
 * Env (Vercel): SUPABASE_URL (or VITE_SUPABASE_URL), SUPABASE_ANON_KEY (or
 * VITE_SUPABASE_ANON_KEY), ASSIGNMENT_ISSUER_KEY, EXAM_BASE_URL (optional).
 */
import { randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import { buildTokenRequest, isExamLevel, paperKeysFor, type CatalogEntry } from './_lib/examLink.ts';

interface Req {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}
interface Res {
  status(code: number): Res;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

const json = (res: Res, status: number, body: unknown) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(body);
};

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY;
  const issuerKey = process.env.ASSIGNMENT_ISSUER_KEY;
  const examBase = (process.env.EXAM_BASE_URL ?? process.env.VITE_EXAM_BASE_URL ?? 'https://exam.tynesideacademy.com').replace(/\/$/, '');
  if (!supabaseUrl || !anonKey || !issuerKey) return json(res, 503, { error: 'Exam Bank sign-in is not configured.' });

  const auth = String(req.headers.authorization ?? '');
  const accessToken = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!accessToken) return json(res, 401, { error: 'Sign in first.' });

  const examId = (req.body as { examId?: unknown } | undefined)?.examId;
  if (!isExamLevel(examId)) return json(res, 400, { error: 'Choose a level.' });

  // Act as the student: their token, the anon key, row-level security applies.
  const supabase = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);
  if (userError || !userData.user) return json(res, 401, { error: 'Your session has expired. Sign in again.' });
  if (userData.user.app_metadata?.role !== 'Student') return json(res, 403, { error: 'Student accounts only.' });

  const { data: student, error: studentError } = await supabase
    .from('students')
    .select('id')
    .eq('auth_id', userData.user.id)
    .maybeSingle();
  if (studentError || !student) return json(res, 403, { error: 'Your account is not linked to a student record.' });

  try {
    const catalogRes = await fetch(`${examBase}/api/public/papers`);
    if (!catalogRes.ok) throw new Error('catalog');
    const catalog = ((await catalogRes.json()) as { entries: CatalogEntry[] }).entries;
    const paperKeys = paperKeysFor(catalog, examId);
    if (paperKeys.length === 0) return json(res, 404, { error: 'No papers are available at that level yet.' });

    const tokenRes = await fetch(`${examBase}/api/assignments/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-assignment-issuer-key': issuerKey },
      body: JSON.stringify(buildTokenRequest(String(student.id), examId, paperKeys, randomUUID())),
    });
    if (!tokenRes.ok) throw new Error('token');
    const { studentPath } = (await tokenRes.json()) as { studentPath: string };
    return json(res, 200, { url: `${examBase}${studentPath}` });
  } catch {
    return json(res, 502, { error: 'The Exam Bank could not be reached. Try again in a minute.' });
  }
}
