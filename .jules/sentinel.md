## 2023-10-27 - OOM DoS Vulnerability in Edge Functions
**Vulnerability:** Edge functions calling `req.formData()` directly on unconstrained requests are vulnerable to OOM Denial of Service (DoS) attacks via oversized payloads.
**Learning:** Relying on `Content-Length` headers or validating file size after parsing `formData()` is insecure as headers can be forged and parsing buffers the entire payload.
**Prevention:** Always enforce a true stream size limit using a byte-limiting `TransformStream` piped from `req.body` before parsing the body.
