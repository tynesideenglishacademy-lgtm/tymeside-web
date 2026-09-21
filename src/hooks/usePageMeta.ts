import { useEffect } from 'react';

const SITE_ORIGIN = 'https://www.tynesideacademy.com';

type PageMeta = {
  title: string;
  description?: string;
  /** Route path, e.g. "/aviso-legal". Defaults to the site root. */
  path?: string;
};

/**
 * index.html ships the home page's title, description and canonical link for
 * every route (this is a single-page app with one HTML document). Any route
 * that isn't "/" has to override them on mount and put them back on unmount,
 * or search engines see every page as a title/description/canonical-tagged
 * duplicate of the home page.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionTag?.content;
    if (description && descriptionTag) descriptionTag.content = description;

    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonicalTag?.href;
    if (canonicalTag) canonicalTag.href = `${SITE_ORIGIN}${path ?? '/'}`;

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription;
      if (canonicalTag && previousCanonical) canonicalTag.href = previousCanonical;
    };
  }, [title, description, path]);
}
