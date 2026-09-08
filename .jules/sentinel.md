## 2024-09-08 - Fix rate limit bypass via IP spoofing
**Vulnerability:** The rate limiting in the `submit-lead` edge function relied on the first IP in the `x-forwarded-for` header, which can be trivially spoofed by an attacker to bypass rate limits.
**Learning:** Attackers can inject a fake IP in the `x-forwarded-for` header. The rightmost IP is the one appended by the last trusted proxy, or a direct trusted header like `cf-connecting-ip` should be prioritized.
**Prevention:** Always prioritize infrastructure-provided headers (`cf-connecting-ip`) and use the last IP (`pop()`) from the `x-forwarded-for` chain.
