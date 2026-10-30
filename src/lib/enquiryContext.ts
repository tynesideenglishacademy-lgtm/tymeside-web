export const SERVICE_INTEREST = {
  colegios: 'Servicios escolares y extraescolares',
  'one-to-one': 'Clases particulares One to One',
  traduccion: 'Traducción e interpretación',
  newcastle: 'Viajes e inmersión en Newcastle',
} as const;

const COURSES = new Set<string>([
  ...Object.values(SERVICE_INTEREST), 'Tyneside Explorers (3-5 años)',
  'YLE Primaria (6-12 años)', 'Cambridge Adolescentes (ESO/Bachillerato)',
  'Cambridge Adultos (B1, B2, C1, C2)', 'Clases de conversación',
  'Cursos intensivos', 'FUNDAE / Formación Empresas', 'Trabaja con nosotros', 'Otro',
]);
const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
const LANDINGS = new Set(['/', '/empresas', ...Object.keys(SERVICE_INTEREST).map(slug => `/${slug}`)]);

export function selectedInterest(search: string): string {
  const interest = new URLSearchParams(search).get('interest') ?? '';
  return COURSES.has(interest) ? interest : '';
}

export function serviceContactUrl(slug: keyof typeof SERVICE_INTEREST, search: string): string {
  const params = new URLSearchParams({ interest: SERVICE_INTEREST[slug], landing: `/${slug}` });
  const incoming = new URLSearchParams(search);
  for (const key of CAMPAIGN_KEYS) {
    const value = incoming.get(key);
    if (value) params.set(key, value.slice(0, 64));
  }
  return `/?${params.toString()}#contact`;
}

/** CRM notes only: never send arbitrary query strings or campaign values to analytics. */
export function enquiryContext(search: string, currentLanding = '/') {
  const params = new URLSearchParams(search);
  const requested = params.get('landing') ?? currentLanding;
  const landing = LANDINGS.has(requested) ? requested : '/';
  const notes = [`Página de origen: ${landing}`];
  for (const key of CAMPAIGN_KEYS) {
    const value = params.get(key)?.replace(/\p{Cc}/gu, '').trim().slice(0, 64);
    if (value) notes.push(`${key}: ${value}`);
  }
  return { landing, notes };
}
