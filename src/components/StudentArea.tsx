import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';
import { PRACTICE_EXAM_URL, hasPracticeExam } from '../lib/enrolmentLinks';
import { useStudentSession } from '../hooks/useStudentSession';

const levels = ['All', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

type Resource = {
  key: string;
  level: Exclude<(typeof levels)[number], 'All'>;
  type: string;
  title: string;
  summary: string;
  points: string[];
};

const resources: Resource[] = [
  {
    key: 'a2-writing-email', level: 'A2', type: 'Writing', title: 'A2 email checklist',
    summary: 'Una estructura sencilla para responder a todos los puntos de un email de A2 Key.',
    points: ['Saluda y agradece el mensaje.', 'Responde a los tres puntos de la tarea.', 'Usa conectores básicos: and, but, because, so.', 'Revisa mayúsculas, puntuación y 25 palabras o más.'],
  },
  {
    key: 'b1-speaking-story', level: 'B1', type: 'Speaking', title: 'B1 picture story framework',
    summary: 'Cómo ordenar una historia visual sin quedarse bloqueado durante el speaking.',
    points: ['Empieza con: At first / One day.', 'Describe personas, lugar y acción.', 'Conecta las imágenes con then, after that y finally.', 'Termina explicando cómo se sienten los personajes.'],
  },
  {
    key: 'b2-writing-essay', level: 'B2', type: 'Writing', title: 'B2 essay blueprint',
    summary: 'Plan de cuatro párrafos para desarrollar una opinión clara y equilibrada.',
    points: ['Introducción: reformula la pregunta.', 'Dos párrafos: idea, explicación y ejemplo.', 'Usa contraste: however, whereas, although.', 'Conclusión: responde directamente a la pregunta.'],
  },
  {
    key: 'b2-collocations', level: 'B2', type: 'Vocabulary', title: 'B2 high-value collocations',
    summary: 'Combinaciones frecuentes que mejoran writing y Use of English.',
    points: ['make progress / make an effort', 'take responsibility / take part', 'have an impact / have access', 'raise awareness / meet a deadline'],
  },
  {
    key: 'c1-speaking-comparison', level: 'C1', type: 'Speaking', title: 'C1 comparison language',
    summary: 'Lenguaje para comparar, especular y evaluar fotografías con precisión.',
    points: ['Both images convey…', 'Whereas the first…, the second…', 'They might have been…', 'The most significant difference appears to be…'],
  },
  {
    key: 'c2-phrasal-verbs', level: 'C2', type: 'Vocabulary', title: 'C2 phrasal verbs in context',
    summary: 'Verbos frasales avanzados para lectura, conversación y transformación de frases.',
    points: ['brush up on: improve an old skill', 'come down to: be essentially about', 'phase out: remove gradually', 'zero in on: focus attention precisely'],
  },
];

const StudentArea = () => {
  const { t } = useTranslation();
  const { loading, session, student, error, signIn, signOut, trackActivity } = useStudentSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [level, setLevel] = useState<(typeof levels)[number]>('All');
  const [openResource, setOpenResource] = useState<string | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t('student_area.meta_title');
    return () => { document.title = previousTitle; };
  }, [t]);

  const filteredResources = useMemo(
    () => level === 'All' ? resources : resources.filter((resource) => resource.level === level),
    [level],
  );

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    await signIn(email, password);
    setSubmitting(false);
    setPassword('');
  };

  const openExamBank = () => {
    void trackActivity({
      eventType: 'exam_bank_opened',
      resourceKey: 'exam-bank',
      resourceTitle: 'Tyneside Exam Bank',
      metadata: { destination: PRACTICE_EXAM_URL },
    });
  };

  const toggleResource = (resource: Resource) => {
    const willOpen = openResource !== resource.key;
    setOpenResource(willOpen ? resource.key : null);
    if (willOpen) {
      void trackActivity({
        eventType: 'resource_opened',
        resourceKey: resource.key,
        resourceTitle: resource.title,
        resourceLevel: resource.level,
        metadata: { type: resource.type },
      });
    }
  };

  if (loading) {
    return <main className="student-auth-loading" aria-live="polite">{t('student_area.checking_session')}</main>;
  }

  return (
    <>
      <a href="#student-main" className="skip-link">{t('student_area.skip')}</a>
      <Navigation />
      <main id="student-main" className="student-area-page">
        {!session || !student ? (
          <header className="student-area-hero student-login-hero">
            <div className="container student-area-hero-grid">
              <div>
                <p className="student-access-kicker">{t('student_area.label')}</p>
                <h1>{t('student_area.title')}</h1>
                <p className="student-area-lead">{t('student_area.lead')}</p>
                <Link to="/" className="text-link">{t('student_area.back')}</Link>
              </div>
              <aside className="student-login-panel" aria-labelledby="student-login-title">
                <p className="student-login-eyebrow">{t('student_area.private_access')}</p>
                <h2 id="student-login-title">{t('student_area.login_title')}</h2>
                <p>{t('student_area.login_desc')}</p>
                <form onSubmit={handleLogin} className="student-login-form">
                  <label>
                    <span>{t('student_area.email')}</span>
                    <input type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} required />
                  </label>
                  <label>
                    <span>{t('student_area.password')}</span>
                    <input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                  </label>
                  {error && <p className="student-login-error" role="alert">{error}</p>}
                  <button className="btn-editorial-primary" type="submit" disabled={submitting}>
                    {submitting ? t('student_area.signing_in') : t('student_area.sign_in')}
                  </button>
                </form>
                <p className="student-login-help">{t('student_area.login_help')} <a href="mailto:secretaria@tynesideacademy.com">secretaria@tynesideacademy.com</a></p>
              </aside>
            </div>
          </header>
        ) : (
          <>
            <header className="student-dashboard-header">
              <div className="container student-dashboard-heading">
                <div>
                  <p className="student-access-kicker">{t('student_area.label')}</p>
                  <h1>{t('student_area.welcome', { name: student.name })}</h1>
                  <p>{t('student_area.dashboard_desc')}</p>
                </div>
                <button type="button" className="student-signout" onClick={() => void signOut()}>{t('student_area.sign_out')}</button>
              </div>
            </header>

            <section className="student-modules student-dashboard-modules" aria-labelledby="student-modules-title">
              <div className="container">
                <h2 id="student-modules-title">{t('student_area.choose')}</h2>
                <div className="student-module-layout">
                  <article className="student-module student-module-exams">
                    <div>
                      <span>{t('student_area.exam_label')}</span>
                      <h3>{t('student_area.exam_bank')}</h3>
                      <p>{t('student_area.exam_desc')}</p>
                    </div>
                    {hasPracticeExam() ? (
                      <a href={PRACTICE_EXAM_URL} target="_blank" rel="noopener noreferrer" onClick={openExamBank} className="btn-editorial-primary">{t('student_area.exam_open')}</a>
                    ) : <p className="student-module-status">{t('student_area.exam_unavailable')}</p>}
                  </article>
                  <article className="student-module student-module-library">
                    <div>
                      <span>{t('student_area.library_label')}</span>
                      <h3>{t('student_area.library')}</h3>
                      <p>{t('student_area.library_desc')}</p>
                    </div>
                    <a href="#student-library" className="btn-editorial-secondary">{t('student_area.library_open')}</a>
                  </article>
                </div>
              </div>
            </section>

            <section id="student-library" className="student-resource-library" aria-labelledby="resource-library-title">
              <div className="container">
                <div className="student-library-heading">
                  <div>
                    <p className="student-access-kicker">{t('student_area.library_label')}</p>
                    <h2 id="resource-library-title">{t('student_area.library_map_title')}</h2>
                    <p>{t('student_area.library_map_desc')}</p>
                  </div>
                  <div className="student-level-filter" aria-label={t('student_area.levels_label')}>
                    {levels.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={level === item ? 'is-active' : ''}
                        aria-pressed={level === item}
                        onClick={() => {
                          setLevel(item);
                          void trackActivity({ eventType: 'level_filter_used', resourceLevel: item });
                        }}
                      >{item === 'All' ? t('student_area.all_levels') : item}</button>
                    ))}
                  </div>
                </div>
                <div className="student-resource-grid">
                  {filteredResources.map((resource) => {
                    const isOpen = openResource === resource.key;
                    return (
                      <article key={resource.key} className={`student-resource-card${isOpen ? ' is-open' : ''}`}>
                        <div className="student-resource-meta"><span>{resource.level}</span><span>{resource.type}</span></div>
                        <h3>{resource.title}</h3>
                        <p>{resource.summary}</p>
                        <button type="button" aria-expanded={isOpen} onClick={() => toggleResource(resource)}>
                          {isOpen ? t('student_area.close_resource') : t('student_area.open_resource')}
                        </button>
                        {isOpen && <ul>{resource.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="student-crm-boundary">
              <div className="container student-boundary-note">
                <strong>{t('student_area.crm_title')}</strong>
                <p>{t('student_area.crm_note')}</p>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default StudentArea;
