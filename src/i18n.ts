import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        courses: "Cursos",
        methodology: "Metodología",
        exams: "Exámenes",
        services: "Servicios",
        blog: "Blog",
        contact: "Contacto",
        enroll: "MATRICÚLATE",
        virtualClassroom: "Aulario Virtual",
        call: "Llamar",
        whatsapp: "WhatsApp"
      },
      hero: {
        connect: "CONNECT.",
        grow: "GROW.",
        learn: "LEARN.",
        h1: "Auténtica formación británica. Resultados reales en el corazón de Murcia.",
        h2: "Domina el inglés con Tyneside English Academy",
        p1: "Desde los 3 años hasta el dominio del C2 de Cambridge, Tyneside English Academy ofrece soluciones para cada edad y nivel.",
        p2: "Nuestra misión es proporcionar soluciones de aprendizaje adaptadas a cada etapa del desarrollo y a las distintas necesidades académicas y profesionales.",
        cta: "Prueba de Nivel Gratuita"
      },
      courses: {
        title: "Nuestra Oferta Educativa",
        explorers_title: "Tyneside Explorers (3 a 5 años)",
        explorers_desc: "Clases dinámicas y lúdicas que introducen el idioma de manera natural y divertida, esencial para un futuro bilingüe.",
        yl_title: "Young Learners (Primaria)",
        yl_desc: "Consolidamos la gramática, la lectura y la escritura mientras mantenemos el enfoque en la fluidez conversacional. Comenzamos a familiarizar a los alumnos con los formatos de exámenes oficiales.",
        adolescents_title: "Adolescents (Secundaria)",
        adolescents_desc: "Especialistas en la preparación de los exámenes de Cambridge Assessment English, cubriendo todos los niveles desde los primeros certificados hasta niveles avanzados.",
        adults_title: "Adult Courses",
        adults_desc: "Programas estructurados para superar la educación secundaria, acceder a la universidad o mejorar el perfil laboral. Clases dinámicas y desarrollo rápido de habilidades.",
        speaking_title: "Speaking Classes",
        speaking_desc: "Diseñadas para romper barreras y ganar fluidez. Nuestras sesiones de Speaking se enfocan en la conversación real y dinámica sobre temas de actualidad y role-playing.",
        intensive_title: "Intensive Courses",
        intensive_desc: "Cursos acelerados de preparación de exámenes y refuerzo intensivo para conseguir tu titulación oficial en tiempo récord.",
        footer: "En Tyneside English Academy, no solo enseñamos un idioma; construimos un camino sólido hacia la fluidez global.",
        cta: "Solicita Información"
      },
      about: {
        title: "Sobre nosotros",
        p1: "Situados en la céntrica Plaza Tomás y Valiente de Puente Tocinos, somos mucho más que una academia de idiomas; somos tu conexión directa con la cultura y la excelencia académica británica.",
        p2: "Inspirados en la histórica y trabajadora región de Tyneside (noreste de Inglaterra), basamos nuestra enseñanza en cuatro pilares: Rigor, Integridad, Comunidad y Autenticidad.",
        p3: "Nuestra misión es proporcionar una educación de inglés de la más alta calidad, superando los estándares tradicionales."
      },
      methodology: {
        title: "El Método Tyneside: Aprende, Aplica, Domina",
        desc: "No creemos en las clases masificadas ni en la memorización pasiva. El Método Tyneside está diseñado para garantizar la competencia lingüística aplicada.",
        m1_title: "Grupos Reducidos",
        m1_desc: "Atención verdaderamente personalizada que las grandes instituciones no pueden ofrecer.",
        m2_title: "Inmersión Práctica",
        m2_desc: "Clases dinámicas enfocadas en la comunicación real, perdiendo el miedo a hablar desde el primer día.",
        m3_title: "Profesores Expertos",
        m3_desc: "Equipo docente altamente cualificado, asegurando un estándar de inglés nativo y profesional.",
        m4_title: "Seguimiento Continuo",
        m4_desc: "Evaluaciones regulares y tutorías para garantizar que la inversión en educación se traduzca en resultados medibles."
      },
      examprep: {
        title: "Acredita tu Nivel: Preparación de Exámenes Oficiales",
        p1: "Tu esfuerzo merece reconocimiento oficial. En Tyneside English Academy somos especialistas en preparar a nuestros alumnos para superar con éxito las certificaciones internacionales más demandadas.",
        p2: "Te entrenamos con simulacros reales, estrategias de examen y refuerzo específico para exámenes de Cambridge. No solo te enseñamos inglés; te enseñamos a aprobar.",
        cta: "Haz tu prueba de nivel gratuita",
        details: "Más detalles",
        stat_pass: "Aprobados · últimos 2 años",
        stat_years: "Años enseñando inglés",
        stat_students: "Alumnos certificados"
      },
      testimonials: {
        badge: "Lo que dicen las familias",
        title: "Reseñas reales de nuestras familias",
        desc: "Opiniones publicadas por familias y alumnos en nuestro perfil de Google. Sin editar.",
        rating_count_one: "{{count}} reseña en Google",
        rating_count_other: "{{count}} reseñas en Google",
        cta: "Ver todas las reseñas en Google"
      },
      services: {
        title: "Servicios para Empresas y Colegios",
        f_title: "Cursos FUNDAE (Para Empresas)",
        f_desc1: "Impulsa tu competitividad a coste cero.",
        f_desc2: "Diseñamos e impartimos formación en inglés técnico y comercial para empresas de Murcia. Ideal para los sectores de exportación, logística y tecnología.",
        f_desc3: "Cursos hasta 100% bonificables a través de FUNDAE.",
        s_title: "Servicios Escolares y Extraescolares",
        s_desc: "Colaboramos con colegios y AMPAS locales para llevar la calidad Tyneside a las aulas de educación pública y concertada, enriqueciendo la jornada escolar de los alumnos.",
        o_title: "One2One (Clases Particulares)",
        o_desc: "Flexibilidad total y exclusividad. Clases privadas adaptadas 100% a tu ritmo, horario y necesidades específicas.",
        t_title: "Traducción e Interpretación",
        t_desc: "Servicios profesionales de traducción de documentos técnicos, comerciales, webs y asistencia de interpretación para reuniones internacionales de empresas murcianas.",
        cta: "MÁS INFORMACIÓN"
      },
      trips: {
        title: "Inmersión Total: Viajes y Campamentos",
        p1: "La verdadera asimilación de un idioma ocurre cuando lo vives.",
        p2: "En colaboración directa con International House Newcastle, desarrollamos campamentos de verano (Summer Camps) y viajes de inmersión lingüística en el extranjero diseñados para vivir el idioma.",
        p3: "Una oportunidad única para conectar con la herencia británica, hacer amigos y practicar el inglés 24/7 en un entorno estimulante y supervisado."
      },
      blog: {
        title: "Tyneside News: Cultura, Consejos y Comunidad",
        badge: "Blog & Novedades",
        cta: "Leer el Blog Completo",
        read_more: "Leer artículo completo",
        modal_cta_title: "¿Quieres certificar tu nivel de inglés?",
        modal_cta_desc: "Realiza nuestra prueba de nivel adaptativa online y conoce tu puntuación CEFR (A1-C2) en menos de 15 minutos.",
        modal_cta_button: "Ir a la Prueba de Nivel"
      },
      contact: {
        badge: "Inscripciones y Consultas",
        title: "Únete a la Comunidad Tyneside",
        desc: "¿Listo para dar el siguiente paso? Contáctanos hoy mismo o visítanos en nuestras instalaciones.",
        address: "Plaza Tomás y Valiente 6, Puente Tocinos, Murcia.",
        phone: "605 661 212",
        email: "info@tynesideacademy.com",
        form_name: "Nombre Completo",
        form_phone: "Teléfono",
        form_email: "Correo Electrónico",
        form_course: "¿En qué curso estás interesado?",
        form_gdpr: "He leído y acepto la <1>Política de Privacidad</1> y consiento el tratamiento de mis datos.",
        submit: "ENVIAR MENSAJE",
        sending: "Enviando...",
        success_title: "¡Mensaje Enviado con Éxito!",
        success_desc: "Gracias por contactar con Tyneside English Academy. Nuestro equipo académico se pondrá en contacto contigo muy pronto.",
        send_another: "Enviar otro mensaje",
        error_title: "No hemos podido enviar tu mensaje",
        error_desc: "Ha fallado la conexión. Vuelve a intentarlo o llámanos directamente al 605 661 212.",
        retry: "Reintentar",
        label_address: "Dirección",
        label_phone: "Teléfono / WhatsApp",
        label_email: "Email",
        map_consent_notice: "El mapa se carga desde Google y solo lo activamos con tu permiso.",
        map_consent_button: "Cargar mapa",
        courses: {
          yl36: "Young Learners (3-6 años)",
          yle612: "YLE Primaria (6-12 años)",
          teens: "Cambridge Adolescentes (ESO/Bachillerato)",
          adults: "Cambridge Adultos (B1, B2, C1, C2)",
          fundae: "FUNDAE / Formación Empresas",
          one2one: "Clases Particulares One2One",
          other: "Otro"
        }
      },
      levelTest: {
        badge: "Evaluación de Nivel CEFR",
        header_title: "Prueba de Nivel Adaptativa",
        header_subtitle: "Bienvenido a Tyneside English Academy. Introduce tus datos para iniciar la evaluación adaptativa de 50 preguntas.",
        form_name: "Nombre Completo *",
        form_email: "Correo Electrónico *",
        form_postal: "Código Postal *",
        form_phone: "Teléfono (Opcional)",
        form_address: "Dirección (Opcional)",
        start_btn: "Comenzar Evaluación",
        progress: "Progreso",
        question_of: "Pregunta {{current}} de 50",
        time: "Tiempo",
        processing_title: "Procesando tus resultados...",
        processing_desc: "Analizando matriz CEFR y generando informe...",
        results_title: "Evaluación Completada",
        results_subtitle: "Tus respuestas han sido evaluadas según el marco común europeo de referencia (CEFR).",
        cefr_evaluated: "Nivel CEFR Evaluado",
        scale_score: "Cambridge Scale Score",
        recommended_course: "Curso Recomendado para Ti:",
        download_cert: "Descargar Certificado Oficial (PDF)",
        email_saved: "✓ Evaluación guardada y enviada a la secretaría académica.",
        email_completed: "✓ Evaluación completada con éxito.",
        rec_A1_name: "Curso Young Learners / Iniciación A1",
        rec_A1_desc: "Ideal para afianzar bases gramaticales y soltura léxica.",
        rec_A2_name: "Preparación Cambridge A2 Key",
        rec_A2_desc: "Perfecto para consolidar fluidez elemental y estructura oficial.",
        rec_B1_name: "Preparación Cambridge B1 Preliminary",
        rec_B1_desc: "Consolida tu nivel intermedio con estrategias reales de examen.",
        rec_B2_name: "Preparación Cambridge B2 First (Intensivo)",
        rec_B2_desc: "Programa estrella para lograr tu acreditación oficial B2.",
        rec_C1_name: "Preparación Cambridge C1 Advanced",
        rec_C1_desc: "Dominio profesional del idioma con rigor británico.",
        rec_C2_name: "Cambridge C2 Proficiency / Business One2One",
        rec_C2_desc: "Máximo nivel académico y competencia nativa bilingüe.",
        rec_default_name: "Curso Adaptado Tyneside",
        rec_default_desc: "Asesoramiento personalizado en nuestra academia."
      },
      resources: {
        title: "Recursos y Documentación",
        test: "Prueba de Nivel Online Gratuita",
        material: "Material de Examen",
        calendar: "Calendario Escolar 2026/27",
        gdpr: "Formularios de Autorización y Privacidad (RGPD/LOPDGDD)"
      },
      footer: {
        rights: "Tyneside English Academy. Todos los derechos reservados."
      },
      legal: {
        section_title: "Información legal",
        aviso_title: "Aviso Legal",
        privacidad_title: "Política de Privacidad",
        cookies_title: "Política de Cookies",
        last_updated: "Última actualización",
        draft_banner: "Borrador pendiente de revisión por asesoría jurídica. Este texto es orientativo, describe cómo funciona el sitio hoy y no sustituye el asesoramiento de un profesional. Los datos marcados como [PENDIENTE] deben confirmarse antes de publicar.",
        other_pages: "Otras páginas legales"
      },
      cookie: {
        aria: "Aviso de cookies",
        message: "Usamos almacenamiento local para recordar tu elección. Con tu permiso, también cargamos tipografías de Google y monitorización de errores. Nada de esto se activa hasta que aceptas.",
        more: "Más información",
        accept: "Aceptar todo",
        essential: "Solo lo imprescindible"
      }
    }
  },
  en: {
    translation: {
      nav: {
        courses: "Courses",
        methodology: "Methodology",
        exams: "Exams",
        services: "Services",
        blog: "Blog",
        contact: "Contact",
        enroll: "ENROLL NOW",
        virtualClassroom: "Virtual Classroom",
        call: "Call",
        whatsapp: "WhatsApp"
      },
      hero: {
        connect: "CONNECT.",
        grow: "GROW.",
        learn: "LEARN.",
        h1: "Authentic British education. Real results in the heart of Murcia.",
        h2: "Master English with Tyneside English Academy",
        p1: "From age 3 to Cambridge C2 mastery, Tyneside English Academy offers solutions for every age and level.",
        p2: "Our mission is to provide learning solutions adapted to every stage of development and to various academic and professional needs.",
        cta: "Free Level Test"
      },
      courses: {
        title: "Our Educational Offerings",
        explorers_title: "Tyneside Explorers (Ages 3 to 5)",
        explorers_desc: "Dynamic and playful classes that introduce the language naturally and enjoyably, essential for a bilingual future.",
        yl_title: "Young Learners (Primary)",
        yl_desc: "We consolidate grammar, reading, and writing while maintaining focus on conversational fluency. We introduce students to official exam formats.",
        adolescents_title: "Adolescents (Secondary)",
        adolescents_desc: "Specialists in Cambridge Assessment English exam preparation, covering all levels from preliminary certificates to advanced levels.",
        adults_title: "Adult Courses",
        adults_desc: "Structured programs for higher education, career advancement, or personal growth. Dynamic classes focused on real-world communication.",
        speaking_title: "Speaking Classes",
        speaking_desc: "Designed to break barriers and gain fluency. Our Speaking sessions focus on real, dynamic conversation: current affairs debates and role-playing.",
        intensive_title: "Intensive Courses",
        intensive_desc: "Accelerated exam preparation and immersion courses to achieve your official certification in record time.",
        footer: "At Tyneside English Academy, we don't just teach a language; we build a solid path to global fluency.",
        cta: "Request Information"
      },
      about: {
        title: "About Us",
        p1: "Located in the central Plaza Tomás y Valiente in Puente Tocinos, we are much more than a language academy; we are your direct connection to British culture and academic excellence.",
        p2: "Inspired by the historic and hardworking region of Tyneside (northeast England), we base our teaching on four pillars: Rigor, Integrity, Community, and Authenticity.",
        p3: "Our mission is to provide the highest quality English education, exceeding traditional standards."
      },
      methodology: {
        title: "The Tyneside Method: Learn, Apply, Master",
        desc: "We don't believe in overcrowded classes or passive memorization. The Tyneside Method is designed to ensure applied linguistic competence.",
        m1_title: "Small Groups",
        m1_desc: "Truly personalized attention that large institutions cannot offer.",
        m2_title: "Practical Immersion",
        m2_desc: "Dynamic classes focused on real communication, losing the fear of speaking from day one.",
        m3_title: "Expert Teachers",
        m3_desc: "Highly qualified teaching team, ensuring a native and professional English standard.",
        m4_title: "Continuous Monitoring",
        m4_desc: "Regular assessments and tutoring to ensure that the investment in education translates into measurable results."
      },
      examprep: {
        title: "Certify Your Level: Official Exam Preparation",
        p1: "Your effort deserves official recognition. At Tyneside English Academy, we are specialists in preparing our students to successfully pass the most demanded international certifications.",
        p2: "We train you with real mock exams, exam strategies, and specific reinforcement for Cambridge exams. We don't just teach you English; we teach you how to pass.",
        cta: "Take your free level test",
        details: "More details",
        stat_pass: "Pass rate · last 2 years",
        stat_years: "Years teaching English",
        stat_students: "Certified students"
      },
      testimonials: {
        badge: "What families say",
        title: "Real reviews from our families",
        desc: "Reviews published by families and students on our Google profile. Unedited.",
        rating_count_one: "{{count}} Google review",
        rating_count_other: "{{count}} Google reviews",
        cta: "Read every review on Google"
      },
      services: {
        title: "Services for Businesses & Schools",
        f_title: "FUNDAE Courses (For Companies)",
        f_desc1: "Boost your competitiveness at zero cost.",
        f_desc2: "We design and deliver technical and commercial English training for companies in Murcia. Ideal for the export, logistics, and technology sectors.",
        f_desc3: "Courses up to 100% subsidized through FUNDAE.",
        s_title: "School and Extracurricular Services",
        s_desc: "We collaborate with local schools and PTAs to bring Tyneside quality to public and charter school classrooms, enriching the students' school day.",
        o_title: "One2One (Private Classes)",
        o_desc: "Total flexibility and exclusivity. Private classes 100% adapted to your pace, schedule, and specific needs.",
        t_title: "Translation & Interpretation",
        t_desc: "Professional translation services for technical and commercial documents, websites, and interpretation assistance for international meetings of Murcian companies.",
        cta: "MORE INFORMATION"
      },
      trips: {
        title: "Total Immersion: Trips and Camps",
        p1: "The true assimilation of a language happens when you live it.",
        p2: "In direct collaboration with International House Newcastle, we develop Summer Camps and language immersion trips abroad designed to experience the language.",
        p3: "A unique opportunity to connect with British heritage, make friends, and practice English 24/7 in a stimulating and supervised environment."
      },
      blog: {
        title: "Tyneside News: Culture, Tips, and Community",
        badge: "Blog & News",
        cta: "Read Full Blog",
        read_more: "Read full article",
        modal_cta_title: "Do you want to certify your English level?",
        modal_cta_desc: "Take our online adaptive placement test and find out your CEFR score (A1-C2) in under 15 minutes.",
        modal_cta_button: "Go to Level Test"
      },
      contact: {
        badge: "Enrollment & Inquiries",
        title: "Join the Tyneside Community",
        desc: "Ready to take the next step? Contact us today or visit our facilities.",
        address: "Plaza Tomás y Valiente 6, Puente Tocinos, Murcia.",
        phone: "605 661 212",
        email: "info@tynesideacademy.com",
        form_name: "Full Name",
        form_phone: "Phone",
        form_email: "Email Address",
        form_course: "Which course are you interested in?",
        form_gdpr: "I have read and accept the <1>Privacy Policy</1> and consent to the processing of my data.",
        submit: "SEND MESSAGE",
        sending: "Sending...",
        success_title: "Message Sent Successfully!",
        success_desc: "Thank you for contacting Tyneside English Academy. Our academic team will get in touch with you shortly.",
        send_another: "Send another message",
        error_title: "We couldn't send your message",
        error_desc: "The connection failed. Please try again, or call us directly on 605 661 212.",
        retry: "Try again",
        label_address: "Address",
        label_phone: "Phone / WhatsApp",
        label_email: "Email",
        map_consent_notice: "The map loads from Google and we only enable it with your permission.",
        map_consent_button: "Load map",
        courses: {
          yl36: "Young Learners (Ages 3-6)",
          yle612: "YLE Primary (Ages 6-12)",
          teens: "Cambridge Teens (Secondary)",
          adults: "Cambridge Adults (B1, B2, C1, C2)",
          fundae: "FUNDAE / Business Training",
          one2one: "One2One Private Classes",
          other: "Other"
        }
      },
      levelTest: {
        badge: "CEFR Placement Assessment",
        header_title: "Adaptive Level Test",
        header_subtitle: "Welcome to Tyneside English Academy. Enter your information to begin the 50-question adaptive assessment.",
        form_name: "Full Name *",
        form_email: "Email Address *",
        form_postal: "Postal Code *",
        form_phone: "Phone (Optional)",
        form_address: "Address (Optional)",
        start_btn: "Start Assessment",
        progress: "Progress",
        question_of: "Question {{current}} of 50",
        time: "Time",
        processing_title: "Processing your results...",
        processing_desc: "Analyzing CEFR matrix and generating report...",
        results_title: "Assessment Completed",
        results_subtitle: "Your answers have been evaluated according to the Common European Framework of Reference for Languages (CEFR).",
        cefr_evaluated: "Assessed CEFR Level",
        scale_score: "Cambridge Scale Score",
        recommended_course: "Recommended Course for You:",
        download_cert: "Download Official Certificate (PDF)",
        email_saved: "✓ Assessment saved and sent to academic administration.",
        email_completed: "✓ Assessment completed successfully.",
        rec_A1_name: "Young Learners / Starter A1 Course",
        rec_A1_desc: "Ideal for solidifying grammar foundations and lexical fluency.",
        rec_A2_name: "Cambridge A2 Key Preparation",
        rec_A2_desc: "Perfect for consolidating elementary fluency and official exam structure.",
        rec_B1_name: "Cambridge B1 Preliminary Preparation",
        rec_B1_desc: "Consolidate your intermediate level with real exam strategies.",
        rec_B2_name: "Cambridge B2 First Preparation (Intensive)",
        rec_B2_desc: "Flagship program to achieve your official B2 certification.",
        rec_C1_name: "Cambridge C1 Advanced Preparation",
        rec_C1_desc: "Professional language mastery with British academic rigor.",
        rec_C2_name: "Cambridge C2 Proficiency / Business One2One",
        rec_C2_desc: "Highest academic level and native bilingual competence.",
        rec_default_name: "Tyneside Tailored Course",
        rec_default_desc: "Personalized advice at our academy."
      },
      resources: {
        title: "Resources & Documentation",
        test: "Free Online Level Test",
        material: "Exam Material",
        calendar: "School Calendar 2026/27",
        gdpr: "Authorisation & Privacy Forms (GDPR/LOPDGDD)"
      },
      footer: {
        rights: "Tyneside English Academy. All rights reserved."
      },
      legal: {
        section_title: "Legal information",
        aviso_title: "Legal Notice",
        privacidad_title: "Privacy Policy",
        cookies_title: "Cookie Policy",
        last_updated: "Last updated",
        draft_banner: "Draft pending review by legal counsel. This text is indicative, describes how the site works today and is not a substitute for professional advice. Fields marked [PENDIENTE] must be confirmed before publication.",
        other_pages: "Other legal pages"
      },
      cookie: {
        aria: "Cookie notice",
        message: "We use local storage to remember your choice. With your permission we also load Google Fonts and error monitoring. None of this runs until you accept.",
        more: "Learn more",
        accept: "Accept all",
        essential: "Essential only"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Spanish as default
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
