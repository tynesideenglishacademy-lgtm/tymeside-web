import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => entry.isDirectory()
    ? sourceFiles(path.join(directory, entry.name)) : [path.join(directory, entry.name)]));
  return groups.flat().sort();
}

export async function snapshotState(root) {
  const files = [...await sourceFiles(path.join(root, 'src')),
    ...['index.html', 'middleware.ts', 'public/sitemap.xml', 'public/robots.txt',
      'scripts/prerender.mjs', 'scripts/snapshot-state.mjs'].map(file => path.join(root, file))].sort();
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(path.relative(root, file).replaceAll('\\', '/'));
    hash.update('\0');
    // Git may check files out as CRLF locally and LF on CI.
    hash.update((await readFile(file, 'utf8')).replaceAll('\r\n', '\n'));
    hash.update('\0');
  }
  const snapshots = {};
  for (const file of (await readdir(path.join(root, 'public/prerendered'))).filter(file => file.endsWith('.html')).sort()) {
    const html = (await readFile(path.join(root, 'public/prerendered', file), 'utf8')).replaceAll('\r\n', '\n');
    snapshots[file] = createHash('sha256').update(html).digest('hex');
  }
  return { source: hash.digest('hex'), snapshots };
}
