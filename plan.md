# Plan — CV web de Simón Aspée

> Documento para Claude Code. Léelo completo antes de empezar.
> Las reglas permanentes del proyecto están en `CLAUDE.md`. Este archivo describe **qué** construir, **con qué contenido** y **en qué orden**.
> A medida que completes tareas, marca los checkboxes de la sección 7.

---

## 1. Objetivo

Página web estática, de una sola página, que funciona como CV y portafolio de Simón Aspée.

- **Para qué:** postular a práctica profesional en Chile (enero–febrero 2027). Desde octubre 2026 Simón empieza a contactar empresas.
- **Por qué una página y no solo el PDF:** se ve más profesional, muestra proyectos reales con links y facilita el contacto.
- **Mantenimiento:** Simón clona el repo, edita **un solo archivo de datos** (`js/datos.js`), hace commit y push (Claude Code puede hacerlo desde la terminal) y Netlify publica solo.

## 2. Destinatarios

- **Principal:** reclutadores, encargados de prácticas y equipos técnicos de empresas chilenas. Revisan rápido y muchas veces desde el celular. El link llega por LinkedIn, correo, el portal de prácticas de la USS y ferias laborales.
- **Secundario:** Simón, que mantiene la página. Claude Code puede hacer commit y push desde la terminal, siempre mostrándole el título y la descripción del commit.
- **Futuro:** empresas remotas o internacionales (versión en inglés, ver fase futura).

## 3. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Tecnología | HTML, CSS y JavaScript puros. Sin frameworks, sin npm, sin build, sin backend. |
| Repo | Público en GitHub (cuenta `Simon-Aspee`). Nombre sugerido: `cv-web`. |
| Hosting | Netlify gratis. Dirección: `simon-aspee.netlify.app` (si está tomada, Simón elige otra). |
| Idioma | Español de Chile. Inglés queda para una fase futura. |
| Estilo | Modo oscuro, minimalista, contenido en tarjetas, una columna centrada. |
| Referencia visual | moure.dev: tomar la sensación (limpio, tarjetas, íconos sociales arriba). No copiar su marca, logo ni textos. |
| Color de acento | El rojo del CV de Simón (aprox. `#C8444F`). Es de prueba: debe poder cambiarse en una línea. |
| Responsive | Mobile-first. Tiene que verse bien desde 360 px hasta pantallas grandes. |
| Contenido editable | Todo el contenido vive en `js/datos.js`. |
| Contacto | Correo, teléfono, botón de WhatsApp, LinkedIn y GitHub. Ubicación solo "Santiago, Chile". **Sin dirección.** |
| CV en PDF | Botón de descarga a `assets/cv-simon-aspee.pdf`. El PDF lo hace Simón aparte, en Canva o Word. |
| Foto | Sí, la misma del CV, en la parte de arriba. |
| Habilidades | Sin barras, porcentajes ni niveles. |

## 4. Estructura de la página (en este orden)

1. **Hero:**
   - Foto, nombre y subtítulo.
   - Distintivo de disponibilidad.
   - Botones "Descargar CV" y "WhatsApp".
   - Íconos de GitHub, LinkedIn y correo.
2. **Datos destacados:** 3 datos cortos y reales.
3. **Sobre mí.**
4. **Proyectos.**
5. **Experiencia.**
6. **Educación.**
7. **Habilidades.**
8. **Contacto:** cierre con llamado a la acción (WhatsApp y correo).
9. **Footer:** © 2026 Simón Aspée.

No hace falta un menú complejo. Como mucho, anclas simples a las secciones en escritorio.

---

## 5. Contenido (inputs)

Esta sección es la fuente para escribir `js/datos.js`. Hay dos marcas:

- **[BORRADOR]:** texto propuesto. Hay que mostrárselo a Simón para que lo apruebe antes de darlo por final.
- **[PENDIENTE]:** dato que falta. Hay que preguntárselo a Simón. Nunca inventarlo.

### 5.1 Identidad

- **Nombre:** Simón Aspée
- **Subtítulo:** Estudiante de Ingeniería Civil Informática · En camino al desarrollo móvil nativo (Kotlin/Android y Swift/iOS)
- **Distintivo:** Disponible para práctica profesional · enero–febrero 2027
- **Ubicación:** Santiago, Chile
- **Foto:** `assets/foto.jpg` (la aporta Simón)

### 5.2 Contacto

- **Correo:** simonaspee@gmail.com
- **Teléfono:** +56 9 7558 0599
- **WhatsApp:** `https://wa.me/56975580599`, con un mensaje predefinido. Por ejemplo: "Hola Simón, vi tu CV web y me gustaría conversar sobre una práctica."
- **LinkedIn:** https://www.linkedin.com/in/sim%C3%B3n-asp%C3%A9e-178358257/
- **GitHub:** https://github.com/Simon-Aspee

### 5.3 Datos destacados (aprobado, 3 oct. 2026)

Simón eligió estos 3:

- 3.er año de Ingeniería Civil Informática (USS)
- Inglés B1 (certificado TOEFL)
- Estudiando y trabajando desde 2021

Quedó fuera: "Especialidad técnica en Electricidad" (sigue en Educación y en el Sobre mí).

### 5.4 Sobre mí (aprobado, 3 oct. 2026)

> Estudio tercer año de Ingeniería Civil Informática en la Universidad San Sebastián. Mi meta es el desarrollo móvil nativo: hoy estoy consolidando Kotlin para pasar a Android y, más adelante, a iOS con Swift.
>
> Aprendo construyendo. Rehíce desde cero la tienda web de Saudino, un negocio real con clientes reales, esta vez planificándola y desarrollándola con Claude Code y con una base de datos MySQL en la nube.
>
> Vengo de un liceo técnico con especialidad en Electricidad y trabajo desde 2021 mientras estudio. Me gusta trabajar en equipo y resolver problemas distintos.

> Fuera del código: gimnasio y videojuegos.

- La línea de hobbies se incluye como último párrafo (decisión de Simón).

### 5.5 Proyectos

#### Saudino: tienda de ropa online (proyecto real)

- **Estado:** En producción.
- **Link en vivo:** https://saudino.netlify.app/
- **Código:** el repo es privado. Mostrar "Código disponible a pedido".
- **Descripción:** Tienda web para un negocio real de ropa. Los clientes eligen prendas, arman su pedido y lo envían por WhatsApp.
- **Historia** (mostrar como una mini línea de tiempo dentro de la tarjeta):
  - **Prototipo · sep. 2025:** primera versión, hecha con ayuda de ChatGPT, sin base de datos y sin planificación previa. **No enlazar el prototipo.**
  - **v2 · 2026:** rehecha desde cero a partir de un plan y desarrollada con Claude Code (plan mode, subagentes, agent teams y servidores MCP). Base de datos MySQL alojada en la nube con Aiven. Mucho más completa y ordenada.
- **Lo que aprendí (aprobado, 3 oct. 2026):**
  - Planificar antes de programar.
  - Diseñar y consultar una base de datos SQL con MySQL.
  - Conectar el proyecto a una base de datos en la nube (Aiven).
  - Trabajar con agentes de IA de forma ordenada (Claude Code).
- **Tecnologías:** MySQL, Aiven, Netlify y Claude Code.
  - **[PENDIENTE]** Con qué está hecho el frontend, cómo se conecta a la base de datos (¿Netlify Functions u otra cosa?) y si tiene un panel para que el dueño suba productos. Por ahora se dejan solo las 4 tecnologías de arriba (decisión de Simón, 3 oct. 2026).

#### Plataforma de gestión de devoluciones y residuos farmacéuticos (emprendimiento universitario)

- **Estado:** En desarrollo (fase inicial).
- **Contexto:** proyecto en equipo del Taller de Emprendimiento de la Universidad San Sebastián.
- **Descripción [BORRADOR]:** Plataforma para gestionar devoluciones y residuos de medicamentos, enfocada en droguerías y distribuidoras y en el proceso ante el ISP.
- **Sin link.**
- **Se muestra** con la descripción [BORRADOR], sin nombre ni rol (decisión de Simón, 3 oct. 2026).
- **[PENDIENTE]:**
  - Nombre del proyecto, si tiene.
  - Rol de Simón en el equipo.
  - Cuánto detalle se puede mostrar públicamente. Conviene confirmarlo con el equipo.

### 5.6 Experiencia

1. **Tutor particular de matemáticas** · oct. 2025 – actualidad
   - Clases particulares de matemáticas a una estudiante escolar, con compromiso constante. Sus notas han mejorado desde que empezamos.
   - **Sin nombre ni datos de la alumna.**
2. **AZA | Acero Sostenible** · feb. 2023 – nov. 2023
   - Práctica técnica del liceo (casi un año) como electricista en mantenimiento de motores.
3. **Trabajos part-time de fin de semana, mientras estudiaba.** Formato compacto, una línea cada uno:
   - Mass · Cajero, bodeguero y limpieza · ene. 2026 – mar. 2026
   - KFC · Cajero y limpieza · mar. 2025 – ene. 2026
   - Decosméticos · Cajero y bodeguero · oct. 2021 – may. 2024

### 5.7 Educación

- **Universidad San Sebastián:** Ingeniería Civil Informática · mar. 2024 – actualidad (3.er año).
- **Liceo Industrial Chileno Alemán:** Enseñanza media técnico-profesional, especialidad Electricidad · 2020 – 2023.
- **No incluir enseñanza básica.**

### 5.8 Habilidades (sin niveles)

- **Lenguajes:** Python, Kotlin, SQL
- **Conocimientos básicos:** JavaScript, Java, C
- **Bases de datos:** MySQL, PostgreSQL, MongoDB
- **Herramientas:** Git y GitHub, VS Code, IntelliJ IDEA, Netlify, Aiven
- **Desarrollo asistido por IA:** Claude Code (plan mode, subagentes, MCP)
- **Próximo paso:** Android con Jetpack Compose → iOS con Swift/SwiftUI
- **Idiomas:** Español nativo · Inglés B1 (certificado TOEFL)
- React Native: no se incluye, para que la web coincida con el PDF (decisión de Simón, 3 oct. 2026).

### 5.9 Cierre de contacto (aprobado, 3 oct. 2026)

- **Título:** ¿Conversamos?
- **Texto:** Estoy buscando práctica profesional para enero–febrero 2027. Escríbeme por WhatsApp o por correo.

---

## 6. Archivos a producir (outputs)

```
cv-web/
├── index.html          ← estructura semántica + meta tags (sin textos del CV escritos a mano)
├── css/
│   └── styles.css      ← variables de diseño en :root + estilos
├── js/
│   ├── datos.js        ← TODO el contenido editable (const DATOS = {...})
│   └── main.js         ← lee DATOS y renderiza cada sección
├── assets/
│   ├── foto.jpg        ← la aporta Simón (optimizada a ≤ 200 KB)
│   ├── og-image.jpg    ← 1200×630, para la vista previa al compartir
│   ├── favicon.svg     ← por ejemplo, las iniciales "SA"
│   └── cv-simon-aspee.pdf  ← lo aporta Simón cuando esté listo
├── .gitignore          ← archivos del sistema, de editores y de herramientas (ver CLAUDE.md)
├── README.md           ← qué es + cómo actualizar el contenido
├── CLAUDE.md
└── plan.md
```

**Por qué `datos.js` y no un `.json`:** un JSON se carga con `fetch`, que falla al abrir `index.html` con doble clic (file://). Un objeto global en un `.js` funciona siempre.

Forma sugerida de `datos.js` (puedes ajustarla, pero tiene que quedar fácil de editar a mano y con comentarios):

```js
const DATOS = {
  perfil: { nombre: "", subtitulo: "", ubicacion: "", foto: "assets/foto.jpg", cvPdf: null },
  disponibilidad: { mostrar: true, texto: "" },
  contacto: { correo: "", telefono: "", whatsapp: { numero: "", mensaje: "" }, linkedin: "", github: "" },
  destacados: ["", "", ""],
  sobreMi: ["párrafo 1", "párrafo 2"],
  proyectos: [
    {
      nombre: "", tipo: "", estado: "", descripcion: "",
      historia: [{ etapa: "", fecha: "", texto: "" }],
      aprendizajes: [],
      tecnologias: [],
      links: { demo: "", codigo: null, notaCodigo: "" }
    }
  ],
  experiencia: [{ cargo: "", lugar: "", fechas: "", descripcion: "" }],
  otrosTrabajos: { titulo: "", items: [{ lugar: "", cargo: "", fechas: "" }] },
  educacion: [{ institucion: "", titulo: "", fechas: "" }],
  habilidades: [{ grupo: "", items: [] }]
};
```

---

## 7. Fases de trabajo (flujo paso a paso)

### Fase 0: Preparación (la hace Simón)

- [x] Crear el repo público `cv-web` en GitHub Desktop y clonarlo.
- [x] Copiar `CLAUDE.md` y `plan.md` a la raíz del repo.
- [x] Crear la carpeta `assets/` y poner `foto.jpg`. El PDF puede llegar después.
- [x] Instalar la skill: `npx skills add https://github.com/anthropics/skills --skill frontend-design` (se instaló en `.agents/skills/`, con enlace en `.claude/skills/`, más `skills-lock.json`; Simón decidió subirlos al repo).
- [x] Abrir Claude Code en la carpeta y escribir: *"Lee CLAUDE.md y plan.md. Empieza por la Fase 1 en plan mode."*

### Fase 1: Estructura y contenido

- [x] Crear `.gitignore` **antes del primer commit**. El contenido mínimo está en `CLAUDE.md`. Se actualiza antes de usar cualquier herramienta nueva.
- [x] Crear `index.html` semántico, con los contenedores de cada sección y los meta tags base.
- [x] Crear `js/datos.js` con todo el contenido de la sección 5, comentado para que Simón sepa qué editar.
- [x] Crear `js/main.js`, que renderiza cada sección desde `DATOS`. Una sección vacía no se muestra.
- [x] Verificar que funciona abriendo `index.html` con doble clic.
- [x] Mostrar a Simón los textos [BORRADOR] y resolver con él los [PENDIENTE]. Quedan abiertos: tecnologías de Saudino v2, nombre y rol del proyecto farmacéutico, y el PDF.

### Fase 2: Diseño visual (con la skill frontend-design)

- [ ] Definir la dirección visual dentro de las decisiones de la sección 3.
- [ ] Definir en `:root` las variables CSS de colores, tipografía, espaciados y radios.
- [ ] Diseñar el hero, las tarjetas de proyectos (Saudino con su mini línea de tiempo), la experiencia, la educación, las habilidades y el contacto.
- [ ] Mostrarle el resultado a Simón y pedir feedback antes de pulir.

### Fase 3: Responsive, accesibilidad y animaciones

- [ ] Revisar en 360, 390, 768, 1024 y 1440 px. Que no haya scroll horizontal.
- [ ] Botones y links táctiles de al menos 44 px.
- [ ] Contraste AA, foco visible, `alt` en las imágenes y `lang="es"`.
- [ ] Animaciones sutiles (aparición al hacer scroll, hover suave) que se desactivan con `prefers-reduced-motion`.

### Fase 4: Vista previa al compartir y detalles

- [ ] Meta tags: `title`, `description`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale` es_CL) y Twitter card `summary_large_image`. Todas con la URL absoluta `https://simon-aspee.netlify.app/`.
- [ ] Crear `assets/og-image.jpg` de 1200×630 con foto, nombre y subtítulo. Si no se puede generar, proponerle a Simón cómo hacerla.
- [ ] Crear `favicon.svg`.
- [x] Botón "Descargar CV": si `cvPdf` es `null`, el botón no se muestra.
- [ ] `<noscript>` con nombre, correo y LinkedIn.
- [ ] Crear `README.md` con:
  - Qué es el proyecto.
  - Cómo agregar un proyecto o un trabajo en `datos.js`.
  - Un recordatorio: si actualizas la página, actualiza también el PDF.

### Fase 5: Revisión

- [ ] Lighthouse (modo móvil) con 90 o más en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- [ ] Cero errores en la consola.
- [ ] Todos los links funcionan: WhatsApp abre con el mensaje, correo, LinkedIn, GitHub, Saudino y PDF.
- [ ] Revisar el contenido contra la sección 5:
  - Nada inventado.
  - Sin dirección.
  - Sin datos de la alumna.
  - Sin link al prototipo.
- [ ] Opcional, para practicar: revisión con subagentes en paralelo. Uno revisa accesibilidad y rendimiento, otro compara el contenido con este plan y otro revisa el responsive.

### Fase 6: Publicación (Simón, con guía de Claude Code)

- [ ] Hacer commit y push desde la terminal (Claude Code), mostrándole a Simón el título y la descripción.
- [ ] En Netlify, crear el sitio importando el repo `cv-web` desde GitHub. El build command va vacío y se publica la raíz del repo.
- [ ] Cambiar el nombre del sitio a `simon-aspee`. Si está tomado, elegir otro y actualizar las URLs absolutas de los meta tags.
- [ ] Probar el link en el celular y pegarlo en WhatsApp y LinkedIn para revisar la vista previa.

### Fase futura (no hacer ahora)

- Versión en inglés, pensando en trabajo remoto.
- Agregar el voluntariado y el centro de informática de la universidad cuando ocurran.
- Nuevos proyectos (el primero en Android).
- Dominio propio.
- Después de la práctica, cambiar o apagar el distintivo de disponibilidad (`disponibilidad.mostrar`).

---

## 8. Excepciones y casos límite

- **El PDF todavía no existe:** el botón se oculta (`cvPdf: null`). Nunca dejar un link roto.
- **El nombre `simon-aspee` está tomado en Netlify:** Simón elige otro y se actualizan `og:url` y `og:image`.
- **Una sección queda sin contenido:** no se muestra.
- **JavaScript desactivado:** el `<noscript>` muestra nombre, correo y LinkedIn.
- **Falta un dato:** se le pregunta a Simón. No se rellena con texto genérico.
- **La foto pesa mucho:** se optimiza a 200 KB o menos sin perder nitidez en la cara.

## 9. Criterios de calidad

- Un reclutador entiende en menos de 10 segundos quién es Simón, qué busca y cómo contactarlo.
- Se ve bien y carga rápido en celular.
- Todo lo que dice la página es verdad y Simón lo puede defender en una entrevista.
- Agregar un proyecto o un trabajo es editar solo `datos.js`.
- Lighthouse móvil con 90 o más en las cuatro categorías.
- La vista previa al compartir el link muestra foto, nombre y subtítulo.

### Errores a evitar

- Inventar logros, cifras, tecnologías, fechas o niveles.
- Presentar a Simón como "desarrollador". Es estudiante en camino al desarrollo móvil.
- Mostrar su dirección, datos de la alumna o el link al prototipo de Saudino.
- Barras o porcentajes de habilidades.
- Copiar el logo, los textos o la marca de moure.dev.
- Agregar frameworks, npm, un paso de build o librerías JS externas.
- Animaciones pesadas o que distraigan.
- Usar el rojo para texto pequeño sobre el fondo oscuro, porque no alcanza contraste AA.

## 10. Pendientes y riesgos

**Pendientes (preguntar a Simón durante el desarrollo):**

1. Tecnologías de Saudino v2: frontend, conexión con MySQL y Aiven, y si tiene panel para el dueño. *(Por ahora quedan solo MySQL, Aiven, Netlify y Claude Code.)*
2. ~~Aprobar la sección "Lo que aprendí" de Saudino.~~ Aprobada.
3. Proyecto farmacéutico: nombre, su rol en el equipo y cuánto detalle publicar (confirmarlo con el equipo). *(Por ahora se muestra con la descripción borrador.)*
4. ~~React Native: ¿se incluye o no?~~ No se incluye (así coincide con el PDF).
5. ~~Aprobar el "Sobre mí", los datos destacados y la línea de hobbies.~~ Aprobados.
6. ~~Foto en buena calidad y el nuevo PDF del CV.~~ Listos: `assets/foto.jpg` (600×600, 58 KB, sin metadatos) y `assets/cv-simon-aspee.pdf`. El PDF dice "San Miguel, Santiago" (la comuna, no la dirección); Simón decidió dejarlo así (3 oct. 2026).

**Riesgos:**

- **PDF y página desfasados:** si se actualiza uno y no el otro, se contradicen. El README tiene que recordarlo.
- **Teléfono público:** puede atraer spam. Fue decisión de Simón mostrarlo.
- **Créditos de Netlify:**
  - Cada deploy a producción cuesta 15 de los 300 créditos mensuales del plan gratis, y se comparten con Saudino si está en la misma cuenta.
  - Si se acaban, los sitios se pausan hasta el mes siguiente.
  - Por eso, después de publicar, el push a `main` solo se hace con el ok de Simón y juntando cambios.
- **Contraste del acento:** el rojo sobre fondo oscuro tiene bajo contraste. Usarlo en botones, bordes, íconos y títulos grandes.
- **Nuevo PDF:** tiene que salir sin la dirección exacta y sin los textos ocultos de la plantilla ("Skill 04", "Skill 06").

## 11. Siguiente acción

Simón hace la **Fase 0** y luego abre Claude Code en la carpeta del repo.
