/**
 * Scroll-triggered reveal.
 *
 * Progressive enhancement: the hiding class (.rv) is added here rather than in
 * the markup, so with JS disabled — or if this never runs — every element stays
 * visible. Elements already on screen at init are left untouched so the hero's
 * existing load-in animation plays as the page paints.
 *
 * IntersectionObserver is the primary trigger, but it is backed by a passive
 * scroll/resize listener. Hidden content that never reveals costs enquiries, so
 * the fallback is worth the few bytes: it also covers pages that start in a
 * background tab, where the browser stops computing intersections entirely.
 */

const SELECTOR = [
  '.animate-slide-up',
  '.animate-fade-in',
  '.light-card',
  '.glass-card-premium',
  // Hiding an element strips its animate-* class, so without this a second
  // pass would no longer match it and would leave it hidden forever.
  '.rv',
].join(', ');

/** Stagger step between siblings, capped so a long grid never crawls. */
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 5;

/** How far above the fold an element must reach before it counts as "seen". */
const VIEW_TRIGGER = 0.92;

export function initReveal(root: ParentNode = document): () => void {
  if (typeof window === 'undefined') return () => {};

  // Honour the OS setting: don't hide anything, don't observe anything.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  // Kept out of CSS: a transition-delay in the .rv rule would also delay every
  // hover transition on the same element.
  const delays = new WeakMap<Element, number>();
  const pending = new Set<HTMLElement>();
  const timers: number[] = [];
  let disposed = false;

  const reveal = (el: HTMLElement) => {
    if (!pending.delete(el)) return;
    const delay = delays.get(el) ?? 0;
    if (delay === 0) {
      el.classList.add('rv-in');
    } else {
      timers.push(window.setTimeout(() => el.classList.add('rv-in'), delay));
    }
  };

  const observer =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              observer?.unobserve(entry.target);
              reveal(entry.target as HTMLElement);
            }
          },
          { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
        )
      : null;

  /** Reveal anything currently within reach, then tidy up once empty. */
  const flush = () => {
    if (disposed) return;
    for (const el of [...pending]) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight * VIEW_TRIGGER) {
        observer?.unobserve(el);
        reveal(el);
      }
    }
    if (pending.size === 0) stopListening();
  };

  let throttled = false;
  const onScroll = () => {
    if (throttled) return;
    throttled = true;
    timers.push(
      window.setTimeout(() => {
        throttled = false;
        flush();
      }, 120),
    );
  };

  const stopListening = () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    document.removeEventListener('visibilitychange', flush);
  };

  const elements = Array.from(root.querySelectorAll<HTMLElement>(SELECTOR));

  // Stagger is per-group: siblings that share a parent cascade, but a new
  // section starts its delay again from zero rather than inheriting a huge one.
  const indexInGroup = new Map<Element, number>();

  for (const el of elements) {
    // Already revealed on an earlier pass — never re-hide it. This is what
    // makes the function safe to call repeatedly: React StrictMode runs the
    // effect mount → cleanup → mount, and the cleanup tears the first pass
    // down, so the second pass has to be free to pick everything up again.
    if (el.classList.contains('rv-in')) continue;

    // Already on screen at init — leave it entirely alone, but if an earlier
    // pass hid it while it was still below the fold (layout shifts as images
    // and fonts land), reveal it: that pass's observer is gone and nothing
    // else would ever bring it back.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * VIEW_TRIGGER) {
      if (el.classList.contains('rv')) el.classList.add('rv-in');
      continue;
    }

    const parent = el.parentElement;
    if (parent) {
      const n = indexInGroup.get(parent) ?? 0;
      indexInGroup.set(parent, n + 1);
      if (n > 0) delays.set(el, Math.min(n, MAX_STAGGER_STEPS) * STAGGER_MS);
    }

    // A CSS animation with `forwards` outranks normal declarations in the
    // cascade, so .rv's transform would never apply while it's still there.
    el.classList.remove('animate-slide-up', 'animate-fade-in');
    el.classList.add('rv');
    pending.add(el);
    observer?.observe(el);
  }

  if (pending.size === 0) return () => {};

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  document.addEventListener('visibilitychange', flush);

  return () => {
    disposed = true;
    observer?.disconnect();
    stopListening();
    for (const id of timers) window.clearTimeout(id);
  };
}
