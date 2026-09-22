/**
 * Generates responsive WebP derivatives for everything in public/.
 *
 * The source PNGs are ~850 KB each because they came straight out of a design
 * tool at full resolution. They are displayed at 220px tall in a card, so the
 * browser was downloading roughly 20x the pixels it could use.
 *
 * Run: node scripts/optimize-images.mjs
 * Outputs public/img/<name>-<width>.webp and leaves the originals untouched,
 * so this is safe to re-run and safe to revert (delete public/img).
 */

import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';

/**
 * Sources live outside public/ on purpose: anything in public/ is copied
 * verbatim into the build, so keeping the 850 KB originals there shipped them
 * to production alongside the derivatives that replaced them.
 */
const SRC = 'design-source';
const OUT = 'public/img';

/**
 * Widths per image, chosen from the size each one is actually painted at.
 * Card art tops out around 480 CSS px, so 960 covers a 2x display; the
 * full-bleed backgrounds need real desktop widths.
 */
const PLAN = {
  'young_learners.png': [480, 960],
  'teens.png': [480, 960],
  'adults.png': [480, 960],
  'speaking.png': [480, 960],
  'intensive.png': [480, 960],
  'camps1.png': [480, 960],
  'camps2.png': [480, 960],
  'hero-bg-new.png': [960, 1440, 1920],
  'services_b2b.png': [960, 1440, 1920],
};

/**
 * Present in design-source/ but referenced by nothing in src/. Left on disk
 * deliberately — they are the only copies — but no derivative is generated.
 */
const UNUSED = ['trips.png', 'hero-bg.jpg'];

/**
 * public/img/og-banner.jpg (the Open Graph / share-preview card) is NOT
 * built here. It used to be cropped from design-source/banner1.png, a
 * mockup from an earlier design pass that drifted out of sync with the
 * live site (English nav copy, an "Apply Now" button, a "Learn More" CTA
 * that no longer exist) while the real homepage moved on underneath it,
 * so every link share kept showing a stale hero. It's now generated
 * straight from the live hero via `node scripts/generate-og-image.mjs`
 * (see that file), which can't go stale the same way.
 */

const kb = (n) => `${Math.round(n / 1024)} KB`;

async function main() {
  await mkdir(OUT, { recursive: true });

  const files = await readdir(SRC);
  let before = 0;
  let after = 0;

  for (const file of files) {
    if (!PLAN[file]) continue;

    const src = join(SRC, file);
    const { size } = await stat(src);
    before += size;

    const { name } = parse(file);
    const meta = await sharp(src).metadata();

    for (const width of PLAN[file]) {
      // Never upscale: a 900px source asked for at 1920 would just be blurry
      // and larger than the original.
      if (meta.width && width > meta.width) continue;

      const dest = join(OUT, `${name}-${width}.webp`);
      const info = await sharp(src)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toFile(dest);

      after += info.size;
      console.log(`  ${dest}  ${kb(info.size)}`);
    }

    console.log(`${file}: ${kb(size)} -> ${PLAN[file].length} webp variants\n`);
  }

  console.log(`Sources: ${kb(before)}  ->  derivatives: ${kb(after)}`);
  console.log(`\nUnused originals (excluded from the build): ${UNUSED.join(', ')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
