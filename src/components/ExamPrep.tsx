import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const StatCounter = ({ end, suffix = '', label }: { end: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div style={{ textAlign: 'center' }}>
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
      {/* Decorative Radial Lighting Background */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(9,19,30,0) 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              color: 'var(--color-warm-gold)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              🏆 Centro Preparador Oficial
            </div>
            
            <h2 className="animate-slide-up" style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '1.2rem',
              lineHeight: 1.15
            }}>
              {t('examprep.title')}
            </h2>
            
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-river-teal)', marginBottom: '2.5rem', borderRadius: '2px' }}></div>
            
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#E2E8F0' }}>
              {t('examprep.p1')}
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.8rem', color: 'var(--color-gold-light)', fontWeight: 700 }}>
              {t('examprep.p2')}
            </p>
            
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <Link to="/level-test" className="btn-gold">
                <span>{t('examprep.cta')}</span>
                <span>→</span>
              </Link>
              <a href="#contact" className="btn-secondary">
                Más detalles
              </a>
            </div>
          </div>

          <div className="glass-card-premium" style={{
            background: 'linear-gradient(135deg, rgba(16, 42, 67, 0.7) 0%, rgba(9, 19, 30, 0.85) 100%)',
            border: '1px solid var(--color-border-gold)',
            padding: '3rem 2.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}>
              <StatCounter end={98} suffix="%" label="Cambridge Pass Rate" />
              <div style={{ height: '1px', backgroundColor: 'var(--color-border-glass)', width: '100%' }}></div>
              <StatCounter end={15} suffix="+" label="Years of Excellence" />
              <div style={{ height: '1px', backgroundColor: 'var(--color-border-glass)', width: '100%' }}></div>
              <StatCounter end={3000} suffix="+" label="Certified Students" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExamPrep;
