/*
 * Legal page copy — DRAFT SHELLS.
 *
 * TODO: lawyer / gestoría — this is a structural placeholder written from what
 * we can verify about how the site actually works (which third parties it
 * calls, what the forms collect). It has NOT been reviewed by a lawyer. Every
 * field that only a gestoría or the academy's fiscal records can supply is
 * marked [PENDIENTE: ...] rather than guessed. Do not present any of this as
 * final legal text until it has been reviewed and the [PENDIENTE] items filled.
 *
 * The copy lives here rather than in src/i18n.ts, mirroring the pattern already
 * used for the APTIS landing: a whole document is easier to hand to a
 * professional as one block than to reconstruct from scattered translation
 * keys.
 *
 * Known, verifiable facts used below:
 *   - Trading name: Tyneside English Academy
 *   - Teaching premises: Plaza Tomás y Valiente 6, 30006 Puente Tocinos, Murcia
 *   - Contact: info@tynesideacademy.com · 605 661 212
 *   - Operating since 2015
 *   - Third parties the site loads: Supabase (database), FormSubmit (delivers
 *     the level-test result by email), Vercel (hosting), Google Maps (embedded
 *     map on the contact section), Google Fonts + Sentry (only after cookie
 *     consent).
 */

export type LegalSection = { heading: string; paragraphs: string[] };

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalSlug = 'aviso-legal' | 'privacidad' | 'cookies';

const DRAFT_DATE = '[PENDIENTE: fecha de publicación]';

const es: Record<LegalSlug, LegalDoc> = {
  'aviso-legal': {
    title: 'Aviso Legal',
    updated: DRAFT_DATE,
    intro:
      'Condiciones de uso del sitio web de Tyneside English Academy e información del titular exigida por la Ley 34/2002 (LSSI-CE).',
    sections: [
      {
        heading: '1. Titular del sitio',
        paragraphs: [
          'Denominación social: [PENDIENTE: razón social completa].',
          'Nombre comercial: Tyneside English Academy.',
          'NIF/CIF: [PENDIENTE: NIF/CIF].',
          'Domicilio fiscal: [PENDIENTE: confirmar dirección fiscal completa].',
          'Centro docente: Plaza Tomás y Valiente 6, 30006 Puente Tocinos, Murcia.',
          'Correo electrónico: info@tynesideacademy.com. Teléfono: 605 661 212.',
          'Datos registrales: [PENDIENTE: registro mercantil / número de registro de centro educativo, si procede].',
        ],
      },
      {
        heading: '2. Objeto',
        paragraphs: [
          'Este sitio web tiene carácter informativo sobre los cursos y servicios de la academia y permite solicitar información y realizar una prueba de nivel de inglés en línea.',
          'El acceso y la navegación por el sitio atribuyen la condición de usuario e implican la aceptación de este Aviso Legal.',
        ],
      },
      {
        heading: '3. Condiciones de uso',
        paragraphs: [
          'El usuario se compromete a hacer un uso lícito del sitio y a no introducir datos falsos en los formularios.',
          'La academia puede modificar o suspender el contenido del sitio sin previo aviso.',
        ],
      },
      {
        heading: '4. Propiedad intelectual e industrial',
        paragraphs: [
          'Los textos, el logotipo, el diseño y demás elementos del sitio pertenecen a Tyneside English Academy o a terceros que han autorizado su uso, y no pueden reproducirse sin autorización.',
          '[PENDIENTE: confirmar titularidad de las imágenes actuales; a la fecha son ilustraciones provisionales.]',
        ],
      },
      {
        heading: '5. Responsabilidad',
        paragraphs: [
          'La academia no se responsabiliza de los daños derivados de un uso indebido del sitio ni de las interrupciones del servicio ajenas a su control.',
          'El sitio puede contener enlaces a páginas de terceros (por ejemplo, el sistema de matrícula o el perfil de Google); la academia no controla ni responde de sus contenidos.',
        ],
      },
      {
        heading: '6. Legislación aplicable',
        paragraphs: [
          'Este Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.',
        ],
      },
    ],
  },
  privacidad: {
    title: 'Política de Privacidad',
    updated: DRAFT_DATE,
    intro:
      'Cómo trata Tyneside English Academy los datos personales que se recogen a través de este sitio web, conforme al RGPD (UE) 2016/679 y la LOPDGDD 3/2018.',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        paragraphs: [
          'Tyneside English Academy — [PENDIENTE: razón social y NIF/CIF].',
          'Dirección: Plaza Tomás y Valiente 6, 30006 Puente Tocinos, Murcia.',
          'Contacto en materia de protección de datos: info@tynesideacademy.com.',
          '[PENDIENTE: indicar si se ha designado Delegado de Protección de Datos (DPO) y sus datos de contacto.]',
        ],
      },
      {
        heading: '2. Datos que recogemos y con qué finalidad',
        paragraphs: [
          'Formulario de contacto: nombre, teléfono, correo electrónico y curso de interés, con la finalidad de atender tu solicitud de información.',
          'Prueba de nivel en línea: nombre, correo electrónico, código postal y, opcionalmente, teléfono y dirección, junto con el resultado de la prueba, con la finalidad de enviarte tu certificado y ofrecerte asesoramiento sobre el curso adecuado.',
          'No se elaboran perfiles ni se toman decisiones automatizadas con efectos jurídicos sobre el usuario.',
        ],
      },
      {
        heading: '3. Base jurídica',
        paragraphs: [
          'El tratamiento se basa en tu consentimiento, que otorgas al marcar la casilla correspondiente y enviar el formulario (art. 6.1.a RGPD).',
          'Puedes retirar el consentimiento en cualquier momento escribiendo a info@tynesideacademy.com, sin que ello afecte a la licitud del tratamiento previo.',
        ],
      },
      {
        heading: '4. Conservación',
        paragraphs: [
          'Conservaremos tus datos mientras exista interés mutuo o hasta que solicites su supresión, y después durante los plazos legalmente exigibles.',
          '[PENDIENTE: fijar plazos de conservación concretos con la asesoría.]',
        ],
      },
      {
        heading: '5. Destinatarios y encargados del tratamiento',
        paragraphs: [
          'No cedemos tus datos a terceros salvo obligación legal.',
          'Utilizamos proveedores que actúan como encargados del tratamiento: Supabase (alojamiento de la base de datos), FormSubmit (envío por correo del resultado de la prueba de nivel) y Vercel (alojamiento del sitio web).',
          'Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD (cláusulas contractuales tipo).',
          '[PENDIENTE: confirmar la relación completa de encargados y la firma de los contratos del art. 28 RGPD.]',
        ],
      },
      {
        heading: '6. Tus derechos',
        paragraphs: [
          'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a info@tynesideacademy.com, indicando el derecho que ejercitas y adjuntando copia de un documento identificativo.',
          'Si consideras que el tratamiento no se ajusta a la normativa, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
      },
      {
        heading: '7. Seguridad',
        paragraphs: [
          'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. La transmisión por internet nunca es completamente segura, pero trabajamos para reducir los riesgos.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    updated: DRAFT_DATE,
    intro:
      'Qué se almacena en tu navegador cuando visitas este sitio y cómo controlarlo, conforme al art. 22.2 de la LSSI-CE.',
    sections: [
      {
        heading: '1. Qué usamos',
        paragraphs: [
          'Almacenamiento técnico imprescindible: guardamos en el almacenamiento local de tu navegador únicamente tu decisión sobre este aviso, para no volver a preguntártelo. No requiere consentimiento.',
          'No utilizamos cookies de analítica ni de publicidad propias.',
        ],
      },
      {
        heading: '2. Servicios de terceros sujetos a consentimiento',
        paragraphs: [
          'Google Fonts: si aceptas, cargamos las tipografías desde los servidores de Google (fonts.googleapis.com y fonts.gstatic.com), lo que implica que Google recibe tu dirección IP. Si no aceptas, el sitio usa las tipografías del sistema.',
          'Sentry: si aceptas, activamos una herramienta de monitorización de errores que puede registrar la sesión de navegación para diagnosticar fallos. Si no aceptas, no se carga.',
          'Google Maps: el mapa de la sección de contacto solo se carga cuando se muestra y puede instalar cookies de Google. [PENDIENTE: valorar con la asesoría si el mapa debe cargarse también solo tras consentimiento.]',
        ],
      },
      {
        heading: '3. Cómo cambiar tu decisión',
        paragraphs: [
          'Puedes borrar el almacenamiento local del sitio desde la configuración de tu navegador; al volver a entrar, el aviso aparecerá de nuevo.',
          'También puedes configurar tu navegador para bloquear o eliminar cookies de terceros.',
        ],
      },
    ],
  },
};

const en: Record<LegalSlug, LegalDoc> = {
  'aviso-legal': {
    title: 'Legal Notice',
    updated: DRAFT_DATE,
    intro:
      'Terms of use for the Tyneside English Academy website and the site-owner information required by Spanish Law 34/2002 (LSSI-CE).',
    sections: [
      {
        heading: '1. Site owner',
        paragraphs: [
          'Registered name: [PENDIENTE: full registered company name].',
          'Trading name: Tyneside English Academy.',
          'Tax ID (NIF/CIF): [PENDIENTE: NIF/CIF].',
          'Registered address: [PENDIENTE: confirm full registered address].',
          'Teaching premises: Plaza Tomás y Valiente 6, 30006 Puente Tocinos, Murcia.',
          'Email: info@tynesideacademy.com. Phone: 605 661 212.',
          'Registry details: [PENDIENTE: commercial registry / education-centre registration number, if applicable].',
        ],
      },
      {
        heading: '2. Purpose',
        paragraphs: [
          'This website provides information about the academy’s courses and services and lets visitors request information and take an online English level test.',
          'Accessing and browsing the site makes you a user and implies acceptance of this Legal Notice.',
        ],
      },
      {
        heading: '3. Conditions of use',
        paragraphs: [
          'The user agrees to use the site lawfully and not to submit false information through the forms.',
          'The academy may change or suspend the site’s content without prior notice.',
        ],
      },
      {
        heading: '4. Intellectual and industrial property',
        paragraphs: [
          'The text, logo, design and other elements of the site belong to Tyneside English Academy or to third parties who have authorised their use, and may not be reproduced without permission.',
          '[PENDIENTE: confirm ownership of the current images; at this date they are placeholder illustrations.]',
        ],
      },
      {
        heading: '5. Liability',
        paragraphs: [
          'The academy is not liable for damage arising from misuse of the site or for service interruptions outside its control.',
          'The site may link to third-party pages (for example the enrolment system or the Google profile); the academy does not control or answer for their content.',
        ],
      },
      {
        heading: '6. Applicable law',
        paragraphs: [
          'This Legal Notice is governed by Spanish law. Any dispute will be submitted to the courts with jurisdiction under the applicable rules.',
        ],
      },
    ],
  },
  privacidad: {
    title: 'Privacy Policy',
    updated: DRAFT_DATE,
    intro:
      'How Tyneside English Academy processes the personal data collected through this website, under the GDPR (EU) 2016/679 and Spanish Law LOPDGDD 3/2018.',
    sections: [
      {
        heading: '1. Data controller',
        paragraphs: [
          'Tyneside English Academy — [PENDIENTE: registered name and NIF/CIF].',
          'Address: Plaza Tomás y Valiente 6, 30006 Puente Tocinos, Murcia.',
          'Data-protection contact: info@tynesideacademy.com.',
          '[PENDIENTE: state whether a Data Protection Officer (DPO) has been appointed and their contact details.]',
        ],
      },
      {
        heading: '2. What we collect and why',
        paragraphs: [
          'Contact form: name, phone, email and course of interest, in order to respond to your enquiry.',
          'Online level test: name, email, postal code and, optionally, phone and address, together with your test result, in order to send you your certificate and advise you on the right course.',
          'No profiling or automated decisions with legal effects are carried out.',
        ],
      },
      {
        heading: '3. Legal basis',
        paragraphs: [
          'Processing is based on your consent, given when you tick the relevant box and submit the form (Art. 6(1)(a) GDPR).',
          'You may withdraw consent at any time by writing to info@tynesideacademy.com, without affecting the lawfulness of earlier processing.',
        ],
      },
      {
        heading: '4. Retention',
        paragraphs: [
          'We keep your data for as long as there is mutual interest or until you ask us to delete it, and afterwards for the periods required by law.',
          '[PENDIENTE: set specific retention periods with the adviser.]',
        ],
      },
      {
        heading: '5. Recipients and processors',
        paragraphs: [
          'We do not share your data with third parties except where required by law.',
          'We use providers acting as data processors: Supabase (database hosting), FormSubmit (emailing the level-test result) and Vercel (website hosting).',
          'Some of these providers may process data outside the European Economic Area under the safeguards set out in the GDPR (standard contractual clauses).',
          '[PENDIENTE: confirm the full list of processors and that Art. 28 GDPR contracts are signed.]',
        ],
      },
      {
        heading: '6. Your rights',
        paragraphs: [
          'You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to info@tynesideacademy.com, stating the right you wish to exercise and attaching a copy of an identity document.',
          'If you believe the processing does not comply with the rules, you may complain to the Spanish Data Protection Agency (www.aepd.es).',
        ],
      },
      {
        heading: '7. Security',
        paragraphs: [
          'We apply reasonable technical and organisational measures to protect your data. Transmission over the internet is never completely secure, but we work to reduce the risks.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: DRAFT_DATE,
    intro:
      'What is stored in your browser when you visit this site and how to control it, under Art. 22.2 of the Spanish LSSI-CE.',
    sections: [
      {
        heading: '1. What we use',
        paragraphs: [
          'Essential technical storage: we save only your decision about this notice in your browser’s local storage, so we do not ask again. No consent is required.',
          'We do not use our own analytics or advertising cookies.',
        ],
      },
      {
        heading: '2. Third-party services subject to consent',
        paragraphs: [
          'Google Fonts: if you accept, we load the fonts from Google’s servers (fonts.googleapis.com and fonts.gstatic.com), which means Google receives your IP address. If you do not accept, the site uses system fonts.',
          'Sentry: if you accept, we enable an error-monitoring tool that may record the browsing session to diagnose faults. If you do not accept, it is not loaded.',
          'Google Maps: the map in the contact section only loads when shown and may set Google cookies. [PENDIENTE: review with the adviser whether the map should also load only after consent.]',
        ],
      },
      {
        heading: '3. How to change your decision',
        paragraphs: [
          'You can clear the site’s local storage from your browser settings; the notice will appear again on your next visit.',
          'You can also configure your browser to block or delete third-party cookies.',
        ],
      },
    ],
  },
};

export const LEGAL_DOCS: Record<'es' | 'en', Record<LegalSlug, LegalDoc>> = { es, en };

export const LEGAL_SLUGS: LegalSlug[] = ['aviso-legal', 'privacidad', 'cookies'];
