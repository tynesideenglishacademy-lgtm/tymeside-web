## 2024-05-24 - Missing Payload Size Limit in Deno Edge Functions
**Vulnerability:** Denial of Service (DoS) via Out-Of-Memory (OOM). The `submit-lead` edge function read arbitrary-sized requests into memory with `req.json()` without checking `Content-Length`.
**Learning:** Deno edge functions (like Supabase Functions) do not inherently limit payload size on `req.json()`. Attackers can send a massive JSON payload, causing the isolate to run out of memory and crash.
**Prevention:** Always check `req.headers.get('content-length')` before invoking `req.json()` or buffer-reading methods and enforce a strict upper bound (e.g., 10KB for simple forms).

## 2024-05-24 - Prototype Access in Object Dictionary Lookup
**Vulnerability:** Unintended prototype property access / potential Prototype Pollution gadget. The `submit-lead` edge function accessed `SOURCE_TAGS[source]` directly without checking for own properties.
**Learning:** Directly indexing into a plain object dictionary with unvalidated user input (like `source`) allows an attacker to access prototype properties (like `__proto__`, `constructor`, `toString`). This can lead to unexpected application behavior or security issues depending on how the result is used.
**Prevention:** Use `Object.prototype.hasOwnProperty.call(dict, key)` to safely check for the existence of a key in a dictionary object before accessing its value.
