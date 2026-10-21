// Builds every browser/PWA/native icon from the official academy logo.
// Keeping one source of truth prevents the simplified SVG mark from drifting
// back into browser tabs or installed apps. Run: node scripts/make-icons.mjs
import sharp from 'sharp';
import { join } from 'node:path';

const publicDir = join(import.meta.dirname, '..', 'public');
const academyLogo = join(publicDir, 'logo-dark.png');
const sizes = {
  'academy-favicon-32.png': 32,
  'academy-app-icon-192.png': 192,
  'academy-app-icon-512.png': 512,
  'academy-apple-touch-180.png': 180,
  'academy-app-icon-1024.png': 1024,
};
for (const [name, size] of Object.entries(sizes)) {
  await sharp(academyLogo)
    .resize(size, size, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(join(publicDir, name));
  console.log('wrote', name, size);
}
