import { useTranslation } from 'react-i18next';

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
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                height: '320px',
                transform: 'translateY(1.5rem)',
                border: '1px solid var(--color-border-gold)'
              }}>
                <img src="/camps1.png" alt="Summer Camps" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                height: '320px',
                border: '1px solid var(--color-border-glass)'
              }}>
                <img src="/camps2.png" alt="Immersion Trips" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div>
            <span style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              color: 'var(--color-warm-gold)',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem'
            }}>
              Experiencias Internacionales
            </span>

            <h2 className="animate-slide-up" style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              color: 'var(--color-soft-cream)',
              marginBottom: '1.2rem',
              fontWeight: 900
            }}>
              {t('trips.title')}
            </h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-warm-gold)', marginBottom: '2rem', borderRadius: '2px' }}></div>
            
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#E2E8F0' }}>
              {t('trips.p1')}
            </p>

            <div style={{
              padding: '1.2rem 1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--color-border-glass)',
              marginBottom: '1.8rem'
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#E2E8F0' }}>
                {t('trips.p2')}<br/>
                <a href="https://www.ihnewcastle.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-light)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <span>International House Newcastle</span>
                  <span>↗</span>
                </a>
              </p>
            </div>

            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 700, color: 'var(--color-warm-gold)' }}>
              {t('trips.p3')}
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TripsCamps;
