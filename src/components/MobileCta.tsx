import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * Fixed action bar for phones.
 *
 * On desktop the navbar stays in view and carries both actions; on a phone it
 * collapses into a burger, so past the hero there was nothing to tap without
 * scrolling all the way to the footer. It stays out of the way until the hero
 * headline has scrolled off, so it never covers the copy it is selling.
 */
const MobileCta = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > window.innerHeight * 0.35 : false
  );

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Performance optimization: Instead of listening to the scroll event and
    // reading `window.scrollY` (which can trigger layout thrashing), we create
    // an invisible sentinel div placed at 35vh and observe when it leaves the viewport.
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '35vh';
    sentinel.style.height = '1px';
    sentinel.style.width = '1px';
    sentinel.style.pointerEvents = 'none';
    sentinel.style.visibility = 'hidden';
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(([entry]) => {
      // If the boundingClientRect.top is less than 0, it means we have scrolled past the sentinel.
      setVisible(entry.boundingClientRect.top < 0);
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    };
  }, []);

  return (
    <div className={`mobile-cta${visible ? '' : ' mobile-cta-hidden'}`} aria-hidden={!visible}>
      <a
        href="tel:+34605661212"
        className="mobile-cta-call"
        aria-label={t('nav.call')}
        tabIndex={visible ? 0 : -1}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
