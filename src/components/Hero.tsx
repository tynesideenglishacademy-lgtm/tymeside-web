import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GoogleRatingBadge from './GoogleRatingBadge';
// Decorative bridge line-art, mobile only. Pure CSS now (~1 kB of static SVG,
// no motion dependency), so it rides the main bundle instead of a lazy chunk.
import HeroBridge from './HeroBridge';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section style={{
      position: 'relative',
      // svh, not vh: on mobile the browser chrome makes 100vh taller than the
      // visible area, which pushed the CTA below the fold.
      minHeight: '100vh',
      // Same property, applied second: browsers that understand svh take this,
      // the rest drop it as invalid and keep the vh fallback.
      minBlockSize: '100svh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '7.5rem',
      paddingBottom: '6rem',
      overflow: 'hidden',
      backgroundColor: 'var(--color-deep-navy)'
    }}>
      {/* Background photo with a navy wash for text legibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        // 62 KB webp in place of the 706 KB source PNG. This is the LCP paint,
        // so index.html preloads it — a CSS background is otherwise not
        // discovered until the stylesheet has parsed.
        backgroundImage: 'linear-gradient(to right, rgba(9, 19, 30, 0.96) 25%, rgba(9, 19, 30, 0.82) 65%, rgba(9, 19, 30, 0.9) 100%), url("/img/hero-bg-new-960.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: 0
      }}></div>

      <HeroBridge />

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
            <div className="animate-slide-up eyebrow" style={{
              marginBottom: '1.8rem'
            }}>
              Centro preparador Cambridge · Murcia
            </div>

            {/* Main Headline */}
            <h1 className="animate-slide-up delay-100" style={{
              fontSize: 'var(--text-hero)',
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
              <Link to="/level-test" className="btn-gold">
                <span>{t('hero.cta')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>

              <a href="#courses" className="btn-secondary">
                <span>{t('nav.courses')}</span>
              </a>
            </div>

            {/* Key Metric Pills */}
            <div style={{
              display: 'flex',
              // No wrap and no align-items here on purpose. The 1px separators
              // below have no height of their own — they rely on the default
              // `stretch` — and allowing the row to wrap on a phone put each
              // item on its own line, pushing the Google rating below the fold,
              // which is the one thing it was moved up here to avoid.
              gap: '2rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border-glass)'
            }}>
              {/* Was "98%", which nobody could source. Ben's history,
                  confirmed 2026-08-30: at Hello Academy 2022–2024, left
                  mid-way through the 23/24 course, founded Tyneside. One
                  failed candidate since — and Ben confirms it was in 2024,
                  so "100% · últimos 2 años" is clean and safe to publish.
                  The old "60 candidates / 5 years" figure spanned two
                  academies, so no five-year percentage goes on this site. */}
              <div className="hero-stat-self">
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-warm-gold)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', fontWeight: 500 }}>Aprobados · últimos 2 años</div>
              </div>
              <div className="hero-stat-divider" style={{ width: '1px', backgroundColor: 'var(--color-border-glass)' }}></div>
              {/* Replaced "15+ Años de Excelencia" (Tyneside is ~2 years old,
                  false as an academy-age claim) with Ben's own teaching
                  record: he has taught English since 2015, confirmed
                  2026-08-30. Label says "enseñando" so it reads as his
                  experience, not the academy's age. */}
              <div className="hero-stat-self">
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-soft-cream)' }}>2015</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', fontWeight: 500 }}>Enseñando inglés desde</div>
              </div>
              <div className="hero-stat-divider" style={{ width: '1px', backgroundColor: 'var(--color-border-glass)' }}></div>
              {/* Was a third "100% Profesores Nativos" — the same claim appears
                  again further down, and like the two beside it, it is the
                  academy grading its own homework. The Google score is the one
                  number here a parent can verify, so it takes the slot. */}
              <GoogleRatingBadge />
            </div>
          </div>

          {/* Hero Right Visual Highlight Glass Card */}
          <div className="animate-slide-up delay-200">
            <div className="glass-card-premium card-elevated card-accent-top" style={{
              border: '1px solid var(--color-amber-border)',
              padding: '2.25rem'
            }}>
              {/* Highlight Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-amber)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1a1200'
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Test de Nivel Online</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)' }}>Gratuito y sin compromiso</p>
                  </div>
                </div>
                <span style={{
                  padding: '0.25rem 0.7rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-amber-soft)',
                  color: 'var(--color-amber)',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>5 MIN</span>
              </div>

              {/* Course Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {[
                  'Evaluación detallada de Gramática y Vocabulario',
                  'Recomendación del examen Cambridge adecuado',
                  'Asesoramiento personalizado con profesor nativo',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" strokeWidth="3" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
                    <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item}</div>
                  </div>
                ))}
              </div>

              {/* Card Action Link */}
              <Link to="/level-test" className="btn-gold" style={{ width: '100%' }}>
                <span>Empezar Test de Nivel Gratis</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
