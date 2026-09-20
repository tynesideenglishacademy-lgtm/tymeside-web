import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const Courses = () => {
  const { t } = useTranslation();
  const courseList = [
    { id: 'tyneside-explorers', titleKey: 'courses.explorers_title', descKey: 'courses.explorers_desc', image: 'young_learners-v2', interest: 'Tyneside Explorers (3-5 años)' },
    { id: 'young-learners-primaria', titleKey: 'courses.yl_title', descKey: 'courses.yl_desc', image: 'primary-v2', interest: 'YLE Primaria (6-12 años)' },
    { id: 'adolescents-secundaria', titleKey: 'courses.adolescents_title', descKey: 'courses.adolescents_desc', image: 'teens-v2', interest: 'Cambridge Adolescentes (ESO/Bachillerato)' },
    { id: 'adult-courses', titleKey: 'courses.adults_title', descKey: 'courses.adults_desc', image: 'adults-v2', interest: 'Cambridge Adultos (B1, B2, C1, C2)' },
    { id: 'speaking-classes', titleKey: 'courses.speaking_title', descKey: 'courses.speaking_desc', image: 'speaking-v2', interest: 'Clases de conversación' },
    { id: 'intensive-courses', titleKey: 'courses.intensive_title', descKey: 'courses.intensive_desc', image: 'intensive-v2', interest: 'Cursos intensivos' }
  ];

  return (
    <section id="courses" className="section-light editorial-programmes">
      <div className="container">
        <SectionHeader section="courses" label={t('courses.label')} title={t('courses.title')} lead={t('courses.lead')} />

        <div className="programme-index">
          {courseList.map((course, index) => (
            <article key={course.id} className={`programme-item programme-item-${index + 1}`}>
              <img
                src={`/img/${course.image}-480.webp`}
                srcSet={`/img/${course.image}-480.webp 480w, /img/${course.image}-960.webp 960w`}
                sizes="(max-width: 720px) 100vw, 50vw"
                alt={t(course.titleKey)}
                width={960}
                height={640}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="programme-copy">
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{t(course.titleKey)}</h3>
                <p>{t(course.descKey)}</p>
                <Link to={`/?interest=${encodeURIComponent(course.interest)}#contact`} className="text-link">{t('courses.more')}</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="programme-cta">
          <p>{t('courses.footer')}</p>
          <div>
            <Link to="/level-test" className="btn-editorial-primary">{t('courses.cta')}</Link>
            <a href="#contact" className="text-link">{t('courses.contact')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
