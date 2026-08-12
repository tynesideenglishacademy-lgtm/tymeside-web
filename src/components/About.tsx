import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const methods = [
    { titleKey: 'methodology.m1_title', descKey: 'methodology.m1_desc', icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ) },
    { titleKey: 'methodology.m2_title', descKey: 'methodology.m2_desc', icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    ) },
    { titleKey: 'methodology.m3_title', descKey: 'methodology.m3_desc', icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
    ) },
    { titleKey: 'methodology.m4_title', descKey: 'methodology.m4_desc', icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    ) }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" style={{
        padding: '7rem 0',
        backgroundColor: 'var(--color-deep-navy)',
        color: 'white',
        position: 'relative'
      }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center'
          }}>
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
                Nuestra Esencia
              </span>

              <h2 className="animate-slide-up" style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                color: 'var(--color-warm-gold)',
                marginBottom: '1.5rem',
                fontWeight: 900
              }}>
                {t('about.title')}
              </h2>

              <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-river-teal)', marginBottom: '2.5rem', borderRadius: '2px' }}></div>
              
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#E2E8F0' }}>
                {t('about.p1')}
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#E2E8F0' }}>
                {t('about.p2')}
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 700, color: 'var(--color-gold-light)' }}>
                {t('about.p3')}
              </p>
            </div>
            
            <div className="glass-card-premium" style={{
              height: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'linear-gradient(135deg, rgba(16,42,67,0.85) 0%, rgba(9,19,30,0.92) 100%), url("/logo-light.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: '1px solid var(--color-border-gold)'
            }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🇬🇧</div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-warm-gold)', fontWeight: 800 }}>Tyneside English Academy</h3>
                <p style={{ color: 'var(--color-slate-muted)', marginTop: '0.5rem', fontSize: '1.05rem' }}>Puente Tocinos · Murcia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Balanced 4 Grid */}
      <section id="methodology" style={{
        backgroundColor: '#F8FAFC',
        padding: '7rem 0',
        color: 'var(--color-deep-navy)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              color: 'var(--color-deep-navy)',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Claves del Éxito
            </span>

            <h2 className="animate-slide-up" style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              color: 'var(--color-deep-navy)',
              marginBottom: '1.2rem',
              fontWeight: 900
            }}>
              {t('methodology.title')}
            </h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-warm-gold)', margin: '0 auto 2rem', borderRadius: '2px' }}></div>

            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', color: '#475569', lineHeight: 1.75 }}>
              {t('methodology.desc')}
            </p>
          </div>

          <div className="grid-balanced-4">
            {methods.map((method, i) => (
              <div key={i} className="light-card interactive" style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '100%'
              }}>
                <div style={{
                  color: 'var(--color-river-teal)',
                  marginBottom: '1.5rem',
                  backgroundColor: 'rgba(29, 92, 138, 0.1)',
                  padding: '1rem',
                  borderRadius: '16px'
                }}>
                  {method.icon}
                </div>
                <h3 className="light-card-title" style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>
                  {t(method.titleKey)}
                </h3>
                <p className="light-card-body" style={{ fontSize: '1rem', lineHeight: 1.65 }}>
                  {t(method.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
