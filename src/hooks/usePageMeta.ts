import { useEffect } from 'react';

const SITE_ORIGIN = 'https://www.tynesideacademy.com';

type PageMeta = {
  title: string;
  description?: string;
  /** Route path, e.g. "/aviso-legal". Defaults to the site root. */
  path?: string;
  noIndex?: boolean;
};

/**
 * index.html ships the home page's title, description and canonical link for
 * every route (this is a single-page app with one HTML document). Any route
 * that isn't "/" has to override them on mount and put them back on unmount,
 * or search engines see every page as a title/description/canonical-tagged
 * duplicate of the home page.
 */
export function usePageMeta({ title, description, path, noIndex = false }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionTag?.content;
    if (description && descriptionTag) descriptionTag.content = description;

    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonicalTag?.href;
    const canonical = `${SITE_ORIGIN}${path ?? '/'}`;
    if (canonicalTag) canonicalTag.href = canonical;

    const updates: Array<[string, string]> = [
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description ?? ''],
      ['meta[property="og:url"]', canonical],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description ?? ''],
    ];
    const previousMeta = updates.map(([selector, value]) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      const previous = element?.content ?? null;
      if (element && value) element.content = value;
      return { element, previous };
    });

    let robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const createdRobotsTag = noIndex && !robotsTag;
    const previousRobots = robotsTag?.content;
    if (noIndex) {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.name = 'robots';
        document.head.appendChild(robotsTag);
      }
      robotsTag.content = 'noindex, follow';
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription;
      if (canonicalTag && previousCanonical) canonicalTag.href = previousCanonical;
      previousMeta.forEach(({ element, previous }) => {
        if (element && previous !== null) element.content = previous;
      });
      if (createdRobotsTag) robotsTag?.remove();
      else if (robotsTag && previousRobots) robotsTag.content = previousRobots;
    };
  }, [title, description, path, noIndex]);
}
