import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

/**
 * camps1-480.webp / camps2-480.webp were never trip or camp photography -
 * they're the site's own logo banner, shown twice. No real trip photography
 * exists yet, so rather than fake it with a stock photo of the wrong thing,
 * this is an honest illustration of what the section is actually about: the
 * Murcia-Newcastle route itself. See CLAUDE.md.
 *
 * Also breaks from the media-left/text-right shape most other sections
 * share: text at readable width first, then a wide illustration spanning
 * the full container, then the closing line pulled out as a standalone
 * statement.
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
            section="trips"
            label={t('trips.label')}
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
            style={{ color: 'var(--color-gold)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}
          >
            <span>International House Newcastle</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
          </a>

          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            marginTop: '1.4rem',
            padding: '0.9rem 1.1rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(201, 162, 39, 0.08)',
            border: '1px solid var(--color-gold-border)'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="3" aria-hidden="true" style={{ flexShrink: 0, marginTop: '0.2rem' }}><path d="M20 6 9 17l-5-5" /></svg>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#D4DEE8', margin: 0 }}>
              {t('trips.track_record')}
            </p>
          </div>
        </div>

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
              stroke="var(--color-gold)"
              strokeWidth="2"
              strokeDasharray="7 9"
              opacity="0.85"
            />
            <circle cx="55" cy="250" r="6" fill="var(--color-gold)" />
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
          borderLeft: '3px solid var(--color-gold)',
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
