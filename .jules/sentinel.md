## 2023-10-27 - OOM DoS Vulnerability in Edge Functions
**Vulnerability:** Edge functions calling `req.formData()` directly on unconstrained requests are vulnerable to OOM Denial of Service (DoS) attacks via oversized payloads.
**Learning:** Relying on `Content-Length` headers or validating file size after parsing `formData()` is insecure as headers can be forged and parsing buffers the entire payload.
**Prevention:** Always enforce a true stream size limit using a byte-limiting `TransformStream` piped from `req.body` before parsing the body.

## 2024-10-13 - Missing Origin Validation in Edge Functions
**Vulnerability:** The `submit-lead` Edge Function relied solely on CORS headers, allowing external domains to send POST requests (CSRF) and enabling distributed spam.
**Learning:** Browsers only enforce CORS by preventing the reading of responses, but they still send simple POST requests. Without explicit backend validation, the request is processed, causing unwanted side effects.
**Prevention:** Always explicitly validate the `origin` header and return a 403 Forbidden for unauthorized origins before executing any endpoint logic.
