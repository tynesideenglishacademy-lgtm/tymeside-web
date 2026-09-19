import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { PRACTICE_EXAM_URL, hasPracticeExam } from '../lib/enrolmentLinks';
import { trackEvent } from '../lib/analytics';

// The pass-rate/years-teaching counters that used to live here duplicated
// Hero's own stat row word for word (see CLAUDE.md on stat-counter
// redundancy). What this card can say that Hero doesn't is which Cambridge
// levels are actually taught.
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
              section="examprep"
              label={t('examprep.label')}
              title={t('examprep.title')}
              onDark
            />

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#D4DEE8' }}>
              {t('examprep.p1')}
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.8rem', color: 'var(--color-soft-cream)', fontWeight: 700 }}>
              {t('examprep.p2')}
            </p>
            
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <Link to="/level-test" className="btn-gold">
                <span>{t('examprep.cta')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <a href="#contact" className="btn-secondary">
                {t('examprep.details')}
              </a>
            </div>

            {/* The ten-minute adaptive test above stays the headline offer. This
                is the long sitting underneath it - a full paper, Reading & Use
                of English, Listening and Writing, marked on the CEFR scale.
                It is a separate app, so the link only appears once that app has
                a URL (VITE_EXAM_BASE_URL); otherwise nothing renders here. */}
            {hasPracticeExam() && (
              <div style={{ marginTop: '2rem' }}>
                <a
                  href={PRACTICE_EXAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('exam_click', { from: 'exam_prep' })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    minHeight: 44,
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }}
                >
                  {t('examprep.full_exam_cta')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#9FB0C0', maxWidth: '34rem' }}>
                  {t('examprep.full_exam_note')}
                </div>
              </div>
            )}
          </div>

          <div className="glass-card-premium" style={{
            border: '1px solid var(--color-gold-border)',
            padding: '3rem 2.5rem'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.5rem' }}>
              {t('examprep.levels_title')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CEFR_LEVELS.map((level) => (
                <div key={level} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="3" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-soft-cream)' }}>{level}</div>
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
