import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createClient } from '@supabase/supabase-js';

const resources = [
  ['b1-preliminary-exam-toolkit.pdf', 'exam-toolkit/b1-preliminary-exam-toolkit.pdf'],
  ['b2-first-exam-toolkit.pdf', 'exam-toolkit/b2-first-exam-toolkit.pdf'],
  ['c1-advanced-exam-toolkit.pdf', 'exam-toolkit/c1-advanced-exam-toolkit.pdf'],
];

async function readLocalEnv() {
  const values = {};
  for (const filename of ['.env.local', '.env']) {
    try {
      const source = await readFile(resolve(filename), 'utf8');
      for (const line of source.split(/\r?\n/)) {
        const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
        if (!match || values[match[1]]) continue;
        values[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
      }
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
  return values;
}

const localEnv = await readLocalEnv();
const supabaseUrl = process.env.VITE_SUPABASE_URL || localEnv.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || localEnv.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.VITE_SUPABASE_ANON_KEY || localEnv.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !serviceRoleKey || !anonKey) {
  throw new Error('VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY are required.');
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

for (const [filename, storagePath] of resources) {
  const bytes = await readFile(resolve('output', 'pdf', filename));
  const { error } = await supabase.storage
    .from('student-resources')
    .upload(storagePath, bytes, { contentType: 'application/pdf', upsert: true });
  if (error) throw new Error(`Could not upload ${filename}: ${error.message}`);
  console.log(`Uploaded ${storagePath}`);
}

const { data, error } = await supabase.storage.from('student-resources').list('exam-toolkit');
if (error) throw new Error(`Could not verify uploads: ${error.message}`);

const uploaded = new Set(data.map((item) => item.name));
for (const [filename] of resources) {
  if (!uploaded.has(filename)) throw new Error(`Upload verification failed for ${filename}`);
}

console.log(`Verified ${resources.length} private student resources.`);

const anonymousClient = createClient(supabaseUrl, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const { data: anonymousUrl, error: anonymousError } = await anonymousClient.storage
  .from('student-resources')
  .createSignedUrl(resources[0][1], 60);

if (!anonymousError || anonymousUrl?.signedUrl) {
  throw new Error('Privacy verification failed: an anonymous visitor received a signed resource URL.');
}
console.log('Verified anonymous access is denied.');
