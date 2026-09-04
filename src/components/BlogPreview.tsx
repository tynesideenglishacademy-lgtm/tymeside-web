import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string[];
}

const BlogPreview = () => {
  const { t } = useTranslation();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'speaking-b2-tips',
      title: "Consejos para afrontar el Speaking del B2 First de Cambridge",
      excerpt: "Descubre las claves para dominar la expresión oral y perder el miedo escénico en tu examen oficial Cambridge.",
      date: "15 Oct 2026",
      category: "Cambridge Tips",
      readTime: "4 min lectura",
      author: "Equipo Pedagógico Tyneside",
      content: [
        "El examen B2 First de Cambridge evalúa tu capacidad para comunicarte de manera fluida y espontánea en inglés en situaciones reales.",
        "1. **Conoce la estructura de las 4 partes**: La prueba consta de entrevista personal, fotos individuales (collaborative long turn), tarea colaborativa en pareja y discusión temática posterior.",
        "2. **Utiliza conectores variados**: Evita repetir 'and' o 'because'. Incorpora conectores avanzados como 'Furthermore', 'On the other hand', 'In terms of', y 'I reckon that...'.",
        "3. **Demuestra interacción natural**: En las partes 3 y 4, escucha activamente a tu compañero. Utiliza frases como 'That's a valid point, however...' o 'Would you agree that...?'",
        "4. **Gestiona los silencios**: Si necesitas pensar una idea, usa conectores de relleno nativos como 'Well, that's an interesting question...' en lugar de quedarte en silencio."
      ]
    },
    {
      id: 'early-bilingualism',
      title: "La importancia del bilingüismo temprano en la infancia",
      excerpt: "¿Por qué empezar a los 3 años? Analizamos los beneficios cognitivos y el desarrollo del lenguaje nativo.",
      date: "02 Nov 2026",
      category: "Educación",
      readTime: "5 min lectura",
      author: "Dirección de Estudios Young Learners",
      content: [
        "Durante los primeros años de vida (de 0 a 6 años), el cerebro infantil posee una plasticidad neuronal óptima para la adquisición del lenguaje.",
        "En Tyneside English Academy implementamos el programa Tyneside Explorers (3 a 5 años), diseñado para interiorizar la fonética y gramática inglesa de forma natural a través de canciones, juegos sensoriales y narración interactiva.",
        "Estudios recientes confirman que la exposición temprana al inglés mejora la memoria de trabajo, la flexibilidad cognitiva y la resolución de problemas abstractos.",
        "No enseñamos gramática memorística a esta edad; creamos un espacio de inmersión total donde el inglés se convierte en una herramienta cotidiana de juego y comunicación."
      ]
    },
    {
      id: 'newcastle-trip-summary',
      title: "Nuestro viaje a Newcastle: Una experiencia de inmersión inolvidable",
      excerpt: "Resumen de nuestro último Summer Camp en colaboración con International House Newcastle.",
      date: "20 Nov 2026",
      category: "Comunidad",
      readTime: "6 min lectura",
      author: "Coordinación de Inmersión Internacional",
      content: [
        "El aprendizaje de un idioma alcanza su verdadero potencial cuando trasciende el aula de clases y se vive en el entorno cultural nativo.",
        "Nuestra reciente expedición de verano a Newcastle Upon Tyne brindó a nuestros estudiantes una combinación inolvidable de clases aceleradas en International House Newcastle, excursiones culturales a Castillos de Northumberland y convivencia con familias locales.",
        "Los alumnos destacaron el incremento significativo en su confianza al hablar inglés en comercios, restaurantes y actividades deportivas.",
        "¡Próximamente abriremos el plazo de inscripción para la edición Summer 2027! Solicita información previa en nuestra secretaría."
      ]
    }
  ];

  return (
    <section id="blog" className="section-light" style={{
      padding: 'var(--section-y) 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)'
    }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <SectionHeader
            section="blog"
            label={t('blog.badge')}
            title={t('blog.title')}
            flush
          />

          <button
            onClick={() => setSelectedArticle(articles[0])}
            className="btn-secondary"
            style={{ color: 'var(--color-ink)', borderColor: 'rgba(9, 19, 30, 0.2)', backgroundColor: '#FFFFFF' }}
          >
            {t('blog.cta')}
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(article);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${t('blog.read_more')}: ${article.title}`}
              className="light-card interactive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
            >
              {/* Category band */}
              <div style={{
                padding: '1.4rem 2rem',
                backgroundColor: 'var(--color-tyneside-blue)',
                borderBottom: '3px solid var(--color-amber)'
              }}>
                <span style={{
                  color: 'var(--color-soft-cream)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase'
                }}>
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ink-muted)', marginBottom: '0.8rem', display: 'flex', gap: '0.6rem' }}>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-ink)',
                    marginBottom: '1rem',
                    lineHeight: 1.35
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-ink-muted)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}>
                    {article.excerpt}
                  </p>
                </div>

                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--color-river-teal)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}>
                  <span>{t('blog.read_more')}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          onClick={() => setSelectedArticle(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(9, 19, 30, 0.82)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              maxWidth: '750px',
              maxHeight: '88vh',
              borderRadius: 'var(--radius-lg)',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Modal Hero Header */}
            <div style={{
              backgroundColor: 'var(--color-deep-navy)',
              color: '#FFFFFF',
              padding: '3rem 2.5rem 2.5rem',
              position: 'relative',
              borderTopLeftRadius: 'var(--radius-lg)',
              borderTopRightRadius: 'var(--radius-lg)'
            }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div style={{ marginBottom: '1rem' }}>
                <span className="eyebrow">
                  {selectedArticle.category}
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1rem', color: 'var(--color-soft-cream)' }}>
                {selectedArticle.title}
              </h2>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                <span>{selectedArticle.author}</span>
                <span>{selectedArticle.date}</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem', color: '#334155', lineHeight: 1.75, fontSize: '1.05rem' }}>
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                backgroundColor: 'var(--color-amber-soft)',
                border: '1px solid var(--color-amber-border)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.6rem' }}>
                  {t('blog.modal_cta_title')}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', marginBottom: '1.2rem' }}>
                  {t('blog.modal_cta_desc')}
                </p>
                <Link 
                  to="/level-test" 
                  onClick={() => setSelectedArticle(null)} 
                  className="btn-gold" 
                  style={{ display: 'inline-block', padding: '0.75rem 1.8rem' }}
                >
                  {t('blog.modal_cta_button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPreview;
