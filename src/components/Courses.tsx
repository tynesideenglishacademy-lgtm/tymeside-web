import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const Courses = () => {
  const { t } = useTranslation();

  const courseList = [
    {
      id: 'tyneside-explorers',
      titleKey: 'courses.explorers_title',
      descKey: 'courses.explorers_desc',
      image: 'young_learners',
      badge: '3 - 6 Años',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
      )
    },
    {
      id: 'young-learners-primaria',
      titleKey: 'courses.yl_title',
      descKey: 'courses.yl_desc',
      image: 'young_learners',
      badge: 'Primaria (6-12 Años)',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
      )
    },
    {
      id: 'adolescents-secundaria',
      titleKey: 'courses.adolescents_title',
      descKey: 'courses.adolescents_desc',
      image: 'teens',
      badge: 'ESO y Bachillerato',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12 12 2l10 10-10 10Z"></path></svg>
      )
    },
    {
      id: 'adult-courses',
      titleKey: 'courses.adults_title',
      descKey: 'courses.adults_desc',
      image: 'adults',
      badge: 'Adultos & Cambridge',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      )
    },
    {
      id: 'speaking-classes',
      titleKey: 'courses.speaking_title',
      descKey: 'courses.speaking_desc',
      image: 'speaking',
      badge: 'Conversación Fluida',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      )
    },
    {
      id: 'intensive-courses',
      titleKey: 'courses.intensive_title',
      descKey: 'courses.intensive_desc',
      image: 'intensive',
      badge: 'Cursos Intensivos',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
      )
    }
  ];

  return (
    <section id="courses" className="section-light" style={{
      padding: 'var(--section-y) 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)',
      position: 'relative'
    }}>
      <div className="container">
        
        <SectionHeader
          section="courses"
          label="Oferta académica"
          title={t('courses.title')}
          lead="De los tres años al C2. Cada etapa tiene su propio grupo, su propio material y un profesor nativo que la conoce a fondo."
        />

        <div className="grid-cards" style={{ marginBottom: '5rem' }}>
          {courseList.map((course) => (
            <div key={course.id} className="light-card interactive" style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div className="card-media">
                <img
                  src={`/img/${course.image}-480.webp`}
                  srcSet={`/img/${course.image}-480.webp 480w, /img/${course.image}-960.webp 960w`}
                  /* Card is full width on a phone, half the grid on a tablet,
                     a third of the 1200px container on desktop. */
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  alt={t(course.titleKey)}
                  width={480}
                  height={320}
                  loading="lazy"
                  decoding="async"
                />

                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: 'var(--color-deep-navy)',
                  color: 'var(--color-gold)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}>
                  {course.badge}
                </div>
              </div>

              {/* Card Content Body */}
              <div style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* The old "TYNESIDE ACADEMY" caption sat here on all six
                      cards, which told the reader nothing they didn't already
                      know. The icon alone carries the same accent. */}
                  <div style={{
                    display: 'inline-flex',
                    color: 'var(--color-river-teal)',
                    backgroundColor: 'rgba(29, 92, 138, 0.09)',
                    padding: '0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1rem'
                  }}>
                    {course.icon}
                  </div>

                  <h3 className="light-card-title" style={{
                    fontSize: '1.4rem',
                    marginBottom: '1rem',
                    fontWeight: 700
                  }}>
                    {t(course.titleKey)}
                  </h3>

                  <p className="light-card-body" style={{
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    marginBottom: '1.8rem'
                  }}>
                    {t(course.descKey)}
                  </p>
                </div>

                {/* Card Action Link */}
                <a href="#contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--color-tyneside-blue)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}>
                  <span>Más información</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="glass-card-premium" style={{
          textAlign: 'center',
          padding: '3.5rem 2rem',
          backgroundColor: 'var(--color-deep-navy)',
          borderRadius: 'var(--radius-lg)',
          color: 'white'
        }}>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', color: '#D4DEE8', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
            {t('courses.footer')}
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/level-test" className="btn-gold">
              {t('courses.cta')}
            </Link>
            <a href="#contact" className="btn-secondary">
              Contáctanos
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;
