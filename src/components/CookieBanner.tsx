import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { readConsent, setConsent } from '../lib/consent';

/**
 * Bottom-of-viewport cookie notice. Shows only when no choice has been stored
 * yet. "Aceptar todo" turns on Google Fonts + Sentry; "Solo lo imprescindible"
 * records the refusal so we do not ask again. Either way the choice itself is
 * the only thing written to localStorage.
 */
const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (value: 'granted' | 'denied') => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label={t('cookie.aria')}
    >
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          {t('cookie.message')}{' '}
          <Link to="/cookies" className="cookie-banner-link">
            {t('cookie.more')}
          </Link>
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="btn-secondary cookie-banner-btn"
            onClick={() => choose('denied')}
          >
            {t('cookie.essential')}
          </button>
          <button
            type="button"
            className="btn-gold cookie-banner-btn"
            onClick={() => choose('granted')}
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
