import sharp from 'sharp';

const outputs = [
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\ian-ward-0ZHOSyYPKUs-unsplash.jpg`,
    width: 960,
    path: 'public/img/tyne-bridge-hero-960.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\ian-ward-0ZHOSyYPKUs-unsplash.jpg`,
    width: 1920,
    path: 'public/img/tyne-bridge-hero-1920.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\karl-moran-URDWhRXLu7o-unsplash.jpg`,
    width: 960,
    path: 'public/img/newcastle-quayside-960.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\karl-moran-URDWhRXLu7o-unsplash.jpg`,
    width: 1440,
    path: 'public/img/newcastle-quayside-1440.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\boris-yue-fI0OUfDK7tE-unsplash.jpg`,
    width: 900,
    path: 'public/img/angel-north-900.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\ebun-oluwole-10uI9mEYhKI-unsplash.jpg`,
    width: 900,
    path: 'public/img/greys-monument-900.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\STOCK PHOTOS\bruce-edwards-teiujpipKds-unsplash.jpg`,
    width: 900,
    path: 'public/img/bamburgh-castle-900.webp',
  },
  {
    source: String.raw`C:\Users\admin\Downloads\FECEI-insignia-web-transparente-2x-0279.png`,
    width: 660,
    path: 'public/img/fecei-accredited-0279.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\LOGOS\LOGOS CAMBRIDGE\CEQ_Prep_FULL_2025-26_RGB.png`,
    width: 720,
    path: 'public/img/cambridge-preparation-centre-2025-26.webp',
  },
  {
    source: String.raw`C:\Users\admin\Desktop\TYNESIDE_ACADEMY\Source\MARKETING\ASSETS\LOGOS\LOGOS EXAMS LEVANTE\Logo Platinum.png`,
    width: 900,
    path: 'public/img/exams-levante-platinum.webp',
  },
];

await Promise.all(
  outputs.map(({ source, width, path }) =>
    sharp(source)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path),
  ),
);

console.log(`Created ${outputs.map(({ path }) => path).join(', ')}`);
