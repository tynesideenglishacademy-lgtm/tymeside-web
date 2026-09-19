/**
 * A single-line silhouette of a through-arch bridge — the Tyne Bridge is the
 * one unmistakable landmark "Tyneside" refers to, and nothing else on this
 * page uses it beyond the wordmark. Placed at the seam where a navy section
 * meets a cream one, it reads as a deliberate brand device rather than the
 * soft drop-shadow gradient that used to be the only thing softening that
 * line (still there, underneath — this sits on top of it, not instead of it).
 *
 * Pure line art, no fill, so it never competes with the heading that follows
 * it. Colour comes from `currentColor`, so it inherits whatever the section
 * sets rather than being hardcoded here.
 */
const BridgeMotif = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '90px',
      color: 'var(--color-tyneside-blue)',
      opacity: 0.16,
      pointerEvents: 'none',
    }}
  >
    <line x1="0" y1="72" x2="1440" y2="72" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M120,72 C120,10 1320,10 1320,72"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    {[
      [240, 48.4], [360, 31.6], [480, 19.6], [600, 12.4],
      [840, 12.4], [960, 19.6], [1080, 31.6], [1200, 48.4],
    ].map(([x, y]) => (
      <line key={x} x1={x} y1={y} x2={x} y2="72" stroke="currentColor" strokeWidth="1.25" />
    ))}
  </svg>
);

export default BridgeMotif;
