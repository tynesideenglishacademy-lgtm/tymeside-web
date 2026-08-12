import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'es';
    const newLang = currentLang.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const currentLangDisplay = (i18n.language || 'es').startsWith('en') ? 'EN' : 'ES';

  return (
    <nav className="floating-navbar animate-fade-in delay-100">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-light.png" alt="Tyneside English Academy" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          <a href="/#courses" className="navbar-link">{t('nav.courses')}</a>
          <a href="/#methodology" className="navbar-link">{t('nav.methodology')}</a>
          <a href="/#exam-prep" className="navbar-link">{t('nav.exams')}</a>
          <a href="/#services" className="navbar-link">{t('nav.services')}</a>
          <a href="/#blog" className="navbar-link">{t('nav.blog')}</a>
          <a href="/#contact" className="navbar-link">{t('nav.contact')}</a>
          
          <button onClick={toggleLanguage} className="navbar-lang-btn" aria-label="Toggle language">
            🌐 {currentLangDisplay}
          </button>

          <Link to="/level-test" className="btn-gold" style={{ padding: '0.55rem 1.4rem', fontSize: '0.9rem' }}>
            {t('nav.enroll')}
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Mobile Drawer (visible when open on small screens) */}
      {mobileMenuOpen && (
        <div style={{
          padding: '1.5rem 2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          backgroundColor: 'rgba(9, 19, 30, 0.95)',
          borderRadius: '0 0 20px 20px'
        }}>
          <a href="/#courses" onClick={() => setMobileMenuOpen(false)} className="navbar-link">{t('nav.courses')}</a>
          <a href="/#methodology" onClick={() => setMobileMenuOpen(false)} className="navbar-link">{t('nav.methodology')}</a>
          <a href="/#exam-prep" onClick={() => setMobileMenuOpen(false)} className="navbar-link">{t('nav.exams')}</a>
          <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="navbar-link">{t('nav.services')}</a>
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="navbar-link">{t('nav.contact')}</a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '0.5rem' }}>
            <button onClick={toggleLanguage} className="navbar-lang-btn">
              🌐 {currentLangDisplay}
            </button>
            <Link to="/level-test" onClick={() => setMobileMenuOpen(false)} className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
              {t('nav.enroll')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
