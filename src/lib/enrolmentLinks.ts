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
 * DO NOT switch this to the shorter `tyneside-crm-five.vercel.app`.
 *
 * That domain is assigned to the project and loads fine in a browser, but it
 * sits behind Vercel's "Security Checkpoint" bot challenge and answers 403 to
 * anything that does not execute JavaScript. Measured 2026-08-15: 403 to plain
 * curl, 403 with a full Chrome User-Agent, and - the part that matters here -
 * 403 to WhatsApp's link-preview crawler, while this domain returned 200 to all
 * three. A link with no preview card that opens on a security interstitial reads
 * as a scam to a parent.
 *
 * This is also the real explanation for the "ssoProtection is flapping" note in
 * earlier handoffs. It was never SSO: the Vercel API reports every form of
 * deployment protection disabled for this project. It is the bot challenge, and
 * it applies to that one domain rather than to the project.
 *
 * ⚠️ Replace with the real domain when tynesideacademy.com is live -
 * `crm.tynesideacademy.com/preinscripcion` is what should actually be shared
 * with families, and a custom domain sidesteps the challenge entirely.
 * Set VITE_CRM_BASE_URL and everything here follows.
 */
const CRM_BASE =
  (import.meta.env.VITE_CRM_BASE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://tyneside-crm-btloban93-5646s-projects.vercel.app';

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
