// Size-capped JSON body reader for submit-lead.
// Content-Length is only an early rejection; the streamed bytes enforce the limit.

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

  // Security Enhancement: Protect against OOM DoS vulnerabilities.
  // Use a TransformStream instead of buffering the entire payload into a Uint8Array.
  let received = 0;
  const bodyLimiter = new TransformStream({
    transform(chunk, controller) {
      received += chunk.byteLength;
      if (received > maxBytes) {
        controller.error(new Error('too_large'));
      } else {
        controller.enqueue(chunk);
      }
    },
  });

  const limitedReq = new Request(req.url, {
    method: req.method,
    headers: req.headers,
    body: req.body.pipeThrough(bodyLimiter),
    duplex: 'half',
  });

  try {
    const value = await limitedReq.json();
    return { ok: true, value };
  } catch (error) {
    if (error instanceof Error && error.message === 'too_large') {
      return { ok: false, reason: 'too_large' };
    }
    return { ok: false, reason: 'invalid_json' };
  }
}