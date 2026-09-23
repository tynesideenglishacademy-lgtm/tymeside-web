# Tyneside English Academy — public website

The public marketing site, student area, and level test for Tyneside
English Academy (Puente Tocinos, Murcia). React 19 + TypeScript + Vite,
deployed on Vercel.

This is one of three connected repositories that make up the Tyneside
platform:

- **tymeside-web** (this repo) — public site, student login, level test.
- **tyneside-crm** — the admin/teacher/parent CRM and its Express API.
- **tyneside-evaluation-suite** — the Cambridge-style exam engine (public
  practice test + authenticated staff tools).

The three share one Supabase project for authentication and student data —
see `docs/STUDENT-AREA-AUTH-PLAN.md` for how student login works, and
`src/lib/enrolmentLinks.ts` for how this site links out to the CRM and the
exam engine.

## Scripts

- `npm run dev` — local dev server.
- `npm run build` — typecheck (`tsc -b`) then production build.
- `npm run prerender` — builds, then renders the marketing routes with
  headless Chromium into `public/prerendered/`, so crawlers and link
  previews get real content instead of an empty SPA shell (see
  `middleware.ts`).
- `npm run lint` — oxlint.
- `npm run images` / `npm run og-image` — regenerate responsive image
  derivatives / the social-preview banner from the live homepage.
- `npm run upload:student-resources` — pushes the exam-prep PDFs used by
  the student area to Supabase Storage.
- `npm run verify:connections` — checks that the configured Supabase
  project (and other live services) actually respond, using `.env.local`.

## Environment variables

No `.env.example` is committed yet; the variables the app reads via
`import.meta.env` are:

- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` — shared Supabase project
  (same one the CRM uses).
- `VITE_CRM_BASE_URL` — the CRM's base URL, for pre-enrolment/signing
  links. Falls back to the production CRM if unset.
- `VITE_EXAM_BASE_URL` — the Evaluation Suite's public deployment, for the
  practice exam and the student exam bank. Falls back to production if
  unset.
- `VITE_WEB_BASE_URL` — this site's own base URL (used to build absolute
  links). Falls back to production if unset.
- `VITE_SENTRY_DSN` — error reporting (optional).

## Deployment

Deployed on Vercel (`vercel.json`): `npm run build` outputs `dist/`, with
SPA rewrites for the marketing/app routes and a CSP restricting
`connect-src` to Supabase and Sentry.
