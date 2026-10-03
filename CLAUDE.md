# CLAUDE.md — CV web de Simón Aspée

## Qué es este proyecto

Página web estática, de una sola página, con el CV de Simón Aspée, estudiante de 3.er año de Ingeniería Civil Informática en la Universidad San Sebastián.

- **Objetivo:** postular a práctica profesional en Chile (enero–febrero 2027).
- **Publicación:** se publica en Netlify desde un repo público de GitHub.
- **Plan:** el plan completo, el contenido y las fases están en `plan.md`. Léelo antes de empezar y marca los checkboxes a medida que avanzas.

## Cómo trabajar con Simón

- Háblale en español, informal y claro.
- **Commits y push:** puedes hacerlos tú desde la terminal. **Cada vez** que lo hagas, muéstrale a Simón el **título** y la **descripción** del commit.
  - Título: corto, en español y en imperativo. Por ejemplo: "Agrega sección de proyectos".
  - Descripción: viñetas con qué cambió y por qué.
- **Netlify y créditos:**
  - El plan gratis tiene 300 créditos al mes, y cada deploy a producción cuesta 15.
  - Si Saudino (una tienda real) está en la misma cuenta, comparte esos créditos. Si se acaban, los sitios se pausan hasta el mes siguiente.
  - Mientras Netlify **no** esté conectado, commit y push son libres.
  - Una vez conectado:
    - Los commits siguen siendo libres.
    - **Nunca hagas push a `main` sin el ok explícito de Simón.**
    - Junta varios cambios en un solo push.
    - Si conviene, trabaja en una rama `dev` y pásala a `main` solo cuando Simón lo apruebe.
- Quiere entender lo que se construye. Al terminar cada fase, explícale en pocas líneas qué hiciste y qué debería probar.
- Su meta profesional es el desarrollo móvil nativo (Kotlin/Swift), no web. No le propongas frameworks web para esta página.

## Stack (no negociable)

- HTML, CSS y JavaScript puros.
- Sin frameworks, sin `package.json`/npm, sin paso de build, sin backend y sin librerías JS externas.
- Tiene que funcionar abriendo `index.html` con doble clic (file://). Por eso el contenido va en `js/datos.js` como objeto global (`const DATOS = {...}`), no en un JSON cargado con fetch.
- Fuentes: máximo 2 familias (Google Fonts o del sistema).
- Íconos en SVG inline.
- Netlify sin configuración de build: publica la raíz del repo.

## Estructura

```
index.html        estructura semántica + meta tags (sin textos del CV escritos a mano)
css/styles.css    variables de diseño en :root + estilos
js/datos.js       TODO el contenido editable
js/main.js        renderiza las secciones desde DATOS
assets/           foto.jpg, og-image.jpg, favicon.svg, cv-simon-aspee.pdf
README.md         cómo actualizar el contenido
plan.md           plan, contenido y checklist por fases
```

## Reglas de contenido

1. **`js/datos.js` es la única fuente de verdad del contenido.** Agregar un proyecto o un trabajo tiene que ser copiar un bloque en `datos.js`, sin tocar el HTML ni el CSS. Comenta el archivo para que Simón sepa qué editar.
2. **Nunca inventes contenido sobre Simón.** Eso incluye logros, cifras, fechas, tecnologías, niveles y frases. Si falta un dato, pregúntale. Los textos marcados [BORRADOR] en `plan.md` se le muestran para que los apruebe.
3. **Honestidad.** Simón es "estudiante en camino al desarrollo móvil", no "desarrollador". Nada que no pueda defender en una entrevista.
4. **Habilidades sin barras, porcentajes ni niveles** (Alto/Medio/Bajo).
5. **Privacidad:**
   - Nunca mostrar su dirección. La ubicación es solo "Santiago, Chile".
   - Correo, teléfono y WhatsApp sí se muestran (decisión de Simón).
   - De la tutoría: sin nombre ni datos de la alumna.
6. **Saudino:**
   - Link solo a https://saudino.netlify.app/.
   - El prototipo se menciona en la historia del proyecto, pero **no se enlaza**.
   - El repo es privado, así que se muestra "Código disponible a pedido".
7. **Estilo de texto:** español de Chile, en primera persona, profesional pero cercano. Fechas abreviadas, por ejemplo "oct. 2025".
8. Una sección sin contenido no se muestra. Nada de "próximamente" ni secciones vacías.

## Reglas de diseño

- Usa la **skill frontend-design** para la ejecución visual, siempre dentro de estas decisiones:
  - Modo oscuro (tema único), minimalista, contenido en tarjetas y una columna centrada.
  - Referencia: **moure.dev**. Toma la sensación (limpio, tarjetas, íconos sociales arriba). No copies su marca, logo ni textos.
  - Acento: el rojo del CV de Simón (aprox. `#C8444F`). Es de prueba, así que todos los colores van como variables CSS en `:root` para poder cambiarlos en una línea.
  - Contraste: el rojo sobre fondo oscuro **no alcanza AA para texto pequeño**. Úsalo en botones (con texto blanco), bordes, íconos y títulos grandes. Para texto chico usa un tono más claro.
- **Mobile-first:** perfecto en 360 px y escalar a escritorio. Sin scroll horizontal. Áreas táctiles de al menos 44 px.
- **Animaciones sutiles** (aparición al hacer scroll, hover suave). Respeta `prefers-reduced-motion`.
- **Accesibilidad:** HTML semántico (`header`, `main`, `section`, `footer`), `alt` en las imágenes, foco visible y `lang="es"`.
- **Imágenes optimizadas:**
  - La foto pesa 200 KB o menos.
  - `loading="lazy"` en todo lo que no esté en el hero.

## Detalles funcionales

- **Botón "Descargar CV":** apunta a `assets/cv-simon-aspee.pdf`, con el atributo `download`. Si `perfil.cvPdf` es `null`, el botón no se muestra.
- **WhatsApp:** `https://wa.me/56975580599?text=` + el mensaje de `datos.js`, codificado con `encodeURIComponent`.
- **Distintivo "Disponible para práctica":** se controla con `disponibilidad.mostrar` en `datos.js`.
- **Meta tags:** Open Graph y Twitter card, con la URL absoluta `https://simon-aspee.netlify.app/`. Si cambia el nombre del sitio, hay que actualizarlas.
- **`<noscript>`:** con nombre, correo y LinkedIn.

## Pregunta antes de:

- Cambiar la estructura de `datos.js` (Simón la edita a mano).
- Agregar una dependencia, un archivo de configuración o una herramienta.
- Cambiar decisiones de diseño ya tomadas: tema, acento u orden de las secciones.
- Borrar o renombrar archivos de `assets/`.
- Publicar cualquier texto sobre Simón que no esté en `plan.md`.

## .gitignore

- Créalo **antes del primer commit**, con al menos: `.DS_Store`, `Thumbs.db`, `.vscode/`, `.idea/`, `.env` y `.netlify/`.
- **Antes** de usar cualquier tecnología o herramienta nueva que genere archivos, actualiza primero el `.gitignore`. Por ejemplo, la CLI de Netlify crea `.netlify/`. Dile a Simón qué agregaste y por qué.
- Si la instalación de la skill frontend-design creó una carpeta dentro del repo, pregúntale a Simón si se sube o se ignora.
- Antes de cada commit, revisa con `git status` que no se cuele nada que no corresponda.

## Flujo de trabajo

- Usa **plan mode** antes de cada fase de `plan.md`.
- Trabaja una fase a la vez. Al terminarla:
  1. Marca el checklist en `plan.md`.
  2. Resume lo que hiciste.
  3. Haz el commit desde la terminal, mostrándole a Simón el título y la descripción. El push sigue la regla de "Netlify y créditos".
- **Para ver la página:** abrir `index.html` con doble clic. Si hace falta un servidor local, usa `python3 -m http.server` en macOS o `python -m http.server` en Windows.
- **Definición de terminado:**
  - Sin errores en la consola.
  - Todos los links funcionan.
  - Lighthouse móvil con 90 o más en las cuatro categorías.
  - Contenido revisado contra `plan.md`.
