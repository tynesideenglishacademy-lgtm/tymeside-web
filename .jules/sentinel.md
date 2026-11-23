## 2023-10-27 - OOM DoS Vulnerability in Edge Functions
**Vulnerability:** Edge functions calling `req.formData()` directly on unconstrained requests are vulnerable to OOM Denial of Service (DoS) attacks via oversized payloads.
**Learning:** Relying on `Content-Length` headers or validating file size after parsing `formData()` is insecure as headers can be forged and parsing buffers the entire payload.
**Prevention:** Always enforce a true stream size limit using a byte-limiting `TransformStream` piped from `req.body` before parsing the body.
## 2026-10-12 - Missing Origin Validation in Edge Functions
**Vulnerability:** The submit-lead Supabase Edge Function lacked explicit origin validation for POST requests, relying only on CORS headers.
**Learning:** Relying solely on CORS headers does not prevent browsers from sending POST requests, leaving endpoints vulnerable to CSRF and distributed spam.
**Prevention:** In Supabase Edge Functions, explicitly validate the `origin` header and return a 403 Forbidden for unauthorized origins before processing requests.
