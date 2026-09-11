## 2026-08-30 - Add Request Payload Size Limit in Deno Edge Function
**Vulnerability:** Deno Edge Functions lack an automatic payload size limit for `req.json()`, allowing an attacker to send an arbitrarily large JSON body (e.g. 10 GB) and cause an Out Of Memory (OOM) Denial of Service.
**Learning:** `req.json()` buffers the entire body into memory before parsing. Since the Supabase function had no `content-length` check, any unrestricted POST request could crash the isolate.
**Prevention:** Always check `req.headers.get('content-length')` before parsing the body in edge functions that accept user input to ensure it falls within an expected limit (e.g. 10KB).
