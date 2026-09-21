import { next, rewrite } from '@vercel/edge';

// This is a client-only React SPA (see vite.config.ts / src/main.tsx): dist/
// index.html is an empty <div id="root"> until JavaScript runs. Crawlers
// that don't execute JS — most SEO tools, and Google's initial HTML fetch —
// see 0 words, no headings and no links no matter what the app renders.
//
// scripts/prerender.mjs renders each public route with a real headless
// browser and saves the result under public/prerendered/, which `vite
// build` copies into dist/ on every deploy. This middleware hands that
// static snapshot to known bots only; every other visitor gets the normal
// client-rendered app, completely unchanged.
const BOT_USER_AGENT = /bot|crawl|spider|slurp|seobility|ahrefs|semrush|mj12bot|dotbot|facebookexternalhit|whatsapp|telegrambot|discordbot|slackbot|redditbot|pinterest|embedly|quora link preview|outbrain|w3c_validator|linkedinbot|twitterbot|applebot|petalbot|bytespider|google-inspectiontool/i;

// Keep in sync with the ROUTES list in scripts/prerender.mjs.
const ROUTE_TO_SNAPSHOT: Record<string, string> = {
  '/': 'home',
  '/aviso-legal': 'aviso-legal',
  '/privacidad': 'privacidad',
  '/cookies': 'cookies',
  '/aptis-oposiciones': 'aptis-oposiciones',
  '/empresas': 'empresas',
  '/colegios': 'colegios',
  '/one-to-one': 'one-to-one',
  '/traduccion': 'traduccion',
  '/newcastle': 'newcastle',
  '/level-test': 'level-test',
  '/recursos': 'recursos',
  '/examen-prueba-ingles': 'examen-prueba-ingles',
};

export const config = {
  matcher: Object.keys(ROUTE_TO_SNAPSHOT),
};

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  if (!BOT_USER_AGENT.test(userAgent)) return next();

  const { pathname } = new URL(request.url);
  const snapshot = ROUTE_TO_SNAPSHOT[pathname];
  if (!snapshot) return next();

  return rewrite(new URL(`/prerendered/${snapshot}.html`, request.url));
}
