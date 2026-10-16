import sharp from 'sharp';
import { join } from 'node:path';

const publicDir = 'public';
const imageDir = join(publicDir, 'img');
const courseImages = [
  'young_learners-v2',
  'primary-v2',
  'teens-v2',
  'adults-v2',
  'speaking-v2',
  'intensive-v2',
];

for (const name of courseImages) {
  await sharp(join(imageDir, `${name}-960.webp`))
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 74, effort: 6 })
    .toFile(join(imageDir, `${name}-720.webp`));
}

await sharp(join(imageDir, 'tyne-bridge-hero-1920.webp'))
  .resize({ width: 720, withoutEnlargement: true })
  .webp({ quality: 72, effort: 6 })
  .toFile(join(imageDir, 'tyne-bridge-hero-720.webp'));

await sharp(join(publicDir, 'logo-light-nav.png'))
  .resize({ width: 160, withoutEnlargement: true })
  .webp({ quality: 88, alphaQuality: 100, effort: 6 })
  .toFile(join(publicDir, 'logo-light-nav-160.webp'));

console.log('Generated responsive course, hero, and navigation assets.');
