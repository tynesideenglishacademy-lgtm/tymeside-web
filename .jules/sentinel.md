## 2023-10-27 - OOM DoS Vulnerability in Edge Functions
**Vulnerability:** Edge functions calling `req.formData()` directly on unconstrained requests are vulnerable to OOM Denial of Service (DoS) attacks via oversized payloads.
**Learning:** Relying on `Content-Length` headers or validating file size after parsing `formData()` is insecure as headers can be forged and parsing buffers the entire payload.
**Prevention:** Always enforce a true stream size limit using a byte-limiting `TransformStream` piped from `req.body` before parsing the body.

## 2024-05-24 - Missing Origin Enforcement in Edge Functions Allows CSRF Spam
**Vulnerability:** Edge functions relying solely on CORS headers without explicitly rejecting unauthorized origins are vulnerable to CSRF and distributed spam.
**Learning:** Setting CORS headers only prevents the browser from reading the response; it does not stop the browser from sending POST requests, which allows attackers to use victims' IPs to bypass rate limits.
**Prevention:** Always explicitly check the `origin` header and return a 403 Forbidden for unauthorized origins before processing the request payload.
