import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GoogleRatingBadge from './GoogleRatingBadge';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero-copy">
        <p className="editorial-kicker">{t('hero.eyebrow')}</p>
        <h1 id="hero-title">
          <span>Learn.</span>
          <span>Grow.</span>
          <span className="hero-gold">Connect.</span>
          <span className="hero-subtitle">{t('hero.h1_subtitle')}</span>
        </h1>
        <p className="editorial-hero-lead">{t('hero.h1')}</p>

        <div className="editorial-hero-actions">
          <Link to="/level-test" className="btn-editorial-primary">{t('hero.test_cta')}</Link>
          <a href="#courses" className="text-link">{t('hero.courses_link')}</a>
        </div>

        <div className="editorial-proof" aria-label="Datos de la academia">
          <div>
            <strong>100%</strong>
            <span>{t('hero.stat_pass')}</span>
          </div>
          <div>
            <strong><small>{t('hero.stat_since')}</small> 2015</strong>
            <span>{t('hero.stat_teaching')}</span>
          </div>
          <GoogleRatingBadge />
        </div>
      </div>

      <figure className="editorial-hero-image">
        <picture>
          <source media="(max-width: 720px)" srcSet="/img/tyne-bridge-hero-960.webp" />
          <img
            src="/img/tyne-bridge-hero-1920.webp"
            alt="El Tyne Bridge sobre el río Tyne en Newcastle"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
        </picture>
        <figcaption>Newcastle upon Tyne</figcaption>
      </figure>
    </section>
  );
};

export default Hero;
