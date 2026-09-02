## 2024-05-24 - Vercel SPA Security Headers
**Vulnerability:** Missing standard HTTP security headers (HSTS, X-Content-Type-Options, X-Frame-Options, etc.) which leaves the application vulnerable to basic web attacks like clickjacking and MIME-type sniffing.
**Learning:** Because Vercel deployments for SPAs operate without a dedicated backend server, standard HTTP security headers aren't applied by default. They must be configured manually via the `headers` array in `vercel.json`.
**Prevention:** Always include a `headers` configuration in `vercel.json` for Vercel-deployed SPAs to ensure standard web security protections are in place.
