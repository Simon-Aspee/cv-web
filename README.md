# cv-web

CV web de **Simón Aspée**, estudiante de Ingeniería Civil Informática en camino al desarrollo móvil nativo.

- Sitio: https://simon-aspee.netlify.app/ (una vez publicado en Netlify)
- Hecho con HTML, CSS y JavaScript puros: sin frameworks, sin npm y sin paso de build.

## Ver la página en tu computador

Haz doble clic en `index.html`. No necesitas instalar nada.

## Dónde está cada cosa

| Archivo | Qué tiene |
|---|---|
| `js/datos.js` | **Todo el contenido**: textos, proyectos, experiencia, educación, habilidades y contacto. Es el único archivo que necesitas para actualizar el CV. |
| `js/logos.js` | Logos de tecnologías que aparecen en las etiquetas (Python, Kotlin, etc.). |
| `js/main.js` | Arma la página a partir de `datos.js`. No hace falta tocarlo. |
| `css/styles.css` | El diseño. Los colores están al principio, en `:root`. |
| `assets/` | Foto, CV en PDF, logos de empresas, favicon e imagen para compartir. |
| `index.html` | La estructura y los datos para compartir el link (meta tags). |

## Cómo actualizar el contenido (`js/datos.js`)

Reglas generales:

- Cambia solo lo que está entre comillas `"así"`.
- Respeta las comas al final de cada línea y de cada bloque `{ ... }`.
- Si dejas algo vacío (`""` o `[]`), no se muestra. Una sección vacía desaparece sola.

### Agregar un proyecto

Copia un bloque completo de `proyectos`, pégalo debajo del último (separado por una coma) y cambia los textos:

```js
{
  nombre: "Mi app Android",
  tipo: "Proyecto personal",
  estado: "En desarrollo",
  contexto: "",
  descripcion: "Qué hace la app, en una o dos frases.",
  historia: [
    { etapa: "v1", fecha: "mar. 2027", texto: "Qué hiciste en esta etapa." }
  ],
  aprendizajes: ["Algo que aprendiste."],
  tecnologias: ["Kotlin", "Jetpack Compose"],
  links: { demo: null, codigo: "https://github.com/Simon-Aspee/mi-app", notaCodigo: "" }
}
```

- El **primer** proyecto de la lista se muestra destacado.
- `links.demo` y `links.codigo` van con link o con `null`. Si no hay código público, usa `notaCodigo` (por ejemplo, "Código disponible a pedido").

### Agregar un trabajo o un estudio

En `experiencia`, `otrosTrabajos.items` o `educacion`, copia un bloque y cambia los textos. Ejemplo de experiencia:

```js
{
  cargo: "Práctica profesional",
  lugar: "Nombre de la empresa",
  fechas: "ene. 2027 – feb. 2027",
  descripcion: "Qué hiciste.",
  logo: "assets/logos/empresa.png"
}
```

**Logo de la empresa o institución:**

- Deja una imagen cuadrada en `assets/logos/` (PNG o JPG, idealmente de 80×80 px) y pon su ruta en `logo`.
- Si usas `logo: null`, se muestra una insignia con las iniciales del lugar.

### Datos destacados

Cada destacado lleva un ícono: `"libro"`, `"globo"`, `"maletin"`, `"codigo"`, `"telefono"` o `null`.

```js
{ icono: "libro", texto: "3.er año de Ingeniería Civil Informática (USS)" }
```

### Otras cosas comunes

- **Ocultar "Disponible para práctica"** (por ejemplo, después de la práctica): `disponibilidad.mostrar: false`.
- **Cambiar el PDF:** reemplaza `assets/cv-simon-aspee.pdf` por el nuevo con el mismo nombre. Si `perfil.cvPdf` es `null`, el botón "Descargar CV" no aparece.
- **Subtítulo en varias líneas:** en `perfil.subtitulo`, cada `" · "` marca un salto de línea.
- **Logo de una tecnología nueva:** agrega una línea en `LOGOS` dentro de `js/logos.js`, con el texto exacto de la etiqueta. Si no está, la etiqueta se muestra solo con texto.
- **Colores:** se cambian en `:root`, al principio de `css/styles.css` (por ejemplo, `--color-rojo`).

## Importante

- **Mantén la página y el PDF iguales.** Si actualizas uno, actualiza el otro, para que no se contradigan.
- **Si cambias tu correo o LinkedIn,** cámbialos también en el `<noscript>` de `index.html`, que es lo que se ve sin JavaScript.
- **Si cambia la dirección del sitio en Netlify,** actualiza las URL de `index.html` (`canonical`, `og:url`, `og:image` y `twitter:image`).

## Publicar

1. Haz commit y push a GitHub.
2. Netlify publica automáticamente la rama `main`.

Una vez conectado Netlify, **cada push a `main` gasta créditos** (15 de los 300 mensuales del plan gratis, compartidos con los otros sitios de la cuenta). Junta varios cambios en un solo push.
