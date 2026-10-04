/* =====================================================================
   datos.js — TODO el contenido de la página está en este archivo.

   Cómo editar:
   - Cambia solo los textos que están entre comillas "así".
   - Respeta las comas al final de cada línea y de cada bloque { ... }.
   - Para ocultar algo, déjalo vacío: "" o [] (una sección sin contenido
     no se muestra en la página).
   - Para agregar un proyecto o un trabajo, copia un bloque { ... } completo,
     pégalo debajo del último (separado por una coma) y cambia los textos.
   - No hace falta tocar index.html ni los CSS.

   Marcas:
   - [BORRADOR]: texto propuesto que todavía no está aprobado.
   ===================================================================== */

const DATOS = {

  /* ---------- Perfil (parte de arriba de la página) ---------- */
  perfil: {
    nombre: "Simón Aspée",
    // Cada parte separada por " · " se muestra en su propia línea.
    subtitulo: "Estudiante de Ingeniería Civil Informática · En camino al desarrollo móvil nativo (Kotlin/Android y Swift/iOS)",
    ubicacion: "Santiago, Chile", // Solo ciudad y país. Nunca la dirección.

    // Foto: en null no se muestra. Debe pesar 200 KB o menos.
    foto: "assets/foto.jpg",

    // CV en PDF: en null el botón "Descargar CV" no aparece.
    // Si actualizas la página, actualiza también el PDF (y viceversa).
    cvPdf: "assets/cv-simon-aspee.pdf"
  },

  /* ---------- Distintivo de disponibilidad ---------- */
  // mostrar: true lo muestra, false lo oculta (por ejemplo, después de la práctica).
  disponibilidad: {
    mostrar: true,
    texto: "Disponible para práctica profesional · enero–febrero 2027"
  },

  /* ---------- Contacto ---------- */
  contacto: {
    correo: "simonaspee@gmail.com",
    telefono: "+56 9 7558 0599",
    whatsapp: {
      numero: "56975580599", // Sin "+" ni espacios: código de país + número.
      mensaje: "Hola Simón, vi tu CV web y me gustaría conversar sobre una práctica."
    },
    linkedin: "https://www.linkedin.com/in/sim%C3%B3n-asp%C3%A9e-178358257/",
    github: "https://github.com/Simon-Aspee"
  },

  /* ---------- Datos destacados (3 datos cortos y reales) ----------
     icono: uno de estos → "libro", "globo", "maletin", "codigo", "telefono".
            Usa null si no quieres ícono. */
  destacados: [
    { icono: "libro", texto: "3.er año de Ingeniería Civil Informática (USS)" },
    { icono: "globo", texto: "Inglés B1 (certificado TOEFL)" },
    { icono: "maletin", texto: "Estudiando y trabajando desde 2021" }
  ],

  /* ---------- Sobre mí (un texto por párrafo) ---------- */
  sobreMi: [
    "Estudio tercer año de Ingeniería Civil Informática en la Universidad San Sebastián. Mi meta es el desarrollo móvil nativo: hoy estoy consolidando Kotlin para pasar a Android y, más adelante, a iOS con Swift.",
    "Aprendo construyendo. Rehíce desde cero la tienda web de Saudino, un negocio real con clientes reales, esta vez planificándola y desarrollándola con Claude Code y con una base de datos MySQL en la nube.",
    "Vengo de un liceo técnico con especialidad en Electricidad y trabajo desde 2021 mientras estudio. Me gusta trabajar en equipo y resolver problemas distintos.",
    "Fuera del código: gimnasio y videojuegos."
  ],

  /* ---------- Proyectos ----------
     Campos de cada proyecto:
     - nombre, tipo, estado, contexto, descripcion: textos ("" para omitir).
     - historia: etapas del proyecto, en orden. [] si no tiene.
     - aprendizajes: lista de "Lo que aprendí". [] si no tiene.
     - tecnologias: lista de etiquetas. [] si no tiene.
     - links.demo: link al sitio en vivo, o null.
     - links.codigo: link al repo, o null.
     - links.notaCodigo: texto que se muestra si no hay link al código ("" para nada).
     El primer proyecto de la lista se muestra como destacado. */
  proyectos: [
    {
      nombre: "Saudino",
      tipo: "Tienda de ropa online · proyecto real",
      estado: "En producción",
      contexto: "",
      descripcion: "Tienda web para un negocio real de ropa. Los clientes eligen prendas, arman su pedido y lo envían por WhatsApp.",
      historia: [
        {
          etapa: "Prototipo",
          fecha: "sep. 2025",
          texto: "Primera versión, hecha con ayuda de ChatGPT, sin base de datos y sin planificación previa."
        },
        {
          etapa: "v2",
          fecha: "2026",
          texto: "Rehecha desde cero a partir de un plan y desarrollada con Claude Code (plan mode, subagentes, agent teams y servidores MCP). Base de datos MySQL alojada en la nube con Aiven. Mucho más completa y ordenada."
        }
      ],
      aprendizajes: [
        "Planificar antes de programar.",
        "Diseñar y consultar una base de datos SQL con MySQL.",
        "Conectar el proyecto a una base de datos en la nube (Aiven).",
        "Trabajar con agentes de IA de forma ordenada (Claude Code)."
      ],
      tecnologias: ["MySQL", "Aiven", "Netlify", "Claude Code"],
      links: {
        demo: "https://saudino.netlify.app/",
        codigo: null, // El repo es privado.
        notaCodigo: "Código disponible a pedido"
      }
    },
    {
      nombre: "Plataforma de gestión de devoluciones y residuos farmacéuticos",
      tipo: "Emprendimiento universitario",
      estado: "En desarrollo (fase inicial)",
      contexto: "Proyecto en equipo (3 integrantes) del Taller de Emprendimiento de la Universidad San Sebastián.",
      descripcion: "Plataforma B2B (SaaS) para que droguerías y distribuidores registren y sigan las devoluciones de medicamentos que reciben de distintas farmacias. Cada caso queda en un expediente digital con productos, lotes, guía, documentos, responsable y estado.",
      historia: [
        {
          etapa: "Idea inicial",
          fecha: "",
          texto: "Partimos pensando en una herramienta para farmacias que gestionara medicamentos por vencer y residuos."
        },
        {
          etapa: "Validación en terreno",
          fecha: "sep. 2026",
          texto: "Visitamos farmacias en Providencia y documentamos cuatro entrevistas. Ya tenían rutas de devolución establecidas, así que cambiamos el foco a droguerías y distribuidores, que reciben devoluciones de varias farmacias."
        },
        {
          etapa: "MVP conceptual",
          fecha: "sep. 2026",
          texto: "Prototipo visual (no funcional) con tres vistas: registro de devoluciones, listado de casos y seguimiento del expediente."
        }
      ],
      aprendizajes: [
        "Validar el problema con usuarios reales antes de construir.",
        "Cambiar el segmento cuando la evidencia no respalda la hipótesis inicial.",
        "Distinguir una devolución de un residuo: no todo medicamento devuelto se gestiona como residuo."
      ],
      tecnologias: [],
      links: {
        demo: null,
        codigo: null,
        notaCodigo: ""
      }
    }
  ],

  /* ---------- Experiencia ----------
     lugar: "" si no corresponde.
     logo: ruta a una imagen cuadrada en assets/logos/, o null.
           Si es null (o la imagen no carga) se muestra una insignia con iniciales. */
  experiencia: [
    {
      cargo: "Tutor particular de matemáticas",
      lugar: "",
      fechas: "oct. 2025 – actualidad",
      descripcion: "Clases particulares de matemáticas a una estudiante escolar, con compromiso constante. Sus notas han mejorado desde que empezamos.",
      logo: null
    },
    {
      cargo: "Práctica técnica",
      lugar: "AZA | Acero Sostenible",
      fechas: "feb. 2023 – nov. 2023",
      descripcion: "Práctica técnica del liceo (casi un año) como electricista en mantenimiento de motores.",
      logo: "assets/logos/aza.png"
    }
  ],

  /* ---------- Otros trabajos (formato compacto, una línea cada uno) ----------
     logo: igual que en Experiencia (ruta o null). */
  otrosTrabajos: {
    titulo: "Trabajos part-time de fin de semana, mientras estudiaba",
    items: [
      { lugar: "Mass", cargo: "Cajero, bodeguero y limpieza", fechas: "ene. 2026 – mar. 2026", logo: "assets/logos/mass.png" },
      { lugar: "KFC", cargo: "Cajero y limpieza", fechas: "mar. 2025 – ene. 2026", logo: "assets/logos/kfc.png" },
      { lugar: "Decosméticos", cargo: "Cajero y bodeguero", fechas: "oct. 2021 – may. 2024", logo: "assets/logos/decosmeticos.png" }
    ]
  },

  /* ---------- Educación ----------
     logo: igual que en Experiencia (ruta o null). */
  educacion: [
    {
      institucion: "Universidad San Sebastián",
      titulo: "Ingeniería Civil Informática (3.er año)",
      fechas: "mar. 2024 – actualidad",
      logo: "assets/logos/uss.png"
    },
    {
      institucion: "Liceo Industrial Chileno Alemán",
      titulo: "Enseñanza media técnico-profesional, especialidad Electricidad",
      fechas: "2020 – 2023",
      logo: "assets/logos/lichan.png"
    }
  ],

  /* ---------- Habilidades (sin niveles ni porcentajes) ---------- */
  habilidades: [
    { grupo: "Lenguajes", items: ["Python", "Kotlin", "SQL"] },
    { grupo: "Conocimientos básicos", items: ["JavaScript", "Java", "C"] },
    { grupo: "Bases de datos", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { grupo: "Herramientas", items: ["Git y GitHub", "VS Code", "IntelliJ IDEA", "Netlify", "Aiven"] },
    { grupo: "Desarrollo asistido por IA", items: ["Claude Code (plan mode, subagentes, MCP)"] },
    { grupo: "Próximo paso", items: ["Android con Jetpack Compose → iOS con Swift/SwiftUI"] },
    { grupo: "Idiomas", items: ["Español nativo", "Inglés B1 (certificado TOEFL)"] }
  ],

  /* ---------- Cierre de la página (llamado a la acción) ---------- */
  cierreContacto: {
    titulo: "¿Conversamos?",
    texto: "Estoy buscando práctica profesional para enero–febrero 2027. Escríbeme por WhatsApp o por correo."
  }
};
