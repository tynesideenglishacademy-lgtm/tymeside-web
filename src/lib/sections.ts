import { GOOGLE_REVIEWS_URL, testimonials } from '../data/testimonials';

/**
 * Social proof only appears once there is something real to show — a verbatim
 * Google review, or at minimum a link to the listing. See src/data/testimonials.ts.
 */
export const hasSocialProof = testimonials.length > 0 || GOOGLE_REVIEWS_URL !== '';

/**
 * Reading order of the numbered sections.
 *
 * The "01" markers used to be hardcoded at each call site, which meant
 * inserting or hiding a section silently left a gap in the sequence. Deriving
 * them from this list keeps the numbering correct by construction: a section
 * that does not render never takes a number.
 */
const SECTIONS = [
  'courses',
  'about',
  'method',
  'examprep',
  ...(hasSocialProof ? ['testimonials'] : []),
  'services',
  'trips',
  'blog',
  'contact',
];

/** Two-digit marker for a section id, e.g. "04". */
export const sectionIndex = (id: string) => {
  const position = SECTIONS.indexOf(id);
  // An unknown id would otherwise render "00" and look deliberate.
  if (position === -1) return '';
  return String(position + 1).padStart(2, '0');
};
