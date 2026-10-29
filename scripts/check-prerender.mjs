import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { snapshotState } from './snapshot-state.mjs';
import { ROUTES, routeSlug } from './prerender.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
try {
  const saved = JSON.parse(await readFile(new URL('../public/prerendered/manifest.json', import.meta.url), 'utf8'));
  const current = await snapshotState(root);
  const expected = ROUTES.map(route => `${routeSlug(route)}.html`).sort();
  if (JSON.stringify(current) !== JSON.stringify(saved) || JSON.stringify(Object.keys(current.snapshots)) !== JSON.stringify(expected)) {
    throw new Error('Public snapshots are stale or incomplete.');
  }
  console.log(`Verified freshness and integrity of ${expected.length} prerendered routes.`);
} catch (error) {
  console.error(`${error.message} Run npm run prerender and commit public/prerendered/ before building.`);
  process.exitCode = 1;
}
