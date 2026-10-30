/** Optional services are disabled until the visitor chooses them individually. */
export type ConsentValue = 'granted' | 'denied';
export type ConsentPreferences = { fonts: boolean; monitoring: boolean; maps: boolean };
export const ESSENTIAL_ONLY: ConsentPreferences = { fonts: false, monitoring: false, maps: false };
const STORAGE_KEY = 'tea:privacy-preferences:v2';
export const CONSENT_CHANGED_EVENT = 'tea:consent-changed';
export const CONSENT_OPEN_EVENT = 'tea:consent-open';
let memoryChoice: ConsentPreferences | null = null;

export function readPreferences(): ConsentPreferences | null {
  if (memoryChoice) return { ...memoryChoice };
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
    if (stored && ['fonts', 'monitoring', 'maps'].every(key => typeof stored[key] === 'boolean')) {
      return { fonts: stored.fonts, monitoring: stored.monitoring, maps: stored.maps };
    }
    // Honour previous refusals; ask previous accepters for separate choices.
    if (localStorage.getItem('tea:cookie-consent') === 'denied') return { ...ESSENTIAL_ONLY };
  } catch { /* Storage may be unavailable. Remain deny-first. */ }
  return null;
}

/** Compatibility for components that only need to know a choice was made. */
export function readConsent(): ConsentValue | null {
  const choice = readPreferences();
  return choice ? (Object.values(choice).some(Boolean) ? 'granted' : 'denied') : null;
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function setPreferences(choice: ConsentPreferences): void {
  const previous = readPreferences();
  memoryChoice = { fonts: choice.fonts, monitoring: choice.monitoring, maps: choice.maps };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryChoice));
    localStorage.removeItem('tea:cookie-consent');
  } catch { /* Keep the choice in memory when storage is blocked. */ }
  applyPreferences();
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
  // Reload terminates already-running monitoring code.
  // The saved choice prevents it starting again.
  if (previous?.monitoring && !choice.monitoring) window.location.reload();
}

export function allowMap(): void {
  setPreferences({ ...(readPreferences() ?? ESSENTIAL_ONLY), maps: true });
}

let monitoringStarted = false;
function applyPreferences(): void {
  if (typeof document === 'undefined') return;
  const choice = readPreferences();
  if (choice?.fonts && !document.getElementById('tea-google-fonts')) {
    const link = document.createElement('link');
    link.id = 'tea-google-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600..900&family=Inter:wght@400..700&display=swap';
    document.head.appendChild(link);
  } else if (!choice?.fonts) {
    document.getElementById('tea-google-fonts')?.remove();
  }
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!choice?.monitoring || monitoringStarted || !dsn) return;
  monitoringStarted = true;
  void import('@sentry/react').then(Sentry => {
    // Withdrawal may happen while the optional module downloads.
    if (!readPreferences()?.monitoring) { monitoringStarted = false; return; }
    Sentry.init({ dsn, sendDefaultPii: false, beforeSend: event => readPreferences()?.monitoring ? event : null });
  }).catch(() => { monitoringStarted = false; });
}

export function applyStoredConsent(): void { applyPreferences(); }
