import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { t } = useTranslation();

  const courseList = [
    {
      id: 'tyneside-explorers',
      titleKey: 'courses.explorers_title',
      descKey: 'courses.explorers_desc',
      image: '/young_learners.png',
      badge: '3 - 6 Años',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
      )
    },
    {
      id: 'young-learners-primaria',
      titleKey: 'courses.yl_title',
      descKey: 'courses.yl_desc',
      image: '/young_learners.png',
      badge: 'Primaria (6-12 Años)',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
      )
    },
    {
      id: 'adolescents-secundaria',
      titleKey: 'courses.adolescents_title',
      descKey: 'courses.adolescents_desc',
      image: '/teens.png',
      badge: 'ESO y Bachillerato',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12 12 2l10 10-10 10Z"></path></svg>
      )
    },
    {
      id: 'adult-courses',
      titleKey: 'courses.adults_title',
      descKey: 'courses.adults_desc',
      image: '/adults.png',
      badge: 'Adultos & Cambridge',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      )
    },
    {
      id: 'speaking-classes',
      titleKey: 'courses.speaking_title',
      descKey: 'courses.speaking_desc',
      image: '/speaking.png',
      badge: 'Conversación Fluida',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      )
    },
    {
      id: 'intensive-courses',
      titleKey: 'courses.intensive_title',
      descKey: 'courses.intensive_desc',
      image: '/intensive.png',
      badge: 'Cursos Intensivos',
      icon: (
        <svg className="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
      )
    }
  ];

  return (
    <section id="courses" style={{
      padding: '7rem 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Title */}
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
            Nuestra Oferta Académica
          </span>

          <h2 className="animate-slide-up" style={{
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--color-deep-navy)',
            marginBottom: '1.2rem'
          }}>
            {t('courses.title')}
          </h2>

          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: 'var(--color-warm-gold)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Responsive Grid for All 6 Courses */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          marginBottom: '5rem'
        }}>
          {courseList.map((course) => (
            <div key={course.id} className="light-card interactive" style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Card Image Container */}
              <div style={{
                position: 'relative',
                height: '220px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-tyneside-blue)'
              }}>
                <img src={course.image} alt={t(course.titleKey)} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} />

                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(9, 19, 30, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--color-gold-light)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: '1px solid var(--color-border-gold)'
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: 'var(--color-river-teal)',
                    marginBottom: '0.8rem'
                  }}>
                    {course.icon}
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tyneside Academy</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.4rem',
                    color: 'var(--color-deep-navy)',
                    marginBottom: '1rem',
                    fontWeight: 800
                  }}>
                    {t(course.titleKey)}
                  </h3>

                  <p style={{
                    color: '#475569',
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
                  gap: '0.5rem',
                  color: 'var(--color-tyneside-blue)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}>
                  <span>Más información</span>
                  <span>→</span>
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
          borderRadius: '24px', 
          color: 'white'
        }}>
          <p style={{ fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '2rem', color: '#E2E8F0', maxWidth: '800px', margin: '0 auto 2rem' }}>
            "{t('courses.footer')}"
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
