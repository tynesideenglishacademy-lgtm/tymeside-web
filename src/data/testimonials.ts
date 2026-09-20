/**
 * Social proof — real reviews only.
 *
 * The academy's reviews live on its Google Business Profile. Rather than
 * scraping them at runtime (the Places API needs a billed key, and a quote
 * that silently changes under you is worse than no quote), they are copied in
 * here by hand from the public listing.
 *
 * Nothing on this page is invented: while `testimonials` is empty and
 * `GOOGLE_REVIEWS_URL` is blank, the Testimonials section renders nothing at
 * all. An academy with no visible reviews reads as new; an academy with
 * obviously fake ones reads as dishonest.
 *
 * To fill it in:
 *   1. Open the academy's Google Maps listing, "Reseñas".
 *   2. Paste the share link into GOOGLE_REVIEWS_URL below.
 *   3. Put the overall score and review count into GOOGLE_RATING.
 *   4. Copy selected reviews into `testimonials`, verbatim, with the reviewer's
 *      name exactly as Google shows it. Trim with an ellipsis if too long,
 *      never reword.
 */

export interface Testimonial {
  /** Stable key. Reviewer slug is fine; it never reaches the DOM as text. */
  id: string;
  /** The review, verbatim from Google. Trim only; never rewrite. */
  quote: string;
  /** Reviewer name exactly as it appears publicly on Google. */
  author: string;
  /** Optional context Ben can confirm, e.g. "Madre de alumna de B2". */
  role?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Relative date exactly as the public listing showed when checked. */
  dateLabel: { es: string; en: string };
}

/** Google Place ID for Tyneside English Academy, Puente Tocinos. */
export const GOOGLE_PLACE_ID = 'ChIJfWmOu2eDYw0RuxITTrqDaLs';

/** Public "see all reviews" link. Lands directly on the review list. */
export const GOOGLE_REVIEWS_URL: string = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`;

/**
 * Read off the public listing on 2026-08-29. Re-check it now and then: showing
 * a score lower than the real one costs nothing, showing a higher one is a lie.
 */
export const GOOGLE_RATING: { score: number; count: number } | null = { score: 4.9, count: 70 };

/**
 * Checked against the public Google listing on 2026-09-20. Longer reviews are
 * trimmed at sentence boundaries; their wording is not rewritten.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'maria-galvez',
    quote: 'La única academia de inglés que ofrece clases reales de preparación al nivel C2 o Proficiency en el área de pedanías del este…',
    author: 'María Gálvez',
    rating: 5,
    dateLabel: { es: 'hace 6 meses', en: '6 months ago' },
  },
  {
    id: 'fran-navarro',
    quote: 'He estado solamente 1 año estudiando para el B2 y me lo he sacado a la primera gracias a las explicaciones de Ben.',
    author: 'Fran Navarro',
    rating: 5,
    dateLabel: { es: 'hace 7 meses', en: '7 months ago' },
  },
  {
    id: 'eva-ayala',
    quote: 'Una increíble academia, con buenos profesores y un gran método.',
    author: 'Eva Del Carmen Ayala',
    rating: 5,
    dateLabel: { es: 'hace 7 meses', en: '7 months ago' },
  },
  {
    id: 'tetiana-iavorska',
    quote: 'Muy buen trato.',
    author: 'Tetiana Iavorska',
    rating: 5,
    dateLabel: { es: 'hace 7 meses', en: '7 months ago' },
  },
  {
    id: 'javier',
    quote: 'Profesores angloparlantes muy bien preparados para la enseñanza y con un gran trato al alumnado. Muy buena preparación para los exámenes de Cambridge.',
    author: 'Javier',
    rating: 5,
    dateLabel: { es: 'hace 7 meses', en: '7 months ago' },
  },
  {
    id: 'alicia-barba',
    quote: 'Academia muy recomendable, mi hija desde que va a la academia está súper contenta con todos los profes…',
    author: 'Alicia Barba',
    rating: 5,
    dateLabel: { es: 'hace 1 año', en: '1 year ago' },
  },
  {
    id: 'maria-elena-soro',
    quote: 'El profesor Ben, además de dominar el idioma, enseña la parte práctica y necesaria del inglés.',
    author: 'María Elena Soro Ripoll',
    rating: 5,
    dateLabel: { es: 'hace 1 año', en: '1 year ago' },
  },
  {
    id: 'hector-costa',
    quote: 'A great academy if you’re looking for pass the Cambridge exams. 100% recommended.',
    author: 'hector costa willi',
    rating: 5,
    dateLabel: { es: 'hace 1 año', en: '1 year ago' },
  },
];
