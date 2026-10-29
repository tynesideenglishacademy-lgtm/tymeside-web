import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONSENT_CHANGED_EVENT, CONSENT_OPEN_EVENT, ESSENTIAL_ONLY, readPreferences, setPreferences, type ConsentPreferences } from '../lib/consent';

/** Separate optional-service choices, available again from every footer. */
const CookieBanner = () => {
  const { t } = useTranslation();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' && readPreferences() === null
  );
  const [preferences, updatePreferences] = useState(() => readPreferences() ?? { ...ESSENTIAL_ONLY });
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const open = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      updatePreferences(readPreferences() ?? { ...ESSENTIAL_ONLY });
      setVisible(true);
      requestAnimationFrame(() => bannerRef.current?.focus());
    };
    const changed = () => setVisible(false);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    window.addEventListener(CONSENT_CHANGED_EVENT, changed);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, open);
      window.removeEventListener(CONSENT_CHANGED_EVENT, changed);
    };
  }, []);

  useEffect(() => {
    if (!visible || !bannerRef.current) return;

    const root = document.documentElement;
    const banner = bannerRef.current;
    const updateReservedSpace = () => {
      root.style.setProperty('--cookie-banner-space', `${Math.ceil(banner.getBoundingClientRect().height + 24)}px`);
      root.classList.add('cookie-notice-visible');
    };
    const observer = new ResizeObserver(updateReservedSpace);

    updateReservedSpace();
    observer.observe(banner);

    return () => {
      observer.disconnect();
      root.classList.remove('cookie-notice-visible');
      root.style.removeProperty('--cookie-banner-space');
    };
  }, [visible]);

  if (!visible) return null;

  const choose = (value: ConsentPreferences) => {
    setPreferences(value);
    setVisible(false);
    returnFocus.current?.focus();
  };

  return (
    <div
      ref={bannerRef}
      tabIndex={-1}
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
        <fieldset className="cookie-preferences">
          <legend>{t('cookie.preferences')}</legend>
          {(['fonts', 'monitoring', 'maps'] as const).map(category => (
            <label key={category}>
              <input type="checkbox" checked={preferences[category]} onChange={event => updatePreferences(previous => ({ ...previous, [category]: event.target.checked }))} />
              {t(`cookie.${category}`)}
            </label>
          ))}
        </fieldset>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="btn-secondary cookie-banner-btn"
            onClick={() => choose({ ...ESSENTIAL_ONLY })}
          >
            {t('cookie.essential')}
          </button>
          <button type="button" className="btn-secondary cookie-banner-btn" onClick={() => choose(preferences)}>{t('cookie.save')}</button>
          <button
            type="button"
            className="btn-secondary cookie-banner-btn"
            onClick={() => choose({ fonts: true, monitoring: true, maps: true })}
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
