import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';

export type ServiceSlug = 'colegios' | 'one-to-one' | 'traduccion' | 'newcastle';

const SERVICE_INTEREST: Record<ServiceSlug, string> = {
  colegios: 'Servicios escolares y extraescolares',
  'one-to-one': 'Clases particulares One to One',
  traduccion: 'Traducción e interpretación',
  newcastle: 'Viajes e inmersión en Newcastle',
};

type ServiceCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: Array<{ title: string; text: string }>;
  processTitle: string;
  process: string[];
  ctaTitle: string;
  ctaText: string;
  interest: string;
  download?: string;
  downloadLabel?: string;
};

const COPY: Record<ServiceSlug, { es: ServiceCopy; en: ServiceCopy }> = {
  colegios: {
    es: {
      eyebrow: 'Colegios y AMPAS',
      title: 'Inglés extraescolar con seguimiento real',
      intro: 'Diseñamos programas estables para centros educativos de Murcia: coordinación sencilla, profesorado especializado y una propuesta que las familias entienden desde el primer día.',
      image: '/img/primary-v2-960.webp',
      imageAlt: 'Clase de inglés para alumnado de primaria',
      highlights: [
        { title: 'Programa a medida', text: 'Adaptamos grupos, horarios y objetivos al calendario y las necesidades de cada centro.' },
        { title: 'Coordinación cercana', text: 'Un único contacto para dirección, AMPA y familias, con comunicación clara durante todo el curso.' },
        { title: 'Progreso visible', text: 'Evaluación inicial, seguimiento periódico e informes que convierten la actividad en aprendizaje medible.' },
      ],
      processTitle: 'Cómo ponemos el programa en marcha',
      process: ['Reunión breve con el centro o AMPA.', 'Propuesta de grupos, horarios y presupuesto.', 'Comunicación y alta de familias.', 'Inicio, seguimiento e informes durante el curso.'],
      ctaTitle: 'Preparamos una propuesta para tu centro',
      ctaText: 'Cuéntanos el número aproximado de alumnos, las edades y el horario disponible. Te responderemos con una propuesta concreta.',
      interest: 'Servicios escolares y extraescolares',
      download: '/downloads/dossier-colegios-tyneside-2026-27.pdf',
      downloadLabel: 'Descargar dossier 2026/27',
    },
    en: {
      eyebrow: 'Schools & parent associations',
      title: 'After-school English with measurable progress',
      intro: 'We create stable programmes for schools in Murcia: straightforward coordination, specialist teachers and a proposal families understand from day one.',
      image: '/img/primary-v2-960.webp',
      imageAlt: 'English class for primary school pupils',
      highlights: [
        { title: 'Made for your school', text: 'Groups, timetables and goals are adapted to each school calendar and community.' },
        { title: 'Simple coordination', text: 'One point of contact for the school, parent association and families throughout the year.' },
        { title: 'Visible progress', text: 'Initial assessment, regular follow-up and clear reports turn the activity into measurable learning.' },
      ],
      processTitle: 'How we launch the programme',
      process: ['Short planning meeting.', 'Group, timetable and budget proposal.', 'Family communication and enrolment.', 'Teaching, follow-up and reporting.'],
      ctaTitle: 'Request a proposal for your school',
      ctaText: 'Tell us the approximate number and ages of pupils and the available timetable. We will respond with a practical proposal.',
      interest: 'School and after-school services',
      download: '/downloads/dossier-colegios-tyneside-2026-27.pdf',
      downloadLabel: 'Download the 2026/27 dossier',
    },
  },
  'one-to-one': {
    es: {
      eyebrow: 'Clases particulares',
      title: 'One to One: inglés diseñado alrededor de ti',
      intro: 'Un programa individual para avanzar con más precisión: objetivos claros, horario acordado y una clase construida sobre tu nivel, profesión o examen.',
      image: '/img/speaking-v2-960.webp',
      imageAlt: 'Clase individual de conversación en inglés',
      highlights: [
        { title: 'Objetivo concreto', text: 'Entrevistas, Cambridge, speaking profesional, refuerzo o progreso general.' },
        { title: 'Ritmo personal', text: 'El profesor adapta la práctica y el feedback a lo que necesitas en cada sesión.' },
        { title: 'Formato flexible', text: 'Consulta disponibilidad presencial u online y construimos un horario viable.' },
      ],
      processTitle: 'Tu plan individual',
      process: ['Nos cuentas tu objetivo y disponibilidad.', 'Valoramos tu nivel actual.', 'Proponemos profesor, formato y frecuencia.', 'Revisamos el progreso y ajustamos el plan.'],
      ctaTitle: 'Hablemos de tu objetivo',
      ctaText: 'Dinos para qué necesitas el inglés y cuándo puedes estudiar. Te orientaremos sobre el formato más eficaz.',
      interest: 'Clases particulares One to One',
    },
    en: {
      eyebrow: 'Private tuition',
      title: 'One to One: English built around you',
      intro: 'An individual programme for precise progress: clear goals, an agreed timetable and lessons based on your level, profession or exam.',
      image: '/img/speaking-v2-960.webp',
      imageAlt: 'Individual English speaking lesson',
      highlights: [
        { title: 'A specific goal', text: 'Interviews, Cambridge exams, professional speaking, support or general progress.' },
        { title: 'Your own pace', text: 'Your teacher adapts practice and feedback to what you need in each session.' },
        { title: 'Flexible format', text: 'Ask about in-person or online availability and we will build a workable schedule.' },
      ],
      processTitle: 'Your individual plan',
      process: ['Tell us your goal and availability.', 'We assess your current level.', 'We propose a teacher, format and frequency.', 'We review progress and adjust the plan.'],
      ctaTitle: 'Tell us what you need English for',
      ctaText: 'Share your goal and available times. We will recommend the most effective format.',
      interest: 'One to One private tuition',
    },
  },
  traduccion: {
    es: {
      eyebrow: 'Traducción e interpretación',
      title: 'Comunicación profesional, clara y fiel',
      intro: 'Apoyamos a empresas y profesionales de Murcia con traducción de documentos, contenidos web y asistencia lingüística para reuniones internacionales.',
      image: '/img/services_b2b-960.webp',
      imageAlt: 'Profesionales revisando documentación empresarial',
      highlights: [
        { title: 'Documentos y contenidos', text: 'Textos comerciales, técnicos, presentaciones, páginas web y comunicación corporativa.' },
        { title: 'Interpretación de apoyo', text: 'Asistencia lingüística para reuniones, visitas y conversaciones de negocio.' },
        { title: 'Presupuesto claro', text: 'Valoramos alcance, formato y plazo antes de confirmar el encargo.' },
      ],
      processTitle: 'Cómo solicitar una valoración',
      process: ['Describe el documento o la reunión.', 'Indica idiomas, extensión y fecha límite.', 'Revisamos el material de forma confidencial.', 'Confirmamos alcance, plazo y presupuesto.'],
      ctaTitle: 'Solicita una valoración',
      ctaText: 'No envíes documentos sensibles en el primer mensaje. Cuéntanos el tipo de trabajo y te indicaremos el canal seguro para revisarlo.',
      interest: 'Traducción e interpretación',
    },
    en: {
      eyebrow: 'Translation & interpreting',
      title: 'Clear, faithful professional communication',
      intro: 'We support businesses and professionals in Murcia with document translation, web content and language assistance for international meetings.',
      image: '/img/services_b2b-960.webp',
      imageAlt: 'Professionals reviewing business documents',
      highlights: [
        { title: 'Documents & content', text: 'Commercial and technical copy, presentations, websites and corporate communication.' },
        { title: 'Interpreting support', text: 'Language assistance for meetings, visits and business conversations.' },
        { title: 'Clear quotation', text: 'We confirm scope, format and deadline before accepting the assignment.' },
      ],
      processTitle: 'How to request a quotation',
      process: ['Describe the document or meeting.', 'Provide languages, length and deadline.', 'We review the material confidentially.', 'We confirm scope, delivery and price.'],
      ctaTitle: 'Request an assessment',
      ctaText: 'Do not send sensitive documents in the first message. Describe the work and we will provide a secure review channel.',
      interest: 'Translation and interpreting',
    },
  },
  newcastle: {
    es: {
      eyebrow: 'Inmersión en el Reino Unido',
      title: 'Aprende inglés viviéndolo en Newcastle',
      intro: 'Experiencias lingüísticas en colaboración con International House Newcastle que combinan clases, convivencia y el patrimonio del noreste de Inglaterra.',
      image: '/img/newcastle-quayside-1440.webp',
      imageAlt: 'Puente Tyne y Quayside de Newcastle al atardecer',
      highlights: [
        { title: 'Centro colaborador', text: 'Programas conectados con International House Newcastle y acompañamiento desde Murcia.' },
        { title: 'Idioma en contexto', text: 'Clases y vida cotidiana convierten el inglés en una herramienta real, no solo académica.' },
        { title: 'Cultura del noreste', text: 'Newcastle, sus puentes, castillos, costa y patrimonio forman parte de la experiencia.' },
      ],
      processTitle: 'Antes de viajar',
      process: ['Consulta de edad, nivel y fechas.', 'Presentación del programa disponible.', 'Reunión informativa para familias.', 'Preparación lingüística y documentación previa.'],
      ctaTitle: 'Solicita información sobre la próxima experiencia',
      ctaText: 'Indícanos la edad y el nivel aproximado del alumno para informarte cuando haya fechas y plazas disponibles.',
      interest: 'Viajes e inmersión en Newcastle',
    },
    en: {
      eyebrow: 'UK immersion',
      title: 'Learn English by living it in Newcastle',
      intro: 'Language experiences with International House Newcastle combining lessons, daily life and the heritage of North East England.',
      image: '/img/newcastle-quayside-1440.webp',
      imageAlt: 'Tyne Bridge and Newcastle Quayside at sunset',
      highlights: [
        { title: 'Partner school', text: 'Programmes connected with International House Newcastle and guidance from Murcia.' },
        { title: 'Language in context', text: 'Lessons and everyday life turn English into a practical tool, not only an academic subject.' },
        { title: 'North East culture', text: 'Newcastle, its bridges, castles, coast and heritage all form part of the experience.' },
      ],
      processTitle: 'Before travelling',
      process: ['Tell us the student age, level and dates.', 'Review the available programme.', 'Attend the family information meeting.', 'Complete language and document preparation.'],
      ctaTitle: 'Ask about the next Newcastle experience',
      ctaText: 'Tell us the student age and approximate level and we will contact you when dates and places are available.',
      interest: 'Newcastle trips and immersion',
    },
  },
};

const ServiceLanding = ({ slug }: { slug: ServiceSlug }) => {
  const { i18n } = useTranslation();
  const language = i18n.language.startsWith('en') ? 'en' : 'es';
  const copy = COPY[slug][language];
  const contactUrl = `/?interest=${encodeURIComponent(SERVICE_INTEREST[slug])}#contact`;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${copy.title} | Tyneside English Academy`;
    return () => { document.title = previousTitle; };
  }, [copy.title]);

  return (
    <>
      <a href="#service-main" className="skip-link">{language === 'es' ? 'Ir al contenido principal' : 'Skip to main content'}</a>
      <Navigation />
      <main id="service-main" className="service-page">
        <header className="service-page-hero">
          <img src={copy.image} alt={copy.imageAlt} width={1440} height={960} fetchPriority="high" />
          <div className="service-page-shade" aria-hidden="true" />
          <div className="container service-page-hero-content">
            <p className="service-page-eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
            <div className="service-page-actions">
              <Link className="btn-gold" to={contactUrl}>{language === 'es' ? 'Solicitar información' : 'Request information'}</Link>
              <Link className="service-page-back" to="/#services">{language === 'es' ? 'Ver todos los servicios' : 'View all services'}</Link>
            </div>
          </div>
        </header>

        <section className="section-light service-page-body" aria-label={language === 'es' ? 'Ventajas del servicio' : 'Service benefits'}>
          <div className="container">
            <div className="service-page-highlights">
              {copy.highlights.map((item, index) => (
                <article key={item.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="service-page-process">
              <div>
                <p className="service-page-eyebrow">{language === 'es' ? 'Proceso sencillo' : 'A simple process'}</p>
                <h2>{copy.processTitle}</h2>
              </div>
              <ol>{copy.process.map((step) => <li key={step}>{step}</li>)}</ol>
            </div>

            <aside className="service-page-cta">
              <div>
                <h2>{copy.ctaTitle}</h2>
                <p>{copy.ctaText}</p>
              </div>
              <div className="service-page-actions">
                <Link className="btn-gold" to={contactUrl}>{language === 'es' ? 'Hablar con secretaría' : 'Contact reception'}</Link>
                {copy.download && copy.downloadLabel && <a className="btn-secondary" href={copy.download} download>{copy.downloadLabel}</a>}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceLanding;
