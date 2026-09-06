import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleRatingBadge from './GoogleRatingBadge';
import Stars from './Stars';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { trackEvent } from '../lib/analytics';

/**
 * Landing for the APTIS intensive aimed at the 2027 teaching oposiciones.
 *
 * Deliberately NOT part of the home page and NOT in the nav: a landing works
 * because every element on it serves one visitor with one deadline. It is also
 * Spanish-only on purpose — the audience is candidates for a Spanish public
 * exam, so an EN toggle would only add a language nobody here will pick.
 *
 * The copy lives in the `copy` object below rather than in src/i18n.ts, so the
 * wording can be reworked in one place before it is worth translating.
 *
 * ---------------------------------------------------------------------------
 * PENDIENTE DE CONFIRMAR CON BEN antes de publicar. Nada de esto lo puedo
 * verificar yo, y en una landing de oposiciones un dato mal puesto es una
 * reclamación:
 *   - Qué convocatoria exactamente (cuerpo, fecha del BORM)
 *   - Qué nivel de APTIS piden y en qué modalidad (General / ESOL / for Teachers)
 *   - Fechas de inicio del intensivo y número de plazas
 *   - Duración, horas semanales, número de simulacros
 *   - Si sois centro examinador de APTIS o solo preparador
 * Los textos de abajo están redactados para no afirmar ninguno de esos puntos.
 * En cuanto los confirmes, se concretan — y concretar es lo que convierte.
 * ---------------------------------------------------------------------------
 */

const copy = {
  eyebrow: 'Oposiciones 2027 · Región de Murcia',
  h1: 'Intensivo APTIS para tus oposiciones',
  sub: 'Preparación centrada en el examen, en grupos reducidos y con la fecha de la convocatoria marcada en el calendario. Sin relleno: solo lo que puntúa.',
  ctaPrimary: 'Reserva tu plaza',
  ctaSecondary: 'Hablar con nosotros',
  trust: 'Centro preparador Cambridge en Puente Tocinos, Murcia.',

  whyTitle: 'Por qué APTIS para la oposición',
  why: [
    {
      title: 'Resultado rápido',
      body: 'APTIS devuelve la calificación en pocos días, no en meses. Cuando lo que manda es el plazo de la convocatoria, esa diferencia lo decide todo.',
    },
    {
      title: 'Cuatro destrezas por separado',
      body: 'Reading, Listening, Writing y Speaking se evalúan de forma independiente, así que la preparación se concentra donde de verdad pierdes puntos.',
    },
    {
      title: 'Convocatorias flexibles',
      body: 'Se convoca con mucha más frecuencia que los exámenes de sesión fija, lo que permite encajar la fecha antes de que cierre el plazo.',
    },
  ],

  courseTitle: 'Cómo es el intensivo',
  course: [
    'Prueba de nivel inicial para situarte y fijar una fecha de examen realista.',
    'Grupos reducidos: la parte de Speaking no funciona en un aula llena.',
    'Simulacros con el formato y el cronómetro del examen real.',
    'Corrección individual de Writing, que es donde se cae la mayoría.',
    'Seguimiento del plazo de tu convocatoria, no solo del temario.',
  ],

  faqTitle: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Qué nivel necesito para empezar?',
      a: 'Depende del nivel que exija tu convocatoria y del que tengas hoy. Por eso el punto de partida es siempre la prueba de nivel: sin ella, cualquier plan de fechas es una suposición.',
    },
    {
      q: '¿Cuánto dura la preparación?',
      a: 'Se ajusta a la distancia entre tu nivel actual y el que necesitas acreditar, y a la fecha límite de tu convocatoria. Lo concretamos contigo después de la prueba de nivel.',
    },
    {
      q: '¿Dónde se dan las clases?',
      a: 'En la academia, en Plaza Tomás y Valiente 6, Bajo 3, Puente Tocinos (Murcia).',
    },
    {
      q: '¿Y si no llego a la convocatoria?',
      a: 'Te lo decimos desde el principio. Preferimos perder una matrícula a venderte una preparación que no llega a tiempo.',
    },
  ],

  proofTitle: 'Lo que dicen nuestras familias',

  formTitle: 'Reserva tu plaza',
  formLead: 'Déjanos tus datos y te llamamos para hacer la prueba de nivel y fijar tu calendario hasta el examen.',
  formOkTitle: 'Recibido',
  formOkBody: 'Te llamamos en menos de 24 h para concretar la prueba de nivel.',
  formError: 'No hemos podido enviar tus datos. Vuelve a intentarlo o llámanos al 605 661 212.',
};

const PAGE_TITLE = 'Intensivo APTIS para oposiciones 2027 | Tyneside English Academy';
const PAGE_DESC =
  'Preparación intensiva de APTIS en Murcia para las oposiciones de 2027. Grupos reducidos, simulacros y corrección individual de Writing.';

const AptisOposiciones = () => {
  // index.html carries the home page's title and description. Without this the
  // landing shows up in a search result, or in an ad preview, describing a
  // general English academy instead of the thing the visitor clicked on.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    const previousDesc = meta?.getAttribute('content') ?? null;
    meta?.setAttribute('content', PAGE_DESC);

    return () => {
      document.title = previousTitle;
      if (previousDesc !== null) meta?.setAttribute('content', previousDesc);
    };
  }, []);

  const [form, setForm] = useState({ name: '', phone: '', email: '', gdpr: false });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.gdpr) return;

    setSending(true);
    setFailed(false);

    try {
      // Same trap as the main contact form: Supabase reports insert failures in
      // the payload instead of throwing, and an unconfigured client drops the
      // lead silently. Both have to end up in catch, never in finally, or the
      // visitor sees a thank-you for an enquiry nobody ever received.
      if (!isSupabaseConfigured) {
        throw new Error('Supabase is not configured; the lead would be dropped.');
      }

      const { error } = await supabase.from('leads').insert([
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          course: 'APTIS Oposiciones 2027',
          created_at: new Date().toISOString()
        }
      ]);

      if (error) throw error;

      setSent(true);
      trackEvent('lead_submitted', { form: 'aptis' });
    } catch (err) {
      console.error('APTIS lead capture failed:', err);
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const label: React.CSSProperties = {
    display: 'grid',
    gap: '0.45rem',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: 'var(--color-deep-navy)'
  };

  const field: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 1rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(9, 19, 30, 0.18)',
    backgroundColor: '#FFFFFF',
    color: 'var(--color-deep-navy)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem'
  };

  const heading: React.CSSProperties = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: 1.15
  };

  return (
    <>
      <a href="#reserva" className="skip-link">Ir al formulario de reserva</a>

      {/* Hero ------------------------------------------------------------ */}
      <header style={{
        backgroundColor: 'var(--color-deep-navy)',
        color: 'var(--color-soft-cream)',
        padding: '5rem 0 4.5rem'
      }}>
        <div className="container">
          <Link to="/" style={{
            color: 'var(--color-slate-muted)',
            fontSize: '0.9rem',
            textDecoration: 'none',
            fontWeight: 500
          }}>
            ← Tyneside English Academy
          </Link>

          <div className="eyebrow" style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>
            {copy.eyebrow}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-hero)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            maxWidth: '17ch'
          }}>
            {copy.h1}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: 'var(--color-slate-muted)',
            maxWidth: '56ch',
            marginBottom: '2.5rem'
          }}>
            {copy.sub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a href="#reserva" className="btn-gold">
              <span>{copy.ctaPrimary}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="tel:+34605661212" className="btn-secondary">{copy.ctaSecondary}</a>
          </div>

          {/* The only number above the fold a candidate can check for
              themselves. Everything else on this page is us describing us. */}
          <div style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border-glass)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem 2.5rem',
            alignItems: 'center'
          }}>
            <GoogleRatingBadge />
            <span style={{
              fontSize: '0.9rem',
              color: 'var(--color-slate-muted)',
              maxWidth: '30ch',
              lineHeight: 1.6
            }}>
              {copy.trust}
            </span>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Por qué APTIS -------------------------------------------------- */}
        <section className="section-light" style={{
          padding: 'var(--section-y) 0',
          backgroundColor: '#F8FAFC',
          color: 'var(--color-deep-navy)'
        }}>
          <div className="container">
            <h2 style={{ ...heading, marginBottom: '3rem', maxWidth: '20ch' }}>
              {copy.whyTitle}
            </h2>

            <div className="grid-cards">
              {copy.why.map(item => (
                <div key={item.title} className="light-card" style={{ padding: '2rem' }}>
                  <h3 className="light-card-title" style={{ marginBottom: '0.9rem' }}>
                    {item.title}
                  </h3>
                  <p className="light-card-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* El intensivo --------------------------------------------------- */}
        <section style={{
          padding: 'var(--section-y) 0',
          backgroundColor: 'var(--color-navy-surface)',
          color: 'var(--color-soft-cream)'
        }}>
          <div className="container">
            <h2 style={{ ...heading, marginBottom: '2.5rem' }}>{copy.courseTitle}</h2>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.25rem', maxWidth: '68ch' }}>
              {copy.course.map(line => (
                <li key={line} style={{
                  display: 'flex',
                  gap: '0.9rem',
                  alignItems: 'flex-start',
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                  color: 'var(--color-slate-muted)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0, marginTop: '0.35rem' }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Prueba social --------------------------------------------------
            Renders the 4,9 and the link to the real review list even while
            `testimonials` is still empty. The cards appear on their own the
            day Ben pastes real reviews into src/data/testimonials.ts. */}
        {GOOGLE_RATING && (
          <section className="section-light" style={{
            padding: 'var(--section-y) 0',
            backgroundColor: '#FFFFFF',
            color: 'var(--color-deep-navy)'
          }}>
            <div className="container" style={{ textAlign: 'center' }}>
              <h2 style={{ ...heading, marginBottom: '2rem' }}>
                {copy.proofTitle}
              </h2>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '0.75rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'var(--color-deep-navy)'
                }}>
                  {GOOGLE_RATING.score.toLocaleString('es-ES', { minimumFractionDigits: 1 })}
                </span>
                <Stars rating={Math.round(GOOGLE_RATING.score)} size={20} onDark={false} />
              </div>

              <p style={{ color: 'var(--color-ink-muted)', marginBottom: '2.5rem' }}>
                {GOOGLE_RATING.count} reseñas en Google, sin editar.
              </p>

              {testimonials.length > 0 && (
                <div className="grid-cards" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                  {testimonials.slice(0, 3).map(r => (
                    <figure key={r.id} className="light-card" style={{ padding: '2rem', margin: 0 }}>
                      <Stars rating={r.rating} onDark={false} />
                      <blockquote style={{ margin: '1rem 0 0' }}>
                        <p className="light-card-body">{r.quote}</p>
                      </blockquote>
                      <figcaption style={{ marginTop: '1.2rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>
                        {r.author}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  color: 'var(--color-deep-navy)',
                  borderColor: 'rgba(9, 19, 30, 0.2)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                Leerlas en Google
              </a>
            </div>
          </section>
        )}

        {/* FAQ ------------------------------------------------------------ */}
        <section style={{
          padding: 'var(--section-y) 0',
          backgroundColor: 'var(--color-deep-navy)',
          color: 'var(--color-soft-cream)'
        }}>
          <div className="container">
            <h2 style={{ ...heading, marginBottom: '2.5rem' }}>{copy.faqTitle}</h2>

            <div style={{ display: 'grid', gap: '0.9rem', maxWidth: '75ch' }}>
              {copy.faq.map(item => (
                <details key={item.q} style={{
                  border: '1px solid var(--color-border-glass)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)'
                }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: '1.05rem' }}>
                    {item.q}
                  </summary>
                  <p style={{ marginTop: '1rem', marginBottom: 0, lineHeight: 1.7, color: 'var(--color-slate-muted)' }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Reserva -------------------------------------------------------- */}
        <section id="reserva" className="section-light" style={{
          padding: 'var(--section-y) 0',
          backgroundColor: '#F8FAFC',
          color: 'var(--color-deep-navy)'
        }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ ...heading, marginBottom: '1rem' }}>{copy.formTitle}</h2>
            <p style={{ color: 'var(--color-ink-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {copy.formLead}
            </p>

            {sent ? (
              <div role="status" style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-gold-soft)',
                border: '1px solid var(--color-gold-border)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {copy.formOkTitle}
                </h3>
                <p style={{ color: 'var(--color-ink-muted)', margin: 0 }}>{copy.formOkBody}</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'grid', gap: '1.25rem' }}>
                {failed && (
                  <div role="alert" style={{
                    padding: '1rem 1.2rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid #B91C1C',
                    backgroundColor: '#FEF2F2',
                    color: '#7F1D1D',
                    lineHeight: 1.6
                  }}>
                    {copy.formError}
                  </div>
                )}

                <label style={label}>
                  Nombre
                  <input
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={field}
                  />
                </label>

                <label style={label}>
                  Teléfono
                  <input
                    required
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={field}
                  />
                </label>

                <label style={label}>
                  Email
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={field}
                  />
                </label>

                <label style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-ink-muted)' }}>
                  <input
                    required
                    type="checkbox"
                    checked={form.gdpr}
                    onChange={e => setForm({ ...form, gdpr: e.target.checked })}
                    style={{ marginTop: '0.25rem', flexShrink: 0 }}
                  />
                  {/* Deliberately not a link: the site has no privacy-policy
                      page to link to. Under the RGPD this consent line has to
                      point at a reachable policy, so the page is a blocker for
                      publishing the landing, not a nice-to-have. */}
                  <span>
                    He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos.
                  </span>
                </label>

                <button type="submit" className="btn-gold" disabled={sending} style={{ justifyContent: 'center' }}>
                  {sending ? 'Enviando…' : failed ? 'Reintentar' : copy.ctaPrimary}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: 'var(--color-deep-navy)',
        color: 'var(--color-slate-muted)',
        padding: '3rem 0',
        fontSize: '0.9rem',
        lineHeight: 1.7
      }}>
        <div className="container">
          Tyneside English Academy · Plaza Tomás y Valiente 6, Bajo 3, Puente Tocinos (Murcia) ·{' '}
          <a href="tel:+34605661212" style={{ color: 'var(--color-gold)' }}>605 661 212</a>
        </div>
      </footer>
    </>
  );
};

export default AptisOposiciones;
