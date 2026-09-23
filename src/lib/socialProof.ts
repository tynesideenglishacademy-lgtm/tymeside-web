import { GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';

/**
 * Social proof only appears once there is something real to show — a verbatim
 * Google review, or at minimum a link to the listing. See src/data/testimonials.ts.
 */
export const hasSocialProof = testimonials.length > 0 || GOOGLE_REVIEWS_URL !== '';
