import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';

// Test-only public configuration. All external requests are intercepted below.
process.env.VITE_SUPABASE_URL = 'https://presence-test.supabase.co';
process.env.VITE_SUPABASE_ANON_KEY = 'test-public-key';
process.env.VITE_SENTRY_DSN = 'https://public@presence-test.ingest.de.sentry.io/1';
const { createServer } = await import('vite');
const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
let browser;
const results = [];
await mkdir('output/presence-qa', { recursive: true });
try {
  await server.listen();
  const base = server.resolvedUrls.local[0].replace(/\/$/, '');
  browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const external = [];
  const submissions = [];
  let failLead = true;
  await context.route('**/*', async route => {
    const request = route.request();
    if (request.url().includes('/functions/v1/submit-lead')) {
      submissions.push(request.postDataJSON());
      return route.fulfill({ status: failLead ? 503 : 200, contentType: 'application/json', body: JSON.stringify(failLead ? { ok: false, error: 'test_unavailable' } : { ok: true }) });
    }
    if (!request.url().startsWith(base)) { external.push(request.url()); return route.abort(); }
    return route.continue();
  });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  const choice = () => page.evaluate(() => JSON.parse(localStorage.getItem('tea:privacy-preferences:v2')));
  await page.goto(base);
  await page.getByRole('dialog').waitFor();
  await page.screenshot({ path: 'output/presence-qa/desktop-consent.png' });
  assert.equal(external.filter(url => /google|sentry/.test(url)).length, 0);
  await page.getByRole('button', { name: 'Solo lo imprescindible', exact: true }).click();
  await page.getByRole('dialog').waitFor({ state: 'hidden' });
  await page.getByRole('button', { name: 'Cargar mapa', exact: true }).click();
  assert.deepEqual(await choice(), { fonts: false, monitoring: false, maps: true });
  assert.equal(await page.locator('iframe').count(), 1);
  assert.equal(await page.locator('#tea-google-fonts').count(), 0);
  results.push('Deny-first; map-only permission does not enable fonts or monitoring');
  await page.getByRole('button', { name: 'Configurar privacidad', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Google Maps', exact: true }).uncheck();
  await page.getByRole('checkbox', { name: 'Tipografías de Google', exact: true }).check();
  await page.getByRole('button', { name: 'Guardar selección', exact: true }).click();
  assert.deepEqual(await choice(), { fonts: true, monitoring: false, maps: false });
  assert.equal(await page.locator('iframe').count(), 0);
  assert.equal(await page.locator('#tea-google-fonts').count(), 1);
  await page.getByRole('button', { name: 'Configurar privacidad', exact: true }).click();
  await page.getByRole('button', { name: 'Aceptar todo', exact: true }).click();
  await page.getByRole('button', { name: 'Configurar privacidad', exact: true }).click();
  await Promise.all([page.waitForEvent('load'), page.getByRole('button', { name: 'Solo lo imprescindible', exact: true }).click()]);
  assert.deepEqual(await choice(), { fonts: false, monitoring: false, maps: false });
  assert.equal(await page.locator('#tea-google-fonts, iframe').count(), 0);
  results.push('Separate choices persist; withdrawal removes fonts and map and reloads monitoring');
  await page.locator('.navbar-lang-btn').first().click();
  await page.getByRole('button', { name: 'Privacy settings', exact: true }).click();
  await page.getByRole('button', { name: 'Save selection', exact: true }).click();
  results.push('English privacy controls render and work');
  await page.locator('.navbar-lang-btn').first().click();

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Configurar privacidad', exact: true }).click();
  await page.screenshot({ path: 'output/presence-qa/mobile-consent.png' });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.getByRole('button', { name: 'Solo lo imprescindible', exact: true }).click();
  for (const [slug, interest] of Object.entries({ colegios: 'Servicios escolares y extraescolares', 'one-to-one': 'Clases particulares One to One', traduccion: 'Traducción e interpretación', newcastle: 'Viajes e inmersión en Newcastle' })) {
    await page.goto(`${base}/${slug}?utm_source=instagram&utm_medium=social&utm_campaign=autumn`);
    await page.locator('a[href*="landing="]').first().click();
    await page.locator('#contact-course').waitFor();
    assert.equal(await page.locator('#contact-course').inputValue(), interest);
    assert.equal(new URL(page.url()).searchParams.get('landing'), `/${slug}`);
    assert.equal(new URL(page.url()).searchParams.get('utm_campaign'), 'autumn');
  }
  results.push('All four service pages preserve interest, origin, campaign and contact anchor on mobile');
  await page.goto(`${base}/one-to-one?utm_source=instagram&utm_campaign=autumn`);
  await page.locator('a[href*="landing="]').first().click();
  await page.locator('#contact-name').fill('Presence Test');
  await page.locator('#contact-phone').fill('600000000');
  await page.locator('#contact-email').fill('presence@example.test');
  await page.locator('#gdpr').check();
  await page.locator('#contact button[type="submit"]').click();
  await page.locator('#contact [role="alert"]').waitFor();
  assert.equal(await page.locator('#contact-name').inputValue(), 'Presence Test');
  assert.equal(await page.locator('#contact [role="status"]').count(), 0);
  failLead = false;
  await page.locator('#contact button[type="submit"]').click();
  await page.locator('#contact [role="status"]').waitFor();
  assert.equal(submissions.length, 2);
  assert.equal(submissions[1].source, 'contact');
  assert.match(submissions[1].notes, /Página de origen: \/one-to-one/);
  assert.match(submissions[1].notes, /utm_source: instagram/);
  results.push('Intercepted failure retains form; explicit retry succeeds with unchanged CRM tag and attribution');
  assert.deepEqual(pageErrors, []);
  await context.close();

  for (const old of ['granted', 'denied']) {
    const legacy = await browser.newContext();
    await legacy.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
    await legacy.addInitScript(value => localStorage.setItem('tea:cookie-consent', value), old);
    const legacyPage = await legacy.newPage();
    await legacyPage.goto(base);
    await legacyPage.locator('#hero-title').waitFor();
    assert.equal(await legacyPage.getByRole('dialog').count(), old === 'granted' ? 1 : 0);
    assert.equal(await legacyPage.locator('#tea-google-fonts, iframe').count(), 0);
    await legacy.close();
  }
  results.push('Legacy refusals remain honoured; legacy all-service consent prompts for granular choices');
  const blockedStorage = await browser.newContext();
  await blockedStorage.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  await blockedStorage.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked for test'); } }));
  const privatePage = await blockedStorage.newPage();
  await privatePage.goto(base);
  await privatePage.getByRole('button', { name: 'Solo lo imprescindible', exact: true }).click();
  await privatePage.getByRole('button', { name: 'Cargar mapa', exact: true }).click();
  assert.equal(await privatePage.locator('iframe').count(), 1);
  await blockedStorage.close();
  results.push('Blocked storage retains a working in-memory consent choice');
  await writeFile('output/presence-qa/results.json', JSON.stringify({ results, productionWrites: 0 }, null, 2));
  console.log(results.map(result => `PASS ${result}`).join('\n'));
} finally {
  await browser?.close();
  await server.close();
}
