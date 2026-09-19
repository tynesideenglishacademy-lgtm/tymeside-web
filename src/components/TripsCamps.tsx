import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

/**
 * Every other content section on the page is the same shape: media on one
 * side, text vertically centered on the other, roughly equal columns. Four
 * sections in a row using one composition is its own kind of template. This
 * one instead reads top to bottom - text first at readable width, then a
 * wide asymmetric image band spanning the full container rather than half
 * of it, then the closing line pulled out as a standalone statement instead
 * of tucked into a paragraph. See CLAUDE.md.
 */
const TripsCamps = () => {
  const { t } = useTranslation();

  return (
    <section id="trips" style={{
      padding: '7rem 0',
      backgroundColor: 'var(--color-navy-surface)',
      color: 'var(--color-soft-cream)',
      position: 'relative'
    }}>
      <div className="container">

        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <SectionHeader
            label="Experiencias internacionales"
            title={t('trips.title')}
            onDark
          />

          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.2rem', color: '#D4DEE8' }}>
            {t('trips.p1')}
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#D4DEE8' }}>
            {t('trips.p2')}
          </p>
          <a
            href="https://www.ihnewcastle.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-amber)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}
          >
            <span>International House Newcastle</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
          </a>
        </div>

        {/* Asymmetric image band: 1.6fr/1fr rather than an even split, with
            the second image offset lower - deliberately not a mirror of the
            50/50 layout used everywhere else. */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1.6fr) minmax(220px, 1fr)',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* NOT duotone: camps1/camps2 are the site's own logo banner, not
              trip/camp photography (see the placeholder note below) - tinting
              a logo like a photo made it look broken rather than branded. */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            height: '380px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
            border: '1px solid var(--color-border-glass)'
          }}>
            <img src="/img/camps1-480.webp" alt="Campamentos de verano" width={480} height={480} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            height: '380px',
            marginTop: '3rem',
            boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
            border: '1px solid var(--color-border-glass)'
          }}>
            <img src="/img/camps2-480.webp" alt="Viajes de inmersión lingüística" width={480} height={480} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <blockquote style={{
          borderLeft: '3px solid var(--color-amber)',
          paddingLeft: '1.75rem',
          maxWidth: '760px',
          margin: 0,
          fontSize: 'var(--text-2xl)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          lineHeight: 1.45,
          color: 'var(--color-soft-cream)'
        }}>
          {t('trips.p3')}
        </blockquote>

      </div>
    </section>
  );
};

export default TripsCamps;
