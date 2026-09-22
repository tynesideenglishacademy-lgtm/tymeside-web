/**
 * Generates public/img/og-banner.jpg (the Open Graph / share-preview card)
 * straight from the live hero, by screenshotting a running preview server
 * with Playwright and cropping to the 1200x630 that Facebook/WhatsApp/
 * Twitter scrapers expect.
 *
 * Previously this file was hand-cropped from a static design mockup that
 * quietly drifted out of sync with the real homepage - stale nav copy,
 * stale CTAs - so every shared link showed an old hero. Sourcing it from
 * the actual rendered page means it can't drift again: re-run this after
 * any hero/nav change.
 *
 * Run: npm run build && npm run preview -- --port 4173 &
 *      node scripts/generate-og-image.mjs
 */

import { chromium } from 'playwright-core';
import sharp from 'sharp';

const URL = process.env.OG_SOURCE_URL || 'http://localhost:4173/';
const OUT = 'public/img/og-banner.jpg';

async function main() {
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || '/opt/pw-browsers/chromium';
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('.editorial-hero-image img');
  await page.waitForTimeout(600);

  const cookieAccept = page.getByRole('button', { name: 'Aceptar todo' });
  if (await cookieAccept.isVisible().catch(() => false)) {
    await cookieAccept.click();
    await page.waitForTimeout(300);
  }

  const hero = await page.$('.editorial-hero');
  const raw = await hero.screenshot();
  await browser.close();

  const info = await sharp(raw)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(OUT);

  console.log(`${OUT}  ${Math.round(info.size / 1024)} KB  (Open Graph card, from ${URL})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
