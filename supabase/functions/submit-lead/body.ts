// Size-capped JSON body reader for submit-lead.
//
// `await req.json()` buffers the whole body before anything can object to its
// size, so one oversized POST costs the isolate real memory. The rate limit runs
// first, but it only counts requests, not bytes. A Content-Length pre-check is
// not enough on its own either: a chunked request carries no such header, and a
// client can lie about it. So the header is used as a cheap early exit and the
// stream itself is what enforces the cap.
//
// Kept free of Deno APIs so it can be exercised under Node.

export const MAX_BODY_BYTES = 10 * 1024;

export type BodyResult =
  | { ok: true; value: unknown }
  | { ok: false; reason: 'too_large' | 'invalid_json' };

export async function readJsonCapped(req: Request, maxBytes = MAX_BODY_BYTES): Promise<BodyResult> {
  const declared = Number(req.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > maxBytes) {
    return { ok: false, reason: 'too_large' };
  }

  if (!req.body) return { ok: false, reason: 'invalid_json' };

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > maxBytes) {
      // Stop pulling from the socket; the rest is never buffered.
      await reader.cancel().catch(() => {});
      return { ok: false, reason: 'too_large' };
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return { ok: true, value: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { ok: false, reason: 'invalid_json' };
  }
}
