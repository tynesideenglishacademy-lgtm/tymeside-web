import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StudentAccess = () => {
  const { t } = useTranslation();

  return (
    <section className="student-access-band" aria-labelledby="student-access-title">
      <div className="container student-access-band-grid">
        <div>
          <p className="student-access-kicker">{t('student_area.label')}</p>
          <h2 id="student-access-title">{t('student_area.home_title')}</h2>
          <p>{t('student_area.home_desc')}</p>
        </div>
        <div className="student-access-actions">
          <Link to="/alumnos" className="btn-editorial-primary">{t('student_area.open')}</Link>
          <Link to="/recursos" className="text-link">{t('resources.material')}</Link>
        </div>
      </div>
    </section>
  );
};

export default StudentAccess;
