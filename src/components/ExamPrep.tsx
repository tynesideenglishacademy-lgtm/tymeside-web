import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { PRACTICE_EXAM_URL, hasPracticeExam } from '../lib/enrolmentLinks';

/**
 * Counts up to `end`, but only once the card is actually on screen.
 *
 * It used to animate on mount, so on a long page the numbers had finished
 * before anyone scrolled down to them. It also ignored prefers-reduced-motion,
 * which is the one case where a ticking number is genuinely a problem.
 */
const StatCounter = ({ end, suffix = '', label }: { end: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setCount(end);
      return;
    }

    let frame = 0;
    let startedAt = 0;

    const run = (now: number) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / 1800, 1);
      // Ease-out, so the number decelerates into its final value instead of
      // stopping dead.
      setCount(Math.round(end * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        frame = requestAnimationFrame(run);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="text-gradient-gold" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '1rem', color: '#E2E8F0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </div>
  );
};

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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    minHeight: 44,
                    color: 'var(--color-amber)',
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
            border: '1px solid var(--color-amber-border)',
            padding: '3rem 2.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}>
              {/* Was 98%. The old five-year sample spanned Hello Academy
                  (Ben was there 2022–2024) and Tyneside, so it can't back a
                  Tyneside claim. One failed candidate since founding Tyneside,
                  and Ben confirms it was in 2024 — so the last two years are
                  clean and that is what publishes. */}
              <StatCounter end={100} suffix="%" label={t('examprep.stat_pass')} />
              <div style={{ height: '1px', backgroundColor: 'var(--color-border-glass)', width: '100%' }}></div>
              {/* Was "15+" as academy history (false — Tyneside is ~2 years
                  old). Now Ben's own teaching record: teaching English since
                  2015, confirmed 2026-08-30. "10+" stays true for years; the
                  label (examprep.stat_years) says "enseñando inglés" so it
                  reads as his experience, not the academy's age. */}
              <StatCounter end={10} suffix="+" label={t('examprep.stat_years')} />
              {/* The "3.000+ Alumnos certificados" counter (examprep.stat_students)
                  stays removed — ~60 exam candidates can't produce 3.000
                  certifications, that one was invented. The i18n key is left
                  in i18n.ts as a one-line restore once Ben has a real count. */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExamPrep;
