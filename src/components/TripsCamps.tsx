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

        {/* camps1-480.webp / camps2-480.webp, previously here, turned out to
            be the site's own logo banner rather than trip/camp photography -
            showing them as "photos" was already wrong before the duotone
            test made it obvious. No real trip photography exists yet (see
            CLAUDE.md), so rather than fake it with a stock photo of the
            wrong thing, this is an honest illustration of what the section
            is actually about: the Murcia-Newcastle route itself. */}
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, var(--color-navy-surface), var(--color-deep-navy))',
          border: '1px solid var(--color-border-glass)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
          padding: '2.5rem',
          marginBottom: '3.5rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <svg
            aria-hidden="true"
            viewBox="0 0 600 300"
            style={{ width: '100%', maxWidth: '560px', height: 'auto' }}
          >
            <path
              d="M55,250 Q300,40 545,95"
              fill="none"
              stroke="var(--color-amber)"
              strokeWidth="2"
              strokeDasharray="7 9"
              opacity="0.85"
            />
            <circle cx="55" cy="250" r="6" fill="var(--color-amber)" />
            <text x="45" y="274" textAnchor="start" fill="#D4DEE8" fontSize="15" fontFamily="var(--font-body)" fontWeight="600">Murcia</text>

            <circle cx="545" cy="95" r="6" fill="var(--color-soft-cream)" />
            <text x="555" y="76" textAnchor="end" fill="#D4DEE8" fontSize="15" fontFamily="var(--font-body)" fontWeight="600">Newcastle upon Tyne</text>

            {/* Small paper-plane mark, angled roughly along the route. */}
            <g transform="translate(300,108) rotate(-32)">
              <path d="M-9,-6 L11,0 L-9,6 L-4,0 Z" fill="var(--color-soft-cream)" />
            </g>
          </svg>
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
