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
 * `tyneside-crm.vercel.app` was claimed on 2026-08-15 and verified the same day:
 * 200 to plain curl, to a full Chrome User-Agent, and - the part that matters
 * for links shared by WhatsApp - to WhatsApp's link-preview crawler. It serves
 * a byte-identical build to the project domain.
 *
 * DO NOT use `tyneside-crm-five.vercel.app`. It is still attached to the project
 * but sits behind Vercel's "Security Checkpoint" bot challenge and answers 403
 * to anything that does not execute JavaScript - including link crawlers. A URL
 * with no preview card that opens on a security interstitial reads as a scam to
 * a parent, which is the opposite of what an enrolment link must do.
 *
 * That challenge is also the real explanation for the "ssoProtection is
 * flapping" note in earlier handoffs. It was never SSO: the Vercel API reports
 * every form of deployment protection disabled for this project.
 *
 * When tynesideacademy.com is live, `crm.tynesideacademy.com` is shorter still
 * and worth moving to. Set VITE_CRM_BASE_URL and everything here follows.
 */
const CRM_BASE =
  (import.meta.env.VITE_CRM_BASE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://tyneside-crm.vercel.app';

/** Public "reserve a place" form. This is the link to share. */
export const PRE_ENROLMENT_URL = `${CRM_BASE}/preinscripcion`;

/** Full enrolment form. Sent to a family after their place is confirmed. */
export const FULL_ENROLMENT_URL = `${CRM_BASE}/enroll`;

/** Family portal, for existing students. */
export const PARENT_PORTAL_URL = `${CRM_BASE}/parent-portal`;

/**
 * The multi-level placement test. It lives on this website rather than in the
 * CRM, so it has its own base URL.
 *
 * `tyneside-web.vercel.app` is clean and short and - unlike the CRM's
 * `-five` domain - returns 200 to plain curl, to a Chrome User-Agent and to
 * WhatsApp's link-preview crawler, all verified 2026-08-15. Safe to share.
 */
const WEB_BASE =
  (import.meta.env.VITE_WEB_BASE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://tyneside-web.vercel.app';

export const LEVEL_TEST_URL = `${WEB_BASE}/level-test`;

/**
 * A wa.me link that opens WhatsApp with the pre-enrolment link pre-typed, so
 * reception can forward it in one tap rather than copying a URL by hand.
 */
export const whatsappPreEnrolment = (phone = '34605661212') =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hola, puede reservar su plaza para el curso 2026/27 aquí: ${PRE_ENROLMENT_URL}`
  )}`;

/**
 * The three links reception actually sends out, with the message already
 * written. `wa.me/?text=` with no number opens WhatsApp's contact picker, so one
 * tap sends it to whoever you choose - which is how these are used in practice,
 * rather than to a fixed number.
 */
export const WHATSAPP_MESSAGES = {
  levelTest: `¡Hola! Puedes descubrir tu nivel de inglés con nuestro test gratuito (10 minutos) y recibirás tu certificado con la puntuación de la escala de Cambridge: ${LEVEL_TEST_URL}`,
  preEnrolment: `¡Hola! Puedes reservar tu plaza para el curso 2026/27 rellenando la prematrícula aquí: ${PRE_ENROLMENT_URL}`,
  fullEnrolment: `¡Hola! Aquí tienes la hoja de matrícula para completar tu inscripción: ${FULL_ENROLMENT_URL}`,
} as const;

/** Opens WhatsApp's contact picker with the chosen message ready to send. */
export const whatsappShare = (which: keyof typeof WHATSAPP_MESSAGES) =>
  `https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGES[which])}`;
