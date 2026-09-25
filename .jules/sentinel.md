## 2024-05-14 - Replace memory-buffered JSON parsing with TransformStream
**Vulnerability:** In-memory array buffering for edge function request bodies.
**Learning:** Relying on `req.headers.get('content-length')` to enforce payload size limits before manually reading and buffering stream chunks (`req.body.getReader()`) into memory can lead to OOM DoS vulnerabilities if an attacker sends malformed or slow streams. The current `submit-lead/body.ts` manually buffers the entire stream into a `Uint8Array` array before calling `JSON.parse()`.
**Prevention:** True stream size limits must be enforced using a byte-limiting `TransformStream` piped from `req.body` to a new `Request` (with `duplex: 'half'`) before calling `.json()`, avoiding manual memory accumulation.
