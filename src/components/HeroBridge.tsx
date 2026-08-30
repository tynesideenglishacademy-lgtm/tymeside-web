/**
 * Tyne Bridge line-art for the hero.
 *
 * Mobile only. On desktop the hero already carries a photographic bridge in
 * the background, and two depictions of the same landmark in one frame muddy
 * each other. On a phone the navy gradient washes the photo almost flat, so
 * the line-art carries the brand instead — anchored low, so the arch crown
 * lands mid-hero and the piers run off the bottom edge.
 *
 * Decorative: aria-hidden, pointer-events off, never over an interactive
 * control. The strokes draw themselves in once via stroke-dashoffset — every
 * segment carries pathLength="1" so one keyframe animates them all over the
 * same 0->1 range, staggered by animation-delay. prefers-reduced-motion
 * renders it fully drawn and static (see index.css). No JS, no dependency.
 *
 * Geometry note: the hangers sit on the parabola through (70,250), (450,20),
 * (830,250) — y = 20 + 0.001593 * (x - 450)^2 — so they meet the arch exactly.
 */

const HANGERS: ReadonlyArray<{ x: number; y: number }> = [
  { x: 150, y: 163 },
  { x: 230, y: 97 },
  { x: 310, y: 51 },
  { x: 390, y: 26 },
  { x: 510, y: 26 },
  { x: 590, y: 51 },
  { x: 670, y: 97 },
  { x: 750, y: 163 },
];

export default function HeroBridge() {
  return (
    <div className="hero-bridge" aria-hidden="true">
      <svg
        viewBox="0 0 900 360"
        width="min(1180px, 125%)"
        fill="none"
        stroke="var(--color-amber)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* deck */}
        <line
          className="hero-bridge-draw"
          x1="30" y1="250" x2="870" y2="250"
          pathLength={1}
          strokeWidth="2"
        />
        {/* arch */}
        <path
          className="hero-bridge-draw"
          d="M70 250 Q450 20 830 250"
          pathLength={1}
          strokeWidth="3"
          style={{ animationDelay: '0.15s' }}
        />
        {/* end towers */}
        <path
          className="hero-bridge-draw"
          d="M60 300 L60 232 L96 232 L96 300"
          pathLength={1}
          strokeWidth="2.5"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          className="hero-bridge-draw"
          d="M804 300 L804 232 L840 232 L840 300"
          pathLength={1}
          strokeWidth="2.5"
          style={{ animationDelay: '0.5s' }}
        />
        {/* hangers */}
        {HANGERS.map((h, i) => (
          <line
            key={h.x}
            className="hero-bridge-draw"
            x1={h.x} y1={h.y} x2={h.x} y2="250"
            pathLength={1}
            strokeWidth="1.5"
            style={{ animationDelay: `${0.7 + i * 0.05}s` }}
          />
        ))}
        {/* river */}
        <g className="hero-bridge-river" strokeWidth="2">
          <line className="hero-bridge-draw" x1="20" y1="322" x2="250" y2="322" pathLength={1} style={{ animationDelay: '1.1s' }} />
          <line className="hero-bridge-draw" x1="300" y1="322" x2="560" y2="322" pathLength={1} style={{ animationDelay: '1.2s' }} />
          <line className="hero-bridge-draw" x1="610" y1="322" x2="880" y2="322" pathLength={1} style={{ animationDelay: '1.3s' }} />
        </g>
      </svg>
    </div>
  );
}
