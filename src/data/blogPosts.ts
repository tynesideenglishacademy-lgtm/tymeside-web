/**
 * Real blog content only.
 *
 * The three posts this file replaced were fabricated: dated in the future as
 * if already published, attributed to departments that don't exist at this
 * academy, and — worst of all — one of them invented an entire "our trip to
 * Newcastle" narrative that never happened. That's the same mistake the rest
 * of this site has spent real effort undoing elsewhere (see
 * src/data/testimonials.ts, and the stat corrections in Hero.tsx/ExamPrep.tsx).
 *
 * The three posts here are genuine exam-skill guides — accurate, generic
 * Cambridge exam technique that doesn't make any claim about this academy's
 * history, so there's nothing here to fabricate. `date` is the date each was
 * actually written and published on this site, not an invented one.
 *
 * Deliberately absent: a "Fechas importantes" / important-dates category.
 * That needs real academic-calendar dates (exam registration windows, term
 * dates) from the academy — inventing plausible-sounding dates would be
 * exactly the error this file exists to avoid. Add posts with
 * category: 'Calendario' once those are confirmed.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** Display date, e.g. "19 Sep 2026". */
  date: string;
  /** Same date, ISO 8601, for the Article structured data. */
  dateISO: string;
  category: string;
  readTime: string;
  author: string;
  content: string[];
}

const AUTHOR = 'Tyneside English Academy';
const PUBLISHED = '19 Sep 2026';
const PUBLISHED_ISO = '2026-09-19';

export const blogPosts: BlogPost[] = [
  {
    slug: 'speaking-b2-tips',
    title: 'Consejos para afrontar el Speaking del B2 First de Cambridge',
    excerpt: 'Las claves para dominar la expresión oral y perder el miedo escénico en tu examen oficial Cambridge.',
    date: PUBLISHED,
    dateISO: PUBLISHED_ISO,
    category: 'Cambridge Tips',
    readTime: '4 min lectura',
    author: AUTHOR,
    content: [
      'El examen B2 First de Cambridge evalúa tu capacidad para comunicarte de manera fluida y espontánea en inglés en situaciones reales.',
      '1. Conoce la estructura de las 4 partes: entrevista personal, descripción de una foto individual (long turn), tarea colaborativa en pareja y discusión temática posterior.',
      "2. Utiliza conectores variados. Evita repetir 'and' o 'because'. Incorpora conectores como 'furthermore', 'on the other hand', 'in terms of' o 'I reckon that...'.",
      "3. Demuestra interacción natural en las partes 3 y 4: escucha activamente a tu compañero y usa frases como 'that's a valid point, however...' o 'would you agree that...?'.",
      "4. Gestiona los silencios con conectores de relleno naturales como 'well, that's an interesting question...' en lugar de quedarte callado mientras piensas.",
    ],
  },
  {
    slug: 'writing-b2-opinion-essay',
    title: 'Cómo estructurar el ensayo de opinión del Writing B2 First',
    excerpt: 'La Parte 2 del Writing pide una redacción de 140 a 190 palabras. Así se organiza para que cada frase sume puntos.',
    date: PUBLISHED,
    dateISO: PUBLISHED_ISO,
    category: 'Cambridge Tips',
    readTime: '4 min lectura',
    author: AUTHOR,
    content: [
      'La Parte 2 del Writing del B2 First suele pedir un ensayo de opinión de 140 a 190 palabras, en registro formal, sobre un tema dado.',
      '1. Estructura en cuatro párrafos: introducción que reformula la pregunta (nunca la copies literalmente), dos párrafos de desarrollo con una idea clara y un ejemplo cada uno, y una conclusión que retoma tu opinión.',
      "2. Usa conectores de opinión con precisión: 'moreover', 'in addition' para sumar ideas; 'however', 'nevertheless' para contrastar; 'in conclusion' u 'overall' para cerrar.",
      "3. Mantén el registro formal de principio a fin: evita contracciones ('isn't' → 'is not') y vocabulario coloquial. Un cambio de registro a mitad de texto penaliza más que un error puntual de gramática.",
      'Controla el número de palabras: menos de 140 deja ideas sin desarrollar, y pasarte de 190 no suma nada — el examinador solo evalúa dentro del rango.',
    ],
  },
  {
    slug: 'listening-cambridge-strategies',
    title: 'Estrategias para el Listening de Cambridge: no pierdas ninguna respuesta',
    excerpt: 'El listening se pierde por despiste, no por nivel. Estas cuatro costumbres cambian el resultado.',
    date: PUBLISHED,
    dateISO: PUBLISHED_ISO,
    category: 'Cambridge Tips',
    readTime: '3 min lectura',
    author: AUTHOR,
    content: [
      'El Listening de Cambridge se estructura en varias partes, y cada una se escucha dos veces — salvo excepciones puntuales según el nivel del examen.',
      '1. Lee las preguntas antes de que empiece cada parte. Los segundos de pausa antes de la grabación son para predecir qué vas a escuchar: palabras clave, sinónimos, el tipo de información que falta.',
      "2. Cuidado con los distractores: es habitual que el hablante mencione primero una respuesta incorrecta antes de corregirse ('I used to think... but actually...'). La primera opción que escuches no siempre es la buena.",
      '3. Si te pierdes una respuesta, sigue adelante. Quedarte pensando en la que se te escapó te hace perder las dos o tres siguientes. Podrás volver a por ella en la segunda escucha.',
      'Practica también con audio real fuera de los exámenes de muestra — podcasts, noticias, series en inglés — para acostumbrarte a la velocidad y los acentos naturales, no solo al ritmo de un examen.',
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
