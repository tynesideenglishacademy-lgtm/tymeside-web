/**
 * Cookie / third-party consent.
 *
 * Two things on this site reach out to a third party in a way that Spanish
 * cookie law (LSSI-CE, art. 22.2) treats as needing prior consent:
 *
 *   - Google Fonts. The browser fetches the stylesheet and font files from
 *     fonts.googleapis.com / fonts.gstatic.com, which logs the visitor's IP.
 *   - Sentry Session Replay. It records a video-like reconstruction of the
 *     visit, which is personal data.
 *
 * Both stay OFF until the visitor accepts. Essential state (which is only this
 * choice itself, stored in localStorage) needs no consent. On a return visit
 * the stored "granted" choice is re-applied on boot without showing the banner.
 *
 * Fonts fall back to the system stack in --font-heading / --font-body until
 * consent is given, so the page is fully usable with nothing accepted.
 */

export type ConsentValue = 'granted' | 'denied';

const STORAGE_KEY = 'tea:cookie-consent';
export const CONSENT_CHANGED_EVENT = 'tea:consent-changed';

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@600..900&family=Inter:wght@400..700&display=swap';

export function readConsent(): ConsentValue | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private mode / storage disabled: honour the choice for this page load
    // only. The banner will simply ask again next time.
  }
  if (value === 'granted') enableThirdParties();
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: value }));
  } catch {
    /* CustomEvent unsupported — nothing depends on it synchronously */
  }
}

let started = false;

/** Loads the consent-gated third parties. Safe to call more than once. */
export function enableThirdParties(): void {
  if (started || typeof document === 'undefined') return;
  started = true;
  loadGoogleFonts();
  initSentry();
}

function loadGoogleFonts(): void {
  if (document.getElementById('tea-google-fonts')) return;
  const link = document.createElement('link');
  link.id = 'tea-google-fonts';
  link.rel = 'stylesheet';
  link.href = GOOGLE_FONTS_HREF;
  document.head.appendChild(link);
}

function initSentry(): void {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!dsn) return;
  // Dynamic import so @sentry/react stays out of the main bundle and only
  // downloads once a visitor has accepted.
  void import('@sentry/react').then((Sentry) => {
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  });
}

/** Called once on boot: re-applies a previously granted choice silently. */
export function applyStoredConsent(): void {
  if (readConsent() === 'granted') enableThirdParties();
}
