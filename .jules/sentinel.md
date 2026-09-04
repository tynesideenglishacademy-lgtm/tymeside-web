## 2024-05-15 - [Vercel CSP Header]
**Vulnerability:** Missing Content Security Policy in Vercel configuration.
**Learning:** Standard HTTP security headers for the Vercel deployment must be configured manually via the `headers` array in `vercel.json` since it operates as a SPA.
**Prevention:** Ensure `vercel.json` includes strict CSP directives, avoiding overly permissive settings like `unsafe-inline`.
