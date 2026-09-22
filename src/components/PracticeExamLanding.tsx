import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';
import { PRACTICE_EXAM_URL } from '../lib/enrolmentLinks';
import { trackEvent } from '../lib/analytics';
import { usePageMeta } from '../hooks/usePageMeta';

const copy = {
  es: {
    eyebrow: 'Examen de práctica gratuito',
    title: 'Pon a prueba tu inglés con un examen completo.',
    lead: 'Una práctica extensa para conocer cómo respondes en Reading & Use of English, Listening y Writing, con una estimación de tu nivel CEFR al finalizar.',
    primary: 'Comenzar el examen completo',
    secondary: 'Prefiero la prueba rápida',
    time: 'Aproximadamente 60 minutos',
    access: 'Sin registro y sin coste',
    levels: 'Material desde A2 hasta C1',
    whatLabel: 'Antes de empezar',
    whatTitle: 'No es un test de cinco minutos.',
    whatBody: 'Está diseñado para que pruebes una experiencia de examen realista. Reserva una hora, utiliza auriculares para Listening y completa cada parte sin consultar apuntes.',
    papers: [
      ['01', 'Reading & Use of English', 'Comprensión, vocabulario y control gramatical con ejercicios ajustados al nivel.'],
      ['02', 'Listening', 'Audios y preguntas de comprensión que se corrigen automáticamente.'],
      ['03', 'Writing', 'Tareas de expresión escrita para completar la experiencia y valorar tu producción.'],
    ],
    resultLabel: 'El resultado',
    resultTitle: 'Una referencia clara para tu siguiente paso.',
    resultBody: 'Las partes objetivas se corrigen automáticamente y producen una estimación CEFR. El resultado orienta tu preparación, pero no sustituye una titulación oficial ni un examen de Cambridge English.',
    studentTitle: '¿Ya eres alumno de Tyneside?',
    studentBody: 'Entra por el Área de alumnos para que podamos vincular la actividad del Banco de exámenes con tu perfil.',
    studentCta: 'Entrar en mi área de alumno',
    finalTitle: '¿Tienes una hora? Empieza cuando estés preparado.',
    finalBody: 'Busca un lugar tranquilo, prepara auriculares y evita cerrar la pestaña hasta terminar.',
  },
  en: {
    eyebrow: 'Free full practice exam',
    title: 'Test your English with a complete practice paper.',
    lead: 'A longer assessment covering Reading & Use of English, Listening and Writing, with an estimated CEFR level when you finish.',
    primary: 'Start the full practice exam',
    secondary: 'Take the quick level test instead',
    time: 'Approximately 60 minutes',
    access: 'Free, with no sign-up',
    levels: 'Material from A2 to C1',
    whatLabel: 'Before you begin',
    whatTitle: 'This is not a five-minute quiz.',
    whatBody: 'It is designed to give you a realistic exam experience. Set aside an hour, use headphones for Listening and complete each paper without referring to notes.',
    papers: [
      ['01', 'Reading & Use of English', 'Comprehension, vocabulary and grammar tasks matched to the level.'],
      ['02', 'Listening', 'Audio-based comprehension questions marked automatically.'],
      ['03', 'Writing', 'Written tasks that complete the experience and help you assess your production.'],
    ],
    resultLabel: 'Your result',
    resultTitle: 'A clear reference for your next step.',
    resultBody: 'Objective papers are marked automatically and produce a CEFR estimate. The result can guide your preparation, but it is not an official qualification or a Cambridge English examination.',
    studentTitle: 'Already a Tyneside student?',
    studentBody: 'Enter through the Student Area so activity in the Exam Bank can be connected to your profile.',
    studentCta: 'Open my student area',
    finalTitle: 'Have an hour? Start when you are ready.',
    finalBody: 'Find a quiet place, prepare your headphones and keep the tab open until you finish.',
  },
} as const;

const PracticeExamLanding = () => {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es';
  const text = copy[language];

  usePageMeta({
    title: language === 'es'
      ? 'Examen completo de inglés gratis | Tyneside English Academy'
      : 'Free full English practice exam | Tyneside English Academy',
    description: text.lead,
    path: '/examen-prueba-ingles',
  });

  const registerLaunch = () => trackEvent('exam_click', { from: 'public_landing' });

  return (
    <>
      <a href="#practice-exam-main" className="skip-link">{language === 'es' ? 'Ir al contenido principal' : 'Skip to main content'}</a>
      <Navigation />
      <main id="practice-exam-main" className="practice-exam-page">
        <section className="practice-exam-hero">
          <div className="practice-exam-hero-bg" aria-hidden="true" />
          <div className="container practice-exam-hero-grid">
            <div className="practice-exam-copy">
              <p className="practice-exam-eyebrow">{text.eyebrow}</p>
              <h1>{text.title}</h1>
              <p className="practice-exam-lead">{text.lead}</p>
              <div className="practice-exam-actions">
                <a href={PRACTICE_EXAM_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" onClick={registerLaunch}>{text.primary}</a>
                <Link to="/level-test" className="practice-exam-text-link">{text.secondary}</Link>
              </div>
            </div>
            <dl className="practice-exam-facts" aria-label={language === 'es' ? 'Datos del examen' : 'Exam details'}>
              <div><dt>01</dt><dd>{text.time}</dd></div>
              <div><dt>02</dt><dd>{text.access}</dd></div>
              <div><dt>03</dt><dd>{text.levels}</dd></div>
            </dl>
          </div>
        </section>

        <section className="practice-exam-intro">
          <div className="container practice-exam-intro-grid">
            <div>
              <p className="practice-exam-section-label">{text.whatLabel}</p>
              <h2>{text.whatTitle}</h2>
            </div>
            <p>{text.whatBody}</p>
          </div>
          <div className="container practice-exam-papers">
            {text.papers.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="practice-exam-result">
          <div className="container practice-exam-result-grid">
            <div className="practice-exam-result-mark" aria-hidden="true">A2<span>—</span>C1</div>
            <div>
              <p className="practice-exam-section-label">{text.resultLabel}</p>
              <h2>{text.resultTitle}</h2>
              <p>{text.resultBody}</p>
            </div>
            <aside>
              <h3>{text.studentTitle}</h3>
              <p>{text.studentBody}</p>
              <Link to="/alumnos">{text.studentCta}</Link>
            </aside>
          </div>
        </section>

        <section className="practice-exam-final">
          <div className="container practice-exam-final-grid">
            <div><h2>{text.finalTitle}</h2><p>{text.finalBody}</p></div>
            <a href={PRACTICE_EXAM_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" onClick={registerLaunch}>{text.primary}</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PracticeExamLanding;
