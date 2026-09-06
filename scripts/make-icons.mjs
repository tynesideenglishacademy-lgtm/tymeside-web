// Rasterises public/favicon.svg into the PNG sizes index.html / the web
// manifest reference. Run: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const publicDir = join(import.meta.dirname, '..', 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));
const sizes = {
  'favicon-32.png': 32,
  'favicon-192.png': 192,
  'favicon-512.png': 512,
  'apple-touch-icon.png': 180,
};
for (const [name, size] of Object.entries(sizes)) {
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(join(publicDir, name));
  console.log('wrote', name, size);
}
