## 2025-02-18 - Prevent Unintended Prototype Access and DoS on Supabase Edge Functions
**Vulnerability:** Unbounded JSON payload parsing and direct dictionary key access (`SOURCE_TAGS[source]`) using unsanitized user input in Deno/Supabase Edge Functions.
**Learning:** Supabase functions buffering `req.json()` without size checks can lead to OOM DoS, and checking direct object property presence (`obj[key]`) against unsanitized inputs like `'__proto__'` can bypass validation logic returning inherited properties.
**Prevention:** Always check `req.headers.get('content-length')` before calling `req.json()` with a strict limit (e.g. 10KB), and enforce prototype-safe lookups via `Object.prototype.hasOwnProperty.call(obj, key)`.
