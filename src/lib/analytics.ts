import { track } from '@vercel/analytics';

/**
 * Thin wrapper over Vercel Web Analytics custom events.
 *
 * Vercel Web Analytics is cookieless and stores no personal data (no cross-site
 * identifier, IPs are hashed and dropped), so these fire WITHOUT a consent gate,
 * on the same legal basis as Plausible / Fathom. If a cookie-based provider is
 * ever added (GA4, Meta Pixel), gate THAT one behind lib/consent.ts — not this.
 *
 * Keep the event set small and the names stable: renaming an event splits its
 * history in the dashboard. Never pass anything that identifies a person
 * (name, email, phone) as a property — only coarse, non-PII context.
 */
export type AnalyticsEvent =
  | 'test_started' // visitor begins the level test (registration form submitted)
  | 'test_completed' // visitor answers the final question
  | 'whatsapp_click' // floating WhatsApp button opened
  | 'exam_click' // outbound click to the full CEFR practice exam (separate app)
  | 'lead_submitted'; // any lead form stored successfully

export function trackEvent(
  event: AnalyticsEvent,
  props?: Record<string, string | number | boolean | null>,
): void {
  try {
    track(event, props);
  } catch {
    // Analytics must never break a user flow.
  }
}
