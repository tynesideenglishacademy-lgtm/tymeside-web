import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

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
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.2rem'
            }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
                height: '320px',
                transform: 'translateY(1.5rem)',
                border: '1px solid var(--color-border-glass)'
              }}>
                <img src="/img/camps1-480.webp" alt="Campamentos de verano" width={480} height={480} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
                height: '320px',
                border: '1px solid var(--color-border-glass)'
              }}>
                <img src="/img/camps2-480.webp" alt="Viajes de inmersión lingüística" width={480} height={480} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              section="trips"
              label="Experiencias internacionales"
              title={t('trips.title')}
              onDark
            />

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#D4DEE8' }}>
              {t('trips.p1')}
            </p>

            <div style={{
              padding: '1.2rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--color-border-glass)',
              marginBottom: '1.8rem'
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#D4DEE8' }}>
                {t('trips.p2')}<br/>
                <a href="https://www.ihnewcastle.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <span>International House Newcastle</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
                </a>
              </p>
            </div>

            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 700, color: 'var(--color-soft-cream)' }}>
              {t('trips.p3')}
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TripsCamps;
