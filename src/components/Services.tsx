import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

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
      backgroundColor: 'var(--color-deep-navy)',
      overflow: 'hidden'
    }}>
      {/* Was a stock photo of a "corporate boardroom" - on closer inspection
          it's almost certainly AI-generated: the presentation slide reads
          "Q4 GLOBAL GROWTH & MARKET STRATEGY" over garbled chart labels
          ("BXENES RANK STRATEGY"), and the building signage outside the
          window is illegible gibberish - the same tell as the fabricated
          text problems elsewhere on this site, just visual instead of
          written. Replaced with a plain gradient and the one background
          element that's actually this brand's own: the bridge, drawn large
          rather than as the thin seam-strip version. See CLAUDE.md. */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(165deg, var(--color-navy-surface) 0%, var(--color-deep-navy) 65%)',
        zIndex: 0
      }}></div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="xMaxYMid slice"
        style={{
          position: 'absolute',
          right: 0,
          bottom: '-40px',
          width: '85%',
          maxWidth: '900px',
          height: '260px',
          color: 'var(--color-tyneside-blue)',
          opacity: 0.22,
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <line x1="0" y1="72" x2="1440" y2="72" stroke="currentColor" strokeWidth="1.5" />
        <path d="M120,72 C120,10 1320,10 1320,72" fill="none" stroke="currentColor" strokeWidth="2" />
        {[
          [240, 48.4], [360, 31.6], [480, 19.6], [600, 12.4],
          [840, 12.4], [960, 19.6], [1080, 31.6], [1200, 48.4],
        ].map(([x, y]) => (
          <line key={x} x1={x} y1={y} x2={x} y2="72" stroke="currentColor" strokeWidth="1.25" />
        ))}
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <SectionHeader
          label="Empresas y formación"
          title={t('services.title')}
          onDark
        />

        <div className="grid-2x2">
          {servicesList.map((svc, index) => (
            <div key={index} className="glass-card-premium" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                {/* Boxed icon-on-tinted-square dropped (see CLAUDE.md) — a bare
                    icon reads less like a template than the same icon boxed
                    twice on one page (Methodology already carries the boxed
                    version's replacement: numerals, not this icon set). */}
                <div style={{ marginBottom: '1.25rem', color: 'var(--color-amber)' }}>{svc.icon}</div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-soft-cream)', marginBottom: '1.2rem', fontWeight: 700 }}>
                  {t(svc.titleKey)}
                </h3>

                <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: svc.desc2Key ? '1rem' : 0, color: '#D4DEE8' }}>
                  {t(svc.desc1Key)}
                </p>

                {svc.desc2Key && (
                  <p style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: '1rem', color: '#D4DEE8' }}>
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
                  color: 'var(--color-amber)'
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
