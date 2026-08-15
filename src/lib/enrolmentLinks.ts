/**
 * Links from the public website into the CRM's enrolment forms.
 *
 * There are deliberately two, because the academy runs two stages:
 *
 *   PREMATRÍCULA  reserves a place. Light form - pupil name, age, school,
 *                 guardian contact, and the course/schedule they want.
 *   MATRÍCULA     the full enrolment, sent once a place is confirmed. Asks for
 *                 IBAN, DNI and medical information, which is exactly why it
 *                 must NOT be the link handed out publicly.
 *
 * The base URL is `tyneside-crm-five.vercel.app` because it is the shortest of
 * the CRM's three Vercel domains, and these links get pasted into WhatsApp where
 * a 56-character project URL wraps and looks like spam. Verified 2026-08-15:
 * all three domains return 200 and all deployment protection is off. An earlier
 * handoff claimed this domain was dead and belonged to no project - it is
 * assigned to `tyneside-crm` and serves normally.
 *
 * ⚠️ Replace VITE_CRM_BASE_URL with the real domain when tynesideacademy.com is
 * live - `crm.tynesideacademy.com/preinscripcion` is what should actually be
 * shared with families. Everything else here keys off this one constant.
 */
const CRM_BASE =
  (import.meta.env.VITE_CRM_BASE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://tyneside-crm-five.vercel.app';

/** Public "reserve a place" form. This is the link to share. */
export const PRE_ENROLMENT_URL = `${CRM_BASE}/preinscripcion`;

/** Full enrolment form. Sent to a family after their place is confirmed. */
export const FULL_ENROLMENT_URL = `${CRM_BASE}/enroll`;

/** Family portal, for existing students. */
export const PARENT_PORTAL_URL = `${CRM_BASE}/parent-portal`;

/**
 * A wa.me link that opens WhatsApp with the pre-enrolment link pre-typed, so
 * reception can forward it in one tap rather than copying a URL by hand.
 */
export const whatsappPreEnrolment = (phone = '34605661212') =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hola, puede reservar su plaza para el curso 2026/27 aquí: ${PRE_ENROLMENT_URL}`
  )}`;
