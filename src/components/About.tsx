import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useTranslation();
  const methods = [
    ['methodology.m1_title', 'methodology.m1_desc'],
    ['methodology.m2_title', 'methodology.m2_desc'],
    ['methodology.m3_title', 'methodology.m3_desc'],
    ['methodology.m4_title', 'methodology.m4_desc']
  ];

  return (
    <>
      <section id="about" className="editorial-about">
        <div className="container editorial-about-grid">
          <div className="editorial-about-statement">
            <SectionHeader section="about" label={t('about.label')} title={t('about.title')} />
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <strong>{t('about.p3')}</strong>
          </div>

          <aside className="academy-facts" aria-label="Tyneside English Academy">
            <img src="/logo-light.png" alt="Tyneside English Academy" width={600} height={600} loading="lazy" />
            <div><span>Tyneside English Academy</span><strong>Puente Tocinos, Murcia</strong></div>
            <dl>
              <div><dt>{t('about.teaching_since')}</dt><dd>2015</dd></div>
              <div><dt>{t('about.native_teachers')}</dt><dd>100%</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="methodology" className="section-light editorial-method">
        <div className="container editorial-method-grid">
          <SectionHeader section="method" label={t('methodology.label')} title={t('methodology.title')} lead={t('methodology.desc')} />
          <div className="method-list">
            {methods.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{t(title)}</h3><p>{t(description)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
