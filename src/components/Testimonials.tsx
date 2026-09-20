import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import Stars from './Stars';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';
import { hasSocialProof } from '../lib/sections';
import type { Testimonial } from '../data/testimonials';

const ReviewCard = ({ review, locale }: { review: Testimonial; locale: string }) => (
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
    <Stars rating={review.rating} onDark={false} />

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
          {new Date(review.date).toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
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
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage?.startsWith('en') ? 'en-GB' : 'es-ES';

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
          <div className="reviews-proof-panel">
            <div className="reviews-score-block">
              <span className="reviews-score">
                {GOOGLE_RATING.score.toLocaleString(locale, { minimumFractionDigits: 1 })}
              </span>
              <div>
                <Stars rating={Math.round(GOOGLE_RATING.score)} onDark={false} />
                <p className="reviews-source">{t('testimonials.public_rating')}</p>
              </div>
            </div>

            <div className="reviews-count-block">
              <strong>{GOOGLE_RATING.count}</strong>
              <span>{t('testimonials.verified_reviews')}</span>
            </div>

            {GOOGLE_REVIEWS_URL && (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold reviews-proof-cta"
              >
                <span>{t('testimonials.cta')}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
            )}
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="grid-cards">
            {testimonials.map((review) => (
              <ReviewCard key={review.id} review={review} locale={locale} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
