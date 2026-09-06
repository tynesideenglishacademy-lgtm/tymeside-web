import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleRatingBadge from './GoogleRatingBadge';
import Stars from './Stars';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { trackEvent } from '../lib/analytics';

/**
 * Landing for company / FUNDAE-bonificado English training.
 *
 * Linked from the "Servicios para Empresas y Colegios" block on the home page
 * (Services.tsx) rather than sitting in the nav: a decision-maker arriving from
 * that block, an ad or a LinkedIn post gets one page about one thing.
 *
 * Spanish-only on purpose — the buyer is a Murcia SME, and the FUNDAE credit is
 * a Spanish instrument, so an EN toggle would only add a language nobody here
 * will pick. Copy lives in the `copy` object below, not src/i18n.ts, so it can
 * be reworked in one place before it is worth translating.
 *
 * ---------------------------------------------------------------------------
 * Datos confirmados con Ben (2026-09-05):
 *   - Tramitación FUNDAE: la gestiona Tyneside, apoyándose en una gestoría
 *     externa cuando el caso lo requiere. La empresa no hace el papeleo.
 *   - Modalidades: presencial (preferida, en la empresa o en la academia);
 *     online en directo e híbrida disponibles.
 *   - Mínimo por grupo: 5 participantes.
 *   - Profesorado de empresa: el mismo claustro británico titulado.
 *   - Casos / clientes: NO se pueden nombrar empresas bajo la marca Tyneside,
 *     así que la prueba social se queda en la valoración de Google y en
 *     genérico. No inventar logos ni "han confiado en nosotros".
 * ---------------------------------------------------------------------------
 */

const copy = {
  eyebrow: 'Formación bonificable · Empresas de Murcia',
  h1: 'Inglés para tu equipo, bonificable a través de FUNDAE',
  sub: 'Formación en inglés técnico y comercial para empresas de la Región de Murcia. Se construye sobre vuestro sector y sobre las situaciones reales en las que el equipo usa el idioma: llamadas y correos con clientes, ferias, visitas y documentación.',
  ctaPrimary: 'Solicitar información',
  ctaSecondary: 'Hablar con nosotros',
  trust: 'Centro preparador Cambridge en Puente Tocinos, Murcia.',

  whyTitle: 'Por qué formar a tu equipo con nosotros',
  why: [
    {
      title: 'Hasta 100% bonificable',
      body: 'Cada empresa que cotiza por formación profesional dispone de un crédito anual de FUNDAE. Un curso de inglés para la plantilla puede quedar cubierto en su totalidad con ese crédito, y de la tramitación nos encargamos nosotros.',
    },
    {
      title: 'Inglés del puesto, no de libro',
      body: 'El contenido se construye sobre las tareas reales del equipo: llamadas, correos, visitas de clientes, ferias y documentación. Nada de temario genérico.',
    },
    {
      title: 'El mismo profesorado de los exámenes',
      body: 'La imparte el mismo claustro británico titulado que prepara a nuestros alumnos para los exámenes oficiales de Cambridge, con la misma exigencia de método.',
    },
  ],

  courseTitle: 'Cómo trabajamos con una empresa',
  course: [
    'Reunión inicial para entender el sector, los puestos y el punto de partida del equipo.',
    'Prueba de nivel a cada participante para formar grupos homogéneos, desde 5 personas por grupo.',
    'Propuesta con objetivos, calendario y modalidad —presencial, online en directo o híbrida—, con una estimación de qué parte cubre la bonificación.',
    'Tramitación de la bonificación ante FUNDAE dentro de plazo, para que la empresa no tenga que hacer el papeleo.',
    'Impartición del curso con seguimiento del progreso de cada participante.',
    'Documentación y certificados de aprovechamiento al finalizar.',
  ],

  faqTitle: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Qué es la bonificación de FUNDAE?',
      a: 'Cada empresa que cotiza por formación profesional acumula un crédito anual para formar a su plantilla. Ese crédito se recupera aplicando una bonificación en las cotizaciones a la Seguridad Social. La formación en inglés es una de las acciones que pueden acogerse.',
    },
    {
      q: '¿Cuánto se puede bonificar?',
      a: 'Depende del crédito disponible de la empresa y del número de participantes. En muchos casos el curso queda cubierto al 100%. Lo revisamos contigo antes de empezar y te decimos con claridad qué parte no cubre.',
    },
    {
      q: '¿Tenemos que ocuparnos del papeleo con FUNDAE?',
      a: 'No. Nos encargamos nosotros de la tramitación de la bonificación —altas, comunicaciones y plazos—, con el apoyo de una gestoría externa cuando el caso lo requiere. La empresa solo facilita los datos necesarios.',
    },
    {
      q: '¿Dónde se dan las clases?',
      a: 'Lo habitual es presencial, en vuestras instalaciones o en la academia (Plaza Tomás y Valiente 6, Bajo 3, Puente Tocinos, Murcia). También se puede impartir online en directo o en formato híbrido si al equipo le encaja mejor. Se concreta en la reunión inicial.',
    },
    {
      q: '¿Cuántas personas hacen falta para montar un grupo?',
      a: 'A partir de 5 participantes por grupo. Si el equipo es más grande, se organizan varios grupos por nivel para que todos avancen.',
    },
  ],

  proofTitle: 'Lo que dicen de nosotros',

  formTitle: 'Solicita información para tu empresa',
  formLead: 'Cuéntanos el tamaño aproximado del equipo y el sector. Te llamamos para estudiar la formación y la bonificación.',
  formOkTitle: 'Recibido',
  formOkBody: 'Te llamamos en menos de 24 h laborables para concretar una propuesta.',
  formError: 'No hemos podido enviar tus datos. Vuelve a intentarlo o llámanos al 605 661 212.',
};

const PAGE_TITLE = 'Inglés para empresas bonificable con FUNDAE en Murcia | Tyneside English Academy';
const PAGE_DESC =
  'Formación de inglés técnico y comercial para empresas de Murcia, bonificable hasta el 100% con FUNDAE. Grupos por nivel, profesorado británico titulado y tramitación incluida.';

const Empresas = () => {
  // index.html carries the home page's title and description. Without this the
  // landing shows up in a search result, or in an ad preview, describing a
  // general English academy instead of the company-training offer.
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

  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', gdpr: false });
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
          name: form.company ? `${form.name} (${form.company})` : form.name,
          phone: form.phone,
          email: form.email,
          course: 'FUNDAE / Empresas',
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSent(true);
      trackEvent('lead_submitted', { form: 'empresas' });
    } catch (err) {
      console.error('Empresas lead capture failed:', err);
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
    color: 'var(--color-deep-navy)',
  };

  const field: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 1rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(9, 19, 30, 0.18)',
    backgroundColor: '#FFFFFF',
    color: 'var(--color-deep-navy)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
  };

  const heading: React.CSSProperties = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
  };

  return (
    <>
      <a href="#solicitar" className="skip-link">Ir al formulario de solicitud</a>

      {/* Hero ------------------------------------------------------------ */}
      <header style={{
        backgroundColor: 'var(--color-deep-navy)',
        color: 'var(--color-soft-cream)',
        padding: '5rem 0 4.5rem',
      }}>
        <div className="container">
          <Link to="/" style={{
            color: 'var(--color-slate-muted)',
            fontSize: '0.9rem',
            textDecoration: 'none',
            fontWeight: 500,
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
            maxWidth: '20ch',
          }}>
            {copy.h1}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: 'var(--color-slate-muted)',
            maxWidth: '58ch',
            marginBottom: '2.5rem',
          }}>
            {copy.sub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a href="#solicitar" className="btn-gold">
              <span>{copy.ctaPrimary}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="tel:+34605661212" className="btn-secondary">{copy.ctaSecondary}</a>
          </div>

          {/* The only number above the fold a buyer can check for themselves.
              Everything else on this page is us describing us. */}
          <div style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border-glass)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem 2.5rem',
            alignItems: 'center',
          }}>
            <GoogleRatingBadge />
            <span style={{
              fontSize: '0.9rem',
              color: 'var(--color-slate-muted)',
              maxWidth: '30ch',
              lineHeight: 1.6,
            }}>
              {copy.trust}
            </span>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Por qué --------------------------------------------------------- */}
        <section className="section-light" style={{
          padding: 'var(--section-y) 0',
          backgroundColor: '#F8FAFC',
          color: 'var(--color-deep-navy)',
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

        {/* Cómo trabajamos ---------------------------------------------------- */}
        <section style={{
          padding: 'var(--section-y) 0',
          backgroundColor: 'var(--color-navy-surface)',
          color: 'var(--color-soft-cream)',
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
                  color: 'var(--color-slate-muted)',
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
            color: 'var(--color-deep-navy)',
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
                marginBottom: '0.75rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'var(--color-deep-navy)',
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
                  backgroundColor: '#FFFFFF',
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
          color: 'var(--color-soft-cream)',
        }}>
          <div className="container">
            <h2 style={{ ...heading, marginBottom: '2.5rem' }}>{copy.faqTitle}</h2>

            <div style={{ display: 'grid', gap: '0.9rem', maxWidth: '75ch' }}>
              {copy.faq.map(item => (
                <details key={item.q} style={{
                  border: '1px solid var(--color-border-glass)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
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

        {/* Solicitar ----------------------------------------------------- */}
        <section id="solicitar" className="section-light" style={{
          padding: 'var(--section-y) 0',
          backgroundColor: '#F8FAFC',
          color: 'var(--color-deep-navy)',
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
                border: '1px solid var(--color-gold-border)',
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
                    lineHeight: 1.6,
                  }}>
                    {copy.formError}
                  </div>
                )}

                <label style={label}>
                  Nombre y apellidos
                  <input
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={field}
                  />
                </label>

                <label style={label}>
                  Empresa
                  <input
                    autoComplete="organization"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
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
                  <span>
                    He leído y acepto la{' '}
                    <Link to="/privacidad" style={{ color: 'var(--color-gold-ink)', fontWeight: 600 }}>
                      Política de Privacidad
                    </Link>{' '}
                    y consiento el tratamiento de mis datos para atender esta solicitud.
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
        lineHeight: 1.7,
      }}>
        <div className="container">
          Tyneside English Academy · Plaza Tomás y Valiente 6, Bajo 3, Puente Tocinos (Murcia) ·{' '}
          <a href="tel:+34605661212" style={{ color: 'var(--color-gold)' }}>605 661 212</a>
        </div>
      </footer>
    </>
  );
};

export default Empresas;
