## 2023-10-27 - Unbounded JSON Payload Deno OOM DoS
**Vulnerability:** Deno edge functions calling `req.json()` directly without limiting stream size are vulnerable to memory exhaustion (OOM DoS) by processing massive incoming payloads.
**Learning:** `req.headers.get('content-length')` is easily spoofed and cannot be trusted for security enforcement. True payload size limits must be enforced during stream consumption.
**Prevention:** Apply a byte-limiting `TransformStream` to `req.body` prior to consuming it via `.json()` or `.formData()`.
