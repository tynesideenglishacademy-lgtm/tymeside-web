import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileCta from './MobileCta';
import { getBlogPost } from '../data/blogPosts';

/**
 * A real page per post, not a modal on the homepage. The previous modal
 * version had no URL of its own, so Google could never index it, a link
 * could never be shared, and it could never rank for anything — the exact
 * opposite of what a blog is for. See CLAUDE.md and the Sept 2026 blog
 * rewrite.
 */
const BlogPost = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    document.title = `${post.title} | Tyneside English Academy`;

    const meta = document.querySelector('meta[name="description"]');
    const previousDesc = meta?.getAttribute('content') ?? null;
    meta?.setAttribute('content', post.excerpt);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.dateISO,
      author: { '@type': 'Organization', name: post.author },
      publisher: { '@type': 'Organization', name: 'Tyneside English Academy' },
    });
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      if (previousDesc !== null) meta?.setAttribute('content', previousDesc);
      document.head.removeChild(script);
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <a href="#main" className="skip-link">Ir al contenido principal</a>
      <Navigation />
      <main id="main">
        <header style={{ backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', padding: '9rem 0 3rem' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link to="/blog" style={{ color: 'var(--color-amber)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-block', marginBottom: '1.5rem' }}>
              ← {t('blog.back_to_blog')}
            </Link>
            <span className="eyebrow" style={{ marginBottom: '1.1rem', display: 'inline-block' }}>{post.category}</span>
            <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, lineHeight: 1.25, marginBottom: '1.1rem' }}>
              {post.title}
            </h1>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-muted)', display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <article className="section-light" style={{ padding: '3.5rem 0 var(--section-y)' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', color: 'var(--color-ink)', lineHeight: 1.75, fontSize: '1.05rem' }}>
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: 'var(--color-amber-soft)',
              border: '1px solid var(--color-amber-border)',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.6rem' }}>
                {t('blog.modal_cta_title')}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', marginBottom: '1.2rem' }}>
                {t('blog.modal_cta_desc')}
              </p>
              <Link to="/level-test" className="btn-gold" style={{ display: 'inline-block', padding: '0.75rem 1.8rem' }}>
                {t('blog.modal_cta_button')}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
};

export default BlogPost;
