import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * Fixed action bar for phones.
 *
 * On desktop the navbar stays in view and carries both actions; on a phone it
 * collapses into a burger, so past the hero there was nothing to tap without
 * scrolling all the way to the footer. It stays out of the way until the hero's
 * own CTA has scrolled off, so the two never compete.
 */
const MobileCta = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    // Performance optimization: Throttle scroll event handling
    // using requestAnimationFrame to prevent layout thrashing
    // and reduce main thread blocking during continuous scrolling.
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > window.innerHeight * 0.85);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check without animation frame since it runs on mount
    // Not using setState to avoid React hook warning

    window.addEventListener('scroll', onScroll, { passive: true });

    // Trigger an initial check
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-cta${visible ? '' : ' mobile-cta-hidden'}`} aria-hidden={!visible}>
      <a
        href="tel:+34605661212"
        className="mobile-cta-call"
        aria-label={t('nav.call')}
        tabIndex={visible ? 0 : -1}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>

      <Link
        to="/level-test"
        className="btn-gold"
        style={{ width: '100%', justifyContent: 'center', padding: '0.85rem 1rem' }}
        tabIndex={visible ? 0 : -1}
      >
        {t('hero.cta')}
      </Link>
    </div>
  );
};

export default MobileCta;
