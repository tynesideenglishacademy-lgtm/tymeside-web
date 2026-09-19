import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import BridgeMotif from './BridgeMotif';
import { blogPosts } from '../data/blogPosts';

/**
 * A teaser for the real /blog pages, not a modal reader. It used to open the
 * full article in a modal with no URL of its own - unshareable and
 * unindexable, which defeats the point of a blog. See CLAUDE.md.
 */
const BlogPreview = () => {
  const { t } = useTranslation();

  return (
    <section id="blog" className="section-light" style={{
      padding: 'var(--section-y) 0',
      backgroundColor: '#F8FAFC',
      color: 'var(--color-deep-navy)'
    }}>
      <BridgeMotif />
      <div className="container">

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <SectionHeader
            label={t('blog.badge')}
            title={t('blog.title')}
            flush
          />

          <Link to="/blog" className="btn-secondary" style={{ color: 'var(--color-ink)', borderColor: 'rgba(9, 19, 30, 0.2)', backgroundColor: '#FFFFFF' }}>
            {t('blog.cta')}
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="light-card interactive"
              style={{ display: 'flex', flexDirection: 'column' }}
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
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-ink-muted)', marginBottom: '0.8rem', display: 'flex', gap: '0.6rem' }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-ink)',
                    marginBottom: '1rem',
                    lineHeight: 1.35
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-ink-muted)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}>
                    {post.excerpt}
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
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
