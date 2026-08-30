import { useTranslation } from 'react-i18next';
import Stars from './Stars';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '../data/testimonials';

/**
 * The 4.9 from Google, above the fold and linked to the source.
 *
 * Every other number on this page is the academy's own claim. This one a
 * parent can check in two clicks, which is exactly why it links out rather
 * than sitting in the row of self-reported stats next to it.
 */
const GoogleRatingBadge = ({ onDark = true }: { onDark?: boolean }) => {
  const { t } = useTranslation();

  if (!GOOGLE_RATING) return null;

  const muted = onDark ? 'var(--color-slate-muted)' : 'var(--color-ink-muted)';
  const strong = onDark ? 'var(--color-soft-cream)' : 'var(--color-ink)';

  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="google-rating-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-warm-gold)', lineHeight: 1 }}>
        {GOOGLE_RATING.score.toLocaleString('es-ES', { minimumFractionDigits: 1 })}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        <Stars rating={Math.round(GOOGLE_RATING.score)} size={14} />
        <span style={{ fontSize: '0.85rem', color: muted, fontWeight: 500 }}>
          <span style={{ color: strong, fontWeight: 700 }}>
            {t('testimonials.rating_count', { count: GOOGLE_RATING.count })}
          </span>
        </span>
      </span>
    </a>
  );
};

export default GoogleRatingBadge;
