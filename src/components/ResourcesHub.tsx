import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';
import { usePageMeta } from '../hooks/usePageMeta';

type LevelResource = {
  level: string;
  exam: string;
  focusEs: string;
  focusEn: string;
  url: string;
};

const levels: LevelResource[] = [
  { level: 'A2', exam: 'A2 Key', focusEs: 'Primer certificado, lenguaje cotidiano y una base segura para continuar.', focusEn: 'A first qualification, everyday English and a secure foundation for progress.', url: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/preparation/' },
  { level: 'B1', exam: 'B1 Preliminary', focusEs: 'Comunicación práctica para estudios, viajes y situaciones habituales.', focusEn: 'Practical communication for study, travel and everyday situations.', url: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/preparation/' },
  { level: 'B2', exam: 'B2 First', focusEs: 'Inglés independiente para universidad, empleo y comunicación internacional.', focusEn: 'Independent English for university, work and international communication.', url: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/preparation/' },
  { level: 'C1', exam: 'C1 Advanced', focusEs: 'Precisión, fluidez y estrategias para contextos académicos y profesionales.', focusEn: 'Accuracy, fluency and strategy for academic and professional contexts.', url: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/' },
  { level: 'C2', exam: 'C2 Proficiency', focusEs: 'Dominio avanzado, matiz y control del inglés a nivel experto.', focusEn: 'Advanced command, nuance and expert-level control of English.', url: 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/proficiency/preparation/' },
];

const ResourcesHub = () => {
  const { i18n } = useTranslation();
  const english = i18n.resolvedLanguage?.startsWith('en');

  usePageMeta({
    title: english
      ? 'English exam resources A2–C2 | Tyneside English Academy'
      : 'Recursos de inglés A2–C2 | Tyneside English Academy',
    description: english
      ? 'Official Cambridge preparation links from A2 Key to C2 Proficiency, free Tyneside practice and a private library for our students.'
      : 'Enlaces oficiales de preparación Cambridge de A2 Key a C2 Proficiency, práctica gratuita Tyneside y una biblioteca privada para nuestros alumnos.',
    path: '/recursos',
  });

  return (
    <>
      <a href="#resources-main" className="skip-link">{english ? 'Skip to resources' : 'Ir a los recursos'}</a>
      <Navigation />
      <main id="resources-main" className="resources-page">
        <header className="resources-hero">
          <div className="container resources-hero-grid">
            <div>
              <p className="resources-eyebrow">{english ? 'Tyneside Resources' : 'Recursos Tyneside'}</p>
              <h1>{english ? 'Prepare with a clear route.' : 'Prepárate con una ruta clara.'}</h1>
            </div>
            <div className="resources-hero-copy">
              <p>{english ? 'Official Cambridge preparation links, free Tyneside practice and a private library for our students—all without mixing in CRM homework.' : 'Enlaces oficiales de preparación Cambridge, práctica gratuita Tyneside y una biblioteca privada para nuestros alumnos, sin mezclar aquí las tareas del CRM.'}</p>
              <div className="resources-hero-actions">
                <Link to="/level-test" className="btn-editorial-primary">{english ? 'Take the 5-minute level test' : 'Haz la prueba de nivel de 5 minutos'}</Link>
                <Link to="/alumnos" className="resources-inline-link">{english ? 'Student access' : 'Acceso de alumnos'} →</Link>
              </div>
            </div>
          </div>
        </header>

        <section className="resources-path" aria-labelledby="resource-levels-title">
          <div className="container">
            <div className="resources-section-intro">
              <p className="resources-eyebrow">{english ? 'Official exam preparation' : 'Preparación oficial'}</p>
              <h2 id="resource-levels-title">{english ? 'Choose your Cambridge level' : 'Elige tu nivel Cambridge'}</h2>
              <p>{english ? 'Each route leads to Cambridge English’s official preparation page, where you can find sample papers, guides, answer keys and digital practice.' : 'Cada ruta conduce a la página oficial de Cambridge English, donde encontrarás modelos de examen, guías, respuestas y práctica digital.'}</p>
            </div>
            <div className="resources-level-list">
              {levels.map((item, index) => (
                <article id={`nivel-${item.level.toLowerCase()}`} key={item.level}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div className="resources-level-name"><strong>{item.level}</strong><h3>{item.exam}</h3></div>
                  <p>{english ? item.focusEn : item.focusEs}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${english ? 'Official Cambridge resources for' : 'Recursos oficiales Cambridge para'} ${item.exam}`}>
                    {english ? 'Official resources' : 'Recursos oficiales'} ↗
                  </a>
                </article>
              ))}
            </div>
            <p className="resources-source-note">{english ? 'External materials remain on the official Cambridge English website and are not rehosted by Tyneside.' : 'Los materiales externos permanecen en la web oficial de Cambridge English; Tyneside no vuelve a alojarlos.'}</p>
          </div>
        </section>

        <section className="resources-tools" aria-labelledby="resources-tools-title">
          <div className="container">
            <div className="resources-section-intro resources-section-intro-light">
              <p className="resources-eyebrow">{english ? 'Practise with Tyneside' : 'Practica con Tyneside'}</p>
              <h2 id="resources-tools-title">{english ? 'Three ways to continue' : 'Tres formas de continuar'}</h2>
            </div>
            <div className="resources-tool-grid">
              <article><span>01</span><h3>{english ? 'Quick level test' : 'Prueba de nivel rápida'}</h3><p>{english ? 'A short adaptive check to orient your next step.' : 'Una evaluación adaptativa breve para orientar tu siguiente paso.'}</p><Link to="/level-test">{english ? 'Start the test' : 'Empezar el test'} →</Link></article>
              <article><span>02</span><h3>{english ? 'Full free exam' : 'Examen completo gratuito'}</h3><p>{english ? 'Reading, Use of English, Listening and Writing with a CEFR result.' : 'Reading, Use of English, Listening y Writing con resultado CEFR.'}</p><Link to="/examen-prueba-ingles">{english ? 'Try the exam' : 'Hacer el examen'} →</Link></article>
              <article><span>03</span><h3>{english ? 'Student library' : 'Biblioteca de alumnos'}</h3><p>{english ? 'Exam bank, writing guides, collocations and worksheets reserved for enrolled students.' : 'Banco de exámenes, guías de writing, collocations y fichas reservadas para alumnos matriculados.'}</p><Link to="/alumnos">{english ? 'Sign in' : 'Iniciar sesión'} →</Link></article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResourcesHub;
