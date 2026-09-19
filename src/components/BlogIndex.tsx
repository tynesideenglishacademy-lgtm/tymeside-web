import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileCta from './MobileCta';
import SectionHeader from './SectionHeader';
import { blogPosts } from '../data/blogPosts';
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from '../data/testimonials';

const PAGE_TITLE = 'Blog | Consejos Cambridge, Inglés y Comunidad | Tyneside English Academy';
const PAGE_DESC =
  'Guías reales de técnica de examen Cambridge (Writing, Listening, Speaking) escritas por Tyneside English Academy en Murcia.';

const BlogIndex = () => {
  const { t } = useTranslation();

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

  return (
    <>
      <a href="#main" className="skip-link">Ir al contenido principal</a>
      <Navigation />
      <main id="main">
        <section className="section-light" style={{ padding: '9rem 0 var(--section-y)' }}>
          <div className="container">
            <SectionHeader
              label={t('blog.badge')}
              title={t('blog.title')}
              lead="Guías de técnica de examen, escritas para servir de verdad — no relleno de calendario."
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3.5rem'
            }}>
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="light-card interactive"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
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
                      {post.category}
                    </span>
                  </div>

                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ink-muted)', marginBottom: '0.8rem', display: 'flex', gap: '0.6rem' }}>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '1rem', lineHeight: 1.35 }}>
                        {post.title}
                      </h2>
                      <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                        {post.excerpt}
                      </p>
                    </div>

                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-river-teal)' }}>
                      {t('blog.read_more')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Cross-link to the real Google Business profile: the site's one
                genuinely verifiable social-proof source (see testimonials.ts),
                and worth a presence here since blog visitors are exactly the
                audience deciding whether to trust the academy. */}
            {GOOGLE_RATING && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                padding: '2rem 2.25rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 12px 32px rgba(9, 19, 30, 0.07)'
              }}>
                <div>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.4rem' }}>
                    {t('blog.google_title')}
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', margin: 0 }}>
                    {t('blog.google_desc')}
                  </p>
                </div>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ flexShrink: 0 }}>
                  {t('blog.google_cta')}
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
};

export default BlogIndex;
