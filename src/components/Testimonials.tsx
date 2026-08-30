import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import Stars from './Stars';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';
import { hasSocialProof } from '../lib/sections';
import type { Testimonial } from '../data/testimonials';

const ReviewCard = ({ review }: { review: Testimonial }) => (
  <figure
    className="light-card"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      padding: '2rem',
      margin: 0,
    }}
  >
    <Stars rating={review.rating} />

    <blockquote style={{ margin: 0 }}>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-ink)' }}>
        {review.quote}
      </p>
    </blockquote>

    <figcaption style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
      <div style={{ fontWeight: 700, color: 'var(--color-ink)' }}>{review.author}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
        {review.role && <span>{review.role} · </span>}
        <time dateTime={review.date}>
          {new Date(review.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </figcaption>
  </figure>
);

/**
 * Reviews, straight from the academy's Google listing.
 *
 * Renders nothing at all until there is real content in src/data/testimonials.ts.
 * A parent comparing academies weighs other parents above anything the academy
 * says about itself — which is exactly why a placeholder quote here would do
 * more damage than an absent section.
 */
const Testimonials = () => {
  const { t } = useTranslation();

  if (!hasSocialProof) return null;

  return (
    <section id="testimonials" className="section-light" style={{ padding: 'var(--section-y) 0' }}>
      <div className="container">
        <SectionHeader
          section="testimonials"
          label={t('testimonials.badge')}
          title={t('testimonials.title')}
          lead={t('testimonials.desc')}
          align="center"
        />

        {GOOGLE_RATING && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '3rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.4rem',
                fontWeight: 900,
                lineHeight: 1,
                color: 'var(--color-ink)',
              }}
            >
              {GOOGLE_RATING.score.toLocaleString('es-ES', { minimumFractionDigits: 1 })}
            </span>
            <Stars rating={Math.round(GOOGLE_RATING.score)} />
            <span style={{ color: 'var(--color-ink-muted)' }}>
              {t('testimonials.rating_count', { count: GOOGLE_RATING.count })}
            </span>
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="grid-cards">
            {testimonials.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {GOOGLE_REVIEWS_URL && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ color: 'var(--color-ink)', borderColor: 'rgba(9, 19, 30, 0.2)', backgroundColor: '#FFFFFF' }}
            >
              <span>{t('testimonials.cta')}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17 17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
