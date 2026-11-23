import { memo } from 'react';

/**
 * Five stars, filled to `rating`. Shared by the hero badge and the reviews grid.
 *
 * ⚡ Bolt Performance Optimization:
 * Wrapped in React.memo() to prevent unnecessary re-renders.
 * This component is heavily used in the Testimonials carousel, which triggers
 * state updates every 6.5s. Memoization avoids re-rendering the 5 SVG elements
 * on every tick when the props (rating, size, onDark) haven't changed.
 */
const Stars = ({ rating, size = 17, onDark = true }: { rating: number; size?: number; onDark?: boolean }) => (
  <div
    style={{ display: 'inline-flex', gap: '0.1rem', color: onDark ? 'var(--color-gold)' : 'var(--color-gold-ink)' }}
    role="img"
    aria-label={`${rating} de 5`}
  >
    {[1, 2, 3, 4, 5].map((n) => (
      <svg
        key={n}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill={n <= rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ opacity: n <= rating ? 1 : 0.35 }}
      >
        <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9Z" />
      </svg>
    ))}
  </div>
);

export default memo(Stars);
