import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import Stars from './Stars';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';
import { hasSocialProof } from '../lib/socialProof';
import type { Testimonial } from '../data/testimonials';

const ReviewCard = ({ review, english }: { review: Testimonial; english: boolean }) => (
  <figure
    className="review-feature"
  >
    <div className="review-feature-meta">
      <Stars rating={review.rating} onDark={false} />
      <span>Google</span>
    </div>
    <blockquote>
      <p>
        {review.quote}
      </p>
    </blockquote>
    <figcaption>
      <strong>{review.author}</strong>
      <span>
        {review.role && <span>{review.role} · </span>}
        <span>{english ? review.dateLabel.en : review.dateLabel.es}</span>
      </span>
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
  const [activeReview, setActiveReview] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || testimonials.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(
      () => setActiveReview((current) => (current + 1) % testimonials.length),
      6500,
    );
    return () => window.clearInterval(interval);
  }, [paused]);

  const moveReview = (direction: number) => {
    setActiveReview((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  if (!hasSocialProof) return null;

  return (
    <section id="testimonials" className="section-light" style={{ padding: 'var(--section-y) 0' }}>
      <div className="container">
        <SectionHeader
          section="testimonials"
          label={t('testimonials.badge')}
          title={t('testimonials.title')}
          lead={t('testimonials.desc')}
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
          <div
            className="reviews-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label={t('testimonials.carousel_label', { defaultValue: 'Reseñas de Google' })}
          >
            <div className="reviews-carousel-index" aria-hidden="true">
              <span>{String(activeReview + 1).padStart(2, '0')}</span>
              <i />
              <span>{String(testimonials.length).padStart(2, '0')}</span>
            </div>
            <div className="reviews-carousel-stage">
              <ReviewCard key={testimonials[activeReview].id} review={testimonials[activeReview]} english={locale === 'en-GB'} />
            </div>
            <div className="reviews-carousel-controls">
              <button type="button" onClick={() => moveReview(-1)} aria-label={t('testimonials.previous', { defaultValue: 'Reseña anterior' })}>←</button>
              <button type="button" onClick={() => moveReview(1)} aria-label={t('testimonials.next', { defaultValue: 'Siguiente reseña' })}>→</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
