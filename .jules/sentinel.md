## 2025-02-09 - [Missing Security Headers in Vercel Deployment]
**Vulnerability:** The Vercel deployment configuration (`vercel.json`) did not include standard security headers (X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security, etc.).
**Learning:** In Vercel, security headers are not automatically injected into the response of the served files. An application may have no built-in protection against Clickjacking and MIME-type sniffing at the deployment level.
**Prevention:** Always ensure `vercel.json` contains a `headers` block configuring essential security policies for routes (e.g. `/(.*)`).
