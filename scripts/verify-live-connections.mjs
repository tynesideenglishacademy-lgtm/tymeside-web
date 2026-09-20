import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

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

async function expectOk(label, url, options = {}) {
  const response = await fetch(url, { redirect: 'follow', ...options });
  if (!response.ok) throw new Error(`${label} returned HTTP ${response.status}`);
  console.log(`${label}: ${response.status}`);
}

const env = await readLocalEnv();
const supabaseUrl = process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL;
const anonKey = process.env.VITE_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl || !anonKey) throw new Error('Supabase public environment values are required.');

const functionHeaders = {
  apikey: anonKey,
  Authorization: `Bearer ${anonKey}`,
  Origin: 'https://www.tynesideacademy.com',
};

await expectOk('Contact lead function', `${supabaseUrl}/functions/v1/submit-lead`, {
  method: 'POST',
  headers: { ...functionHeaders, 'Content-Type': 'application/json' },
  body: JSON.stringify({ website: 'release-connection-check' }),
});

const applicationProbe = new FormData();
applicationProbe.set('website', 'release-connection-check');
await expectOk('Careers application function', `${supabaseUrl}/functions/v1/submit-application`, {
  method: 'POST',
  headers: functionHeaders,
  body: applicationProbe,
});

for (const [label, url] of [
  ['Pre-enrolment', 'https://matricula.tynesideacademy.com/preinscripcion'],
  ['Full enrolment', 'https://matricula.tynesideacademy.com/enroll'],
  ['CRM login', 'https://matricula.tynesideacademy.com/login'],
  ['Public full exam', 'https://exam.tynesideacademy.com/exam-demo'],
  ['Student exam entrance', 'https://exam.tynesideacademy.com/student'],
]) {
  await expectOk(label, url);
}

console.log('All live external connections passed.');
