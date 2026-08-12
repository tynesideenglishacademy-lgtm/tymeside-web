import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  icon: string;
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
      icon: "🎯",
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
      icon: "🧠",
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
      icon: "🇬🇧",
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
    <section id="blog" style={{
      padding: '7rem 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)'
    }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              color: 'var(--color-deep-navy)',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              {t('blog.badge')}
            </span>

            <h2 className="animate-slide-up" style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              fontWeight: 900,
              color: '#09131E',
              marginBottom: '0.8rem'
            }}>
              {t('blog.title')}
            </h2>

            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-warm-gold)', borderRadius: '2px' }}></div>
          </div>

          <button 
            onClick={() => setSelectedArticle(articles[0])}
            className="btn-secondary" 
            style={{ color: '#09131E', borderColor: 'rgba(9, 19, 30, 0.2)', backgroundColor: '#FFFFFF' }}
          >
            {t('blog.cta')} →
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
              className="light-card interactive" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
            >
              {/* Header Gradient Thumbnail */}
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #102A43 0%, #1D5C8A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                position: 'relative'
              }}>
                <span>{article.icon}</span>
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(9, 19, 30, 0.85)',
                  color: 'var(--color-gold-light)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700
                }}>
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748B', marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}>
                    <span>📅 {article.date}</span>
                    <span>• {article.readTime}</span>
                  </div>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#09131E',
                    marginBottom: '1rem',
                    lineHeight: 1.35
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#475569',
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
                  gap: '0.4rem'
                }}>
                  <span>{t('blog.read_more')}</span>
                  <span>→</span>
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
            backgroundColor: 'rgba(9, 19, 30, 0.75)',
            backdropFilter: 'blur(8px)',
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
              borderRadius: '24px',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Modal Hero Header */}
            <div style={{
              background: 'linear-gradient(135deg, #09131E 0%, #102A43 100%)',
              color: '#FFFFFF',
              padding: '3rem 2.5rem 2.5rem',
              position: 'relative',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px'
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

              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{selectedArticle.icon}</span>
                <span style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.2)',
                  color: 'var(--color-warm-gold)',
                  padding: '0.3rem 0.9rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 800
                }}>
                  {selectedArticle.category}
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#F8FAFC' }}>
                {selectedArticle.title}
              </h2>

              <div style={{ fontSize: '0.85rem', color: '#94A3B8', display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                <span>✍️ {selectedArticle.author}</span>
                <span>📅 {selectedArticle.date}</span>
                <span>⏱️ {selectedArticle.readTime}</span>
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
                backgroundColor: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.6rem' }}>
                  {t('blog.modal_cta_title')}
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.2rem' }}>
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
