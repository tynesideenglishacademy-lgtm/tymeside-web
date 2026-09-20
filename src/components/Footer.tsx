import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PRE_ENROLMENT_URL } from '../lib/enrolmentLinks';

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
            <img src="/logo-light-nav.png" alt="Tyneside English Academy" width={360} height={209} style={{ width: '132px', height: 'auto', marginBottom: '1.5rem' }} />
            <p style={{ color: 'var(--color-slate-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '320px' }}>
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-gold)', marginBottom: '1.25rem', fontWeight: 700 }}>{t('nav.contact')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#C3D0DC', fontSize: '0.95rem', lineHeight: 2.1 }}>
              <li>Plaza Tomás y Valiente 6, Puente Tocinos</li>
              <li><a className="footer-link" href="tel:+34605661212">605 661 212</a></li>
              <li><a className="footer-link" href="tel:+34868056729">868 056 729</a></li>
              <li><a className="footer-link" href="mailto:secretaria@tynesideacademy.com">secretaria@tynesideacademy.com</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-gold)', marginBottom: '1.25rem', fontWeight: 700 }}>{t('resources.title')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#C3D0DC', fontSize: '0.95rem', lineHeight: 2.1 }}>
              <li><Link to="/recursos" className="footer-link">{t('nav.resources', { defaultValue: 'Recursos A2–C2' })}</Link></li>
              <li><Link to="/level-test" className="footer-link">{t('resources.test')}</Link></li>
              <li><Link to="/examen-prueba-ingles" className="footer-link">{t('resources.practice_exam')}</Link></li>
              <li><Link to="/alumnos" className="footer-link">{t('student_area.label')}</Link></li>
              <li><Link to="/alumnos" className="footer-link">{t('resources.exam_bank')}</Link></li>
              <li><Link to="/#contact" className="footer-link">{t('resources.calendar')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-gold)', marginBottom: '1.25rem', fontWeight: 700 }}>{t('footer.virtual_title')}</h4>
            <p style={{ color: 'var(--color-slate-muted)', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              {t('footer.virtual_desc')}
            </p>
            <a href={PRE_ENROLMENT_URL} className="btn-secondary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem', width: '100%', justifyContent: 'center' }}>
              {t('nav.virtualClassroom')}
            </a>
          </div>

        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border-glass)',
          color: 'var(--color-slate-muted)',
          fontSize: '0.85rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.25rem' }} aria-label={t('legal.section_title')}>
            <Link to="/aviso-legal" className="footer-link">{t('legal.aviso_title')}</Link>
            <Link to="/privacidad" className="footer-link">{t('legal.privacidad_title')}</Link>
            <Link to="/cookies" className="footer-link">{t('legal.cookies_title')}</Link>
          </nav>
          <div style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} Tyneside English Academy. {t('footer.rights')}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
