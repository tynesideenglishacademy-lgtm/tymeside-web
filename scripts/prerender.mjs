#!/usr/bin/env node
// This is a client-only React SPA (see vite.config.ts / src/main.tsx): there is
// no SSR, so dist/index.html is an empty <div id="root"> until JavaScript runs.
// Crawlers that don't execute JS (most SEO tools, and Google's initial HTML
// fetch pass) see 0 words, no headings and no links no matter what the app
// itself renders. That single fact was behind most of the "very important"
// findings in the September 2026 Seobility audit.
//
// This script renders each public marketing route with a real headless
// browser (against a local copy of `dist/`, so run `vite build` first) and
// saves the fully rendered HTML under public/prerendered/. middleware.ts
// then serves that snapshot instead of the SPA shell, but only to known
// crawler user agents — real visitors always get the normal client-rendered
// app, untouched.
//
// Output goes to public/, not dist/, on purpose: dist/ is rebuilt from
// scratch on every Vercel deploy (see vercel.json's buildCommand), and
// Vercel's build machine has no headless browser to regenerate these with.
// public/ is copied into dist/ verbatim by `vite build`, so the snapshots
// ship with the next deploy without that build needing Playwright at all.
// Re-run this script (`npm run prerender`) whenever routed page content
// changes meaningfully; commit the resulting public/prerendered/ files.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const outDir = path.join(root, 'public', 'prerendered');

// Public, indexable routes. Deliberately excludes /alumnos (authenticated
// student area — no content worth showing a crawler, and it talks to
// Supabase) and /test (a redirect-only route with nothing to render).
export const ROUTES = [
  '/',
  '/aviso-legal',
  '/privacidad',
  '/cookies',
  '/aptis-oposiciones',
  '/empresas',
  '/colegios',
  '/one-to-one',
  '/traduccion',
  '/newcastle',
  '/level-test',
  '/recursos',
  '/examen-prueba-ingles',
];

export function routeSlug(route) {
  return route === '/' ? 'home' : route.slice(1).replace(/\//g, '-');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

// Mirrors vercel.json's SPA rewrites for the local preview server: a request
// for a real file on disk gets that file, anything else falls back to the
// built index.html so client-side routing can take over.
async function serveDist(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const filePath = path.join(distDir, decodeURIComponent(url.pathname));
  const ext = path.extname(filePath);

  if (ext && existsSync(filePath)) {
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(await readFile(filePath));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(await readFile(path.join(distDir, 'index.html')));
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error('dist/ not found — run `vite build` before scripts/prerender.mjs.');
  }

  const server = createServer((req, res) => {
    serveDist(req, res).catch((err) => {
      res.writeHead(500);
      res.end(String(err));
    });
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || '/opt/pw-browsers/chromium';
  const browser = await chromium.launch({ executablePath });

  await mkdir(outDir, { recursive: true });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(base + route, { waitUntil: 'networkidle' });
      // Route chunks (lazy-loaded via React.lazy) and the reveal-on-scroll
      // animation both settle shortly after networkidle; give them a beat.
      await page.waitForSelector('h1', { timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(300);

      const html = await page.content();
      await page.close();

      const outFile = path.join(outDir, `${routeSlug(route)}.html`);
      await writeFile(outFile, html, 'utf8');
      console.log(`prerendered ${route} -> public/prerendered/${routeSlug(route)}.html`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
