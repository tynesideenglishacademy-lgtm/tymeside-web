import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const Services = () => {
  const { t } = useTranslation();
  const servicesList = [
    { titleKey: 'services.f_title', descKey: 'services.f_desc1', noteKey: 'services.f_desc3', to: '/empresas', ctaKey: 'services.f_cta' },
    { titleKey: 'services.s_title', descKey: 'services.s_desc', to: '/colegios', ctaKey: 'services.info_cta', download: '/downloads/dossier-colegios-tyneside-2026-27.pdf', downloadLabelKey: 'services.dossier_cta' },
    { titleKey: 'services.o_title', descKey: 'services.o_desc', to: '/one-to-one', ctaKey: 'services.info_cta' },
    { titleKey: 'services.t_title', descKey: 'services.t_desc', to: '/traduccion', ctaKey: 'services.info_cta' }
  ];

  return (
    <section id="services" className="editorial-services">
      <div className="container editorial-services-grid">
        <div className="editorial-services-intro">
          <SectionHeader section="services" label={t('services.label')} title={t('services.title')} />
          <a href="#contact" className="btn-editorial-primary">{t('services.cta')}</a>
        </div>

        <div className="service-directory">
          {servicesList.map((service) => (
            <article key={service.titleKey}>
              <div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descKey)}</p>
                {service.noteKey && <strong>{t(service.noteKey)}</strong>}
                <div className="service-directory-actions">
                  <Link to={service.to} className="text-link">{t(service.ctaKey)}</Link>
                  {service.download && service.downloadLabelKey && (
                    <a href={service.download} download className="text-link">{t(service.downloadLabelKey)}</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
