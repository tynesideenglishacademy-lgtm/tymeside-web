import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const CEFR_LEVELS = ['A2 Key', 'B1 Preliminary', 'B2 First', 'C1 Advanced', 'C2 Proficiency'];

const ExamPrep = () => {
  const { t } = useTranslation();

  return (
    <section id="exam-prep" style={{
      padding: '7.5rem 0',
      backgroundColor: 'var(--color-deep-navy)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          
          <div>
            <SectionHeader
              label="Centro preparador oficial"
              title={t('examprep.title')}
              onDark
            />

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#D4DEE8' }}>
              {t('examprep.p1')}
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.8rem', color: 'var(--color-amber)', fontWeight: 700 }}>
              {t('examprep.p2')}
            </p>
            
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <Link to="/level-test" className="btn-gold">
                <span>{t('examprep.cta')}</span>
              </Link>
              <a href="#contact" className="btn-secondary">
                {t('examprep.details')}
              </a>
            </div>
          </div>

          {/* Used to repeat the same 100% pass-rate / years-teaching stats
              already in the Hero (and, until today, in About too) as animated
              counters - three restatements of one claim on one page. Cambridge
              level ladder instead: real, specific to what this section is
              actually about (official exam prep), and not said anywhere else
              on the page. See CLAUDE.md. */}
          <div className="glass-card-premium" style={{
            border: '1px solid var(--color-amber-border)',
            padding: '3rem 2.5rem'
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-amber)', marginBottom: '1.5rem' }}>
              Niveles Cambridge que preparamos
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {CEFR_LEVELS.map((level) => (
                <div key={level} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--color-amber)', flexShrink: 0 }} />
                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>{level}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExamPrep;
