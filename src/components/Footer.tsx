import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{
      backgroundColor: 'var(--color-deep-navy)',
      color: 'var(--color-soft-cream)',
      padding: '5rem 0 2.5rem',
      borderTop: '1px solid var(--color-border-glass)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3.5rem',
          marginBottom: '4rem'
        }}>
          
          <div>
            <img src="/logo-light.png" alt="Tyneside English Academy" style={{ height: '56px', marginBottom: '1.5rem' }} />
            <p style={{ color: 'var(--color-slate-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '320px' }}>
              Auténtica formación británica con profesores nativos. Resultados reales y acreditaciones oficiales Cambridge en Murcia.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-amber)', marginBottom: '1.25rem', fontWeight: 700 }}>{t('nav.contact')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#C3D0DC', fontSize: '0.95rem', lineHeight: 2.1 }}>
              <li>Plaza Tomás y Valiente 6, Puente Tocinos</li>
              <li>605 661 212</li>
              <li>info@tynesideacademy.com</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-amber)', marginBottom: '1.25rem', fontWeight: 700 }}>{t('resources.title')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#C3D0DC', fontSize: '0.95rem', lineHeight: 2.1 }}>
              <li><Link to="/level-test" className="footer-link">{t('resources.test')}</Link></li>
              <li><a href="#courses" className="footer-link">{t('resources.material')}</a></li>
              <li><a href="#contact" className="footer-link">{t('resources.calendar')}</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-amber)', marginBottom: '1.25rem', fontWeight: 700 }}>Aulario Virtual</h4>
            <p style={{ color: 'var(--color-slate-muted)', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              Accede a tus clases, material didáctico y evaluaciones online.
            </p>
            <a href="#contact" className="btn-secondary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem', width: '100%', justifyContent: 'center' }}>
              {t('nav.virtualClassroom')}
            </a>
          </div>

        </div>

        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border-glass)',
          color: 'var(--color-slate-muted)',
          fontSize: '0.85rem'
        }}>
          © {new Date().getFullYear()} Tyneside English Academy. {t('footer.rights')}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
