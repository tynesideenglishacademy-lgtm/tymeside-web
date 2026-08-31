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
 *   4. Copy 3–6 reviews into `testimonials`, verbatim, with the reviewer's
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
  /** ISO date of the review, for <time datetime>. */
  date: string;
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
 * Still empty on purpose.
 *
 * Google's own listing surfaces these three excerpts publicly, verbatim, but
 * without the reviewer's name attached — and an anonymous quote is weak proof
 * and reads as invented, which is the opposite of the point:
 *
 *   "Excelente profesor nativo Estoy muy contenta con la academia recomiendo 100x100"
 *   "Conseguí mi objetivo gracias a la profesionalidad del centro y los profesores."
 *   "Los padres satisfechos y contentos de ver los progresos."
 *
 * Open GOOGLE_REVIEWS_URL, find these three plus a few more, and copy them in
 * with the name Google shows. Until then the section renders the 4.9 and the
 * link to all 70 reviews, which is real, and no cards.
 */
export const testimonials: Testimonial[] = [];
