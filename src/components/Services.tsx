import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    {
      titleKey: 'services.f_title',
      desc1Key: 'services.f_desc1',
      desc2Key: 'services.f_desc2',
      desc3Key: 'services.f_desc3',
      icon: (
        <svg className="icon-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm-gold)" strokeWidth="2"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
      )
    },
    {
      titleKey: 'services.s_title',
      desc1Key: 'services.s_desc',
      icon: (
        <svg className="icon-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm-gold)" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      )
    },
    {
      titleKey: 'services.o_title',
      desc1Key: 'services.o_desc',
      icon: (
        <svg className="icon-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm-gold)" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      )
    },
    {
      titleKey: 'services.t_title',
      desc1Key: 'services.t_desc',
      icon: (
        <svg className="icon-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm-gold)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
      )
    }
  ];

  return (
    <section id="services" style={{
      padding: '7.5rem 0',
      position: 'relative',
      color: 'white',
      backgroundColor: 'var(--color-deep-navy)'
    }}>
      {/* Background Image with Dark Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, rgba(9, 19, 30, 0.94), rgba(9, 19, 30, 0.9)), url("/services_b2b.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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
            marginBottom: '1rem'
          }}>
            Servicios Especializados & Empresas
          </span>

          <h2 className="animate-slide-up" style={{
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
            fontWeight: 900,
            marginBottom: '1.2rem',
            color: 'white'
          }}>
            {t('services.title')}
          </h2>

          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: 'var(--color-warm-gold)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div className="grid-2x2">
          {servicesList.map((svc, index) => (
            <div key={index} className="glass-card-premium" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                <div style={{ 
                  marginBottom: '1.5rem',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  display: 'inline-block',
                  padding: '1rem',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border-gold)',
                  color: 'var(--color-warm-gold)'
                }}>{svc.icon}</div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-gold-light)', marginBottom: '1.2rem', fontWeight: 800 }}>
                  {t(svc.titleKey)}
                </h3>

                <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: svc.desc2Key ? '1rem' : 0, color: '#E2E8F0' }}>
                  {t(svc.desc1Key)}
                </p>

                {svc.desc2Key && (
                  <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: '1rem', color: '#E2E8F0' }}>
                    {t(svc.desc2Key)}
                  </p>
                )}
              </div>

              {svc.desc3Key && (
                <div style={{
                  paddingTop: '1.2rem',
                  marginTop: '1.5rem',
                  borderTop: '1px solid var(--color-border-glass)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--color-warm-gold)'
                }}>
                  {t(svc.desc3Key)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <a href="#contact" className="btn-gold">
            {t('services.cta')}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
