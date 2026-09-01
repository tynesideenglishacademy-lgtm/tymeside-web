## 2024-05-15 - Missing Security Headers in Vercel SPA Deployments
**Vulnerability:** Missing standard HTTP security headers (HSTS, X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy).
**Learning:** Vercel SPA deployments using `vercel.json` without a dedicated backend server don't automatically inject these standard security headers. They must be manually added to the `headers` array in `vercel.json` because the app is purely static files served directly.
**Prevention:** Always ensure `vercel.json` includes a `headers` configuration for all routes (`/(.*)`) when deploying SPAs to Vercel.
