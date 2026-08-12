import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '7.5rem',
      paddingBottom: '6rem',
      overflow: 'hidden',
      backgroundColor: 'var(--color-deep-navy)'
    }}>
      {/* Background Hero Layer with Dual Ambient Lighting */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to right, rgba(9, 19, 30, 0.95) 20%, rgba(9, 19, 30, 0.75) 60%, rgba(9, 19, 30, 0.85) 100%), url("/hero-bg-new.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: 0
      }}></div>

      {/* Radial Gold Ambient Glow Left */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(9, 19, 30, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      {/* Radial Cyan Ambient Glow Right */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(9, 19, 30, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* Hero Left Content */}
          <div>
            {/* Cambridge Badge Header */}
            <div className="animate-slide-up" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1.2rem',
              backgroundColor: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '999px',
              color: 'var(--color-warm-gold)',
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '1.8rem',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.15)'
            }}>
              <span style={{ fontSize: '1.1rem' }}>🎓</span>
              <span>CAMBRIDGE ASSESSMENT ENGLISH · MURCIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-slide-up delay-100" style={{
              fontSize: 'clamp(3rem, 5.5vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em'
            }}>
              <span style={{ display: 'block' }}>Learn.</span>
              <span style={{ display: 'block' }}>Grow.</span>
              <span className="text-gradient-gold" style={{ display: 'block' }}>Connect.</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-slide-up delay-200" style={{
              fontSize: '1.25rem',
              color: 'var(--color-slate-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
              maxWidth: '520px'
            }}>
              {t('hero.h1')}
            </p>

            {/* Call to Actions */}
            <div className="animate-slide-up delay-300" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.2rem',
              alignItems: 'center'
            }}>
              <Link to="/level-test" className="btn-gold animate-pulse-glow">
                <span>{t('hero.cta')}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>

              <a href="#courses" className="btn-secondary">
                <span>{t('nav.courses')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"></path></svg>
              </a>
            </div>

            {/* Key Metric Pills */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border-glass)'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-warm-gold)' }}>98%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', fontWeight: 500 }}>Aprobados Cambridge</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--color-border-glass)' }}></div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-soft-cream)' }}>15+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', fontWeight: 500 }}>Años de Excelencia</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--color-border-glass)' }}></div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent-cyan)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', fontWeight: 500 }}>Profesores Nativos</div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Highlight Glass Card */}
          <div className="animate-slide-up delay-200">
            <div className="glass-card-premium" style={{
              background: 'linear-gradient(135deg, rgba(16, 42, 67, 0.6) 0%, rgba(9, 19, 30, 0.8) 100%)',
              border: '1px solid var(--color-border-gold)',
              padding: '2.5rem'
            }}>
              {/* Highlight Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F3C649 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-deep-navy)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Test de Nivel Online</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)' }}>Gratuito y sin compromiso</p>
                  </div>
                </div>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--color-accent-cyan)',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>5 MIN</span>
              </div>

              {/* Course Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.2rem', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ color: 'var(--color-warm-gold)' }}>✓</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>Evaluación detallada de Gramática y Vocabulario</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.2rem', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ color: 'var(--color-warm-gold)' }}>✓</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>Recomendación del examen Cambridge adecuado</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.2rem', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ color: 'var(--color-warm-gold)' }}>✓</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>Asesoramiento personalizado con profesor nativo</div>
                </div>
              </div>

              {/* Card Action Link */}
              <Link to="/level-test" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.05) 100%)',
                border: '1px solid var(--color-border-gold)',
                color: 'var(--color-gold-light)',
                fontWeight: 700,
                fontSize: '1rem'
              }}>
                <span>Empezar Test de Nivel Gratis</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Smooth Wave */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        zIndex: 2
      }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: '100%', height: '50px' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,145.47,117,219,103.35,253.51,96.93,287.16,77.72,321.39,56.44Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
