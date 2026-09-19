import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import BridgeMotif from './BridgeMotif';

const About = () => {
  const { t } = useTranslation();

  // Icon-in-a-colored-square for each item was the single most generic
  // "AI SaaS template" tell on the page (see CLAUDE.md). These four pillars
  // are a real, fixed, small set — unlike the page's sections, a numeral
  // here isn't implying a false sequence, just labelling "the four things."
  const methods = [
    { titleKey: 'methodology.m1_title', descKey: 'methodology.m1_desc' },
    { titleKey: 'methodology.m2_title', descKey: 'methodology.m2_desc' },
    { titleKey: 'methodology.m3_title', descKey: 'methodology.m3_desc' },
    { titleKey: 'methodology.m4_title', descKey: 'methodology.m4_desc' },
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
              <SectionHeader
                label="Nuestra esencia"
                title={t('about.title')}
                onDark
              />

              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#D4DEE8' }}>
                {t('about.p1')}
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#D4DEE8' }}>
                {t('about.p2')}
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 700, color: 'var(--color-amber)' }}>
                {t('about.p3')}
              </p>
            </div>

            {/* Was a fixed 420px box with the logo as a background-image and the
                caption shoved down with margin-top: 9rem — it broke the moment
                the text wrapped. Now it is a normal flow column, so it sizes
                itself and stays centred at any width. */}
            <div className="glass-card-premium card-accent-top" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '3.5rem 2rem',
              textAlign: 'center',
              border: '1px solid var(--color-border-glass)'
            }}>
              <img
                src="/logo-light.png"
                alt=""
                width={220}
                height={220}
                loading="lazy"
                decoding="async"
                style={{ width: 'min(220px, 60%)', height: 'auto' }}
              />

              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-soft-cream)', fontWeight: 700 }}>Tyneside English Academy</h3>
                <p style={{ color: 'var(--color-slate-muted)', marginTop: '0.5rem', fontSize: '1.05rem' }}>Puente Tocinos · Murcia</p>
              </div>

              <div style={{
                display: 'flex',
                gap: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--color-border-glass)',
                width: '100%',
                justifyContent: 'center'
              }}>
                {/* "15+ Años" as academy age was false (Tyneside founded
                    mid-2023/24). Replaced with Ben's teaching start year,
                    2015, confirmed 2026-08-30 — labelled "Enseñando" so it is
                    clearly his experience, not the academy's age. */}
                <div>
                  <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-amber)' }}>2015</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Enseñando</div>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--color-border-glass)' }} />
                <div>
                  <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-soft-cream)' }}>100%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Nativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Balanced 4 Grid */}
      <section id="methodology" className="section-light" style={{
        backgroundColor: '#F8FAFC',
        padding: 'var(--section-y) 0',
        color: 'var(--color-deep-navy)'
      }}>
        <BridgeMotif />
        <div className="container">
          <SectionHeader
            label="Claves del éxito"
            title={t('methodology.title')}
            lead={t('methodology.desc')}
          />

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
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.75rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(27, 58, 91, 0.28)',
                  marginBottom: '1rem'
                }}>
                  {String(i + 1).padStart(2, '0')}
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
