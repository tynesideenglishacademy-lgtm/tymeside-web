import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';
import { STUDENT_EXAM_BANK_URL, hasPracticeExam } from '../lib/enrolmentLinks';
import { useStudentSession } from '../hooks/useStudentSession';
import StudentLibrary from './StudentLibrary';

const StudentArea = () => {
  const { t } = useTranslation();
  const { loading, session, student, error, signIn, signOut, trackActivity } = useStudentSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t('student_area.meta_title');
    return () => { document.title = previousTitle; };
  }, [t]);

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
      metadata: { destination: STUDENT_EXAM_BANK_URL },
    });
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
                      <a href={STUDENT_EXAM_BANK_URL} target="_blank" rel="noopener noreferrer" onClick={openExamBank} className="btn-editorial-primary">{t('student_area.exam_open')}</a>
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

            <StudentLibrary trackActivity={trackActivity} />

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
