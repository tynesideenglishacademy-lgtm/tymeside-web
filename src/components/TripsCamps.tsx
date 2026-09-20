import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const TripsCamps = () => {
  const { t } = useTranslation();
  const heritagePlaces = [
    { image: '/img/greys-monument-900.webp', title: t('trips.heritage_city'), alt: t('trips.alt_monument') },
    { image: '/img/angel-north-900.webp', title: t('trips.heritage_icon'), alt: t('trips.alt_angel') },
    { image: '/img/bamburgh-castle-900.webp', title: t('trips.heritage_coast'), alt: t('trips.alt_bamburgh') },
  ];

  return (
    <section id="trips" className="section-light trips-section" style={{
      padding: '7rem 0',
      position: 'relative'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          
          <figure className="trips-photo" style={{ position: 'relative' }}>
            <picture>
              <source media="(min-width: 900px)" srcSet="/img/newcastle-quayside-1440.webp" />
              <img
                src="/img/newcastle-quayside-960.webp"
                alt={t('trips.alt_newcastle')}
                width={960}
                height={640}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="trips-photo-caption" aria-hidden="true">
              <span>Newcastle Quayside</span>
            </div>
          </figure>

          <div>
            <SectionHeader
              section="trips"
              label={t('trips.label')}
              title={t('trips.title')}
            />

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-ink-muted)' }}>
              {t('trips.p1')}
            </p>

            <div className="trips-partner-note">
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-ink-muted)' }}>
                {t('trips.p2')}<br/>
                <a href="https://www.ihnewcastle.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-ink)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <span>International House Newcastle</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
                </a>
              </p>
            </div>

            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 700, color: 'var(--color-ink)' }}>
              {t('trips.p3')}
            </p>
            <Link to="/newcastle" className="trips-detail-link">
              {t('trips.more', { defaultValue: 'Conoce la experiencia' })}
            </Link>
          </div>
          
        </div>

        <div className="heritage-block">
          <div className="heritage-intro">
            <p className="eyebrow">{t('trips.heritage_label')}</p>
            <h3>{t('trips.heritage_title')}</h3>
            <p>{t('trips.heritage_desc')}</p>
          </div>
          <div className="heritage-grid">
            {heritagePlaces.map((place) => (
              <figure className="heritage-card" key={place.image}>
                <img src={place.image} alt={place.alt} width={900} height={600} loading="lazy" decoding="async" />
                <figcaption>
                  <strong>{place.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TripsCamps;
