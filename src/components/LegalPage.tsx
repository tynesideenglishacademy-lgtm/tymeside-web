import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { LEGAL_DOCS, LEGAL_SLUGS, type LegalSlug } from '../content/legalDocs';

/**
 * Renders one of the three legal pages (Aviso Legal, Política de Privacidad,
 * Política de Cookies).
 *
 * TODO: lawyer / gestoría — the body text in src/content/legalDocs.ts is a
 * draft written from how the site actually behaves, not reviewed legal copy.
 * The visible banner below says so. Do not remove the banner or the [PENDIENTE]
 * markers until a professional has signed off.
 */
const LegalPage = ({ slug }: { slug: LegalSlug }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'es').startsWith('en') ? 'en' : 'es';
  const doc = LEGAL_DOCS[lang][slug];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${doc.title} | Tyneside English Academy`;

    const meta = document.querySelector('meta[name="description"]');
    const previousDesc = meta?.getAttribute('content') ?? null;
    meta?.setAttribute('content', doc.intro);

    return () => {
      document.title = previousTitle;
      if (previousDesc !== null) meta?.setAttribute('content', previousDesc);
    };
  }, [doc.title, doc.intro]);

  const others = LEGAL_SLUGS.filter((s) => s !== slug);

  return (
    <>
      <Navigation />
      <main id="main" className="legal-page">
        <div className="legal-page-inner">
          <p className="legal-draft-banner" role="note">
            {t('legal.draft_banner')}
          </p>

          <h1>{doc.title}</h1>
          <p className="legal-updated">
            {t('legal.last_updated')}: {doc.updated}
          </p>
          <p className="legal-intro">{doc.intro}</p>

          {doc.sections.map((section) => (
            <section key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          <nav className="legal-nav" aria-label={t('legal.other_pages')}>
            <span>{t('legal.other_pages')}:</span>
            {others.map((s) => (
              <Link key={s} to={`/${s}`} className="footer-link">
                {LEGAL_DOCS[lang][s].title}
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalPage;
