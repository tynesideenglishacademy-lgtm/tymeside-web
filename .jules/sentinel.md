## 2023-10-27 - OOM DoS Vulnerability in Edge Functions
**Vulnerability:** Edge functions calling `req.formData()` directly on unconstrained requests are vulnerable to OOM Denial of Service (DoS) attacks via oversized payloads.
**Learning:** Relying on `Content-Length` headers or validating file size after parsing `formData()` is insecure as headers can be forged and parsing buffers the entire payload.
**Prevention:** Always enforce a true stream size limit using a byte-limiting `TransformStream` piped from `req.body` before parsing the body.
## 2024-05-24 - TransformStream Payload Limiting
**Vulnerability:** Stream parsing DoS (OOM) via manual chunk allocation or relying on Content-Length.
**Learning:** Manual accumulation of Uint8Arrays from stream chunks is prone to memory pressure, and Content-Length can be trivially spoofed.
**Prevention:** Always use a byte-limiting `TransformStream` piped from `req.body` to a new Request with `duplex: 'half'` before calling `.json()` or `.formData()`.
