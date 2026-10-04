/* =====================================================================
   main.js — Arma la página a partir de DATOS (js/datos.js).
   Para cambiar contenido NO hace falta tocar este archivo.
   ===================================================================== */

(function () {
  "use strict";

  if (typeof DATOS === "undefined") {
    console.error("No se encontró DATOS. Revisa que js/datos.js no tenga errores de sintaxis.");
    return;
  }

  /* ---------- Íconos SVG inline ---------- */

  // Íconos de línea (se dibujan con el color del texto).
  function svgTrazo(contenido) {
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">' + contenido + "</svg>";
  }

  // Íconos rellenos (logos de marcas).
  function svgRelleno(path) {
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" focusable="false"><path d="' + path + '"/></svg>';
  }

  const ICONOS = {
    github: svgRelleno("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),
    linkedin: svgRelleno("M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),
    whatsapp: svgRelleno("M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"),
    correo: svgTrazo('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    telefono: svgTrazo('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    ubicacion: svgTrazo('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    descarga: svgTrazo('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'),
    externo: svgTrazo('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>'),
    // Íconos para los datos destacados (campo "icono" en datos.js).
    libro: svgTrazo('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),
    globo: svgTrazo('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
    maletin: svgTrazo('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
    codigo: svgTrazo('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>')
  };

  /* ---------- Utilidades ---------- */

  // true si el valor es un texto con algo escrito.
  function hayTexto(valor) {
    return typeof valor === "string" && valor.trim() !== "";
  }

  // Devuelve solo los textos con contenido de una lista.
  function textos(lista) {
    return Array.isArray(lista) ? lista.filter(hayTexto) : [];
  }

  // Crea un elemento HTML. Los hijos de tipo texto se agregan como texto plano
  // (nunca como HTML), así el contenido de datos.js se muestra tal cual.
  function crear(tag, atributos, hijos) {
    const elemento = document.createElement(tag);
    Object.entries(atributos || {}).forEach(function ([nombre, valor]) {
      if (valor === null || valor === undefined || valor === false) return;
      if (nombre === "class") elemento.className = valor;
      else elemento.setAttribute(nombre, valor === true ? "" : valor);
    });
    [].concat(hijos === undefined ? [] : hijos).forEach(function (hijo) {
      if (hijo === null || hijo === undefined || hijo === false || hijo === "") return;
      elemento.append(hijo);
    });
    return elemento;
  }

  // Ícono decorativo (los lectores de pantalla lo ignoran).
  function icono(nombre) {
    const span = crear("span", { class: "icono", "aria-hidden": "true" });
    span.innerHTML = ICONOS[nombre]; // Solo SVG fijos de este archivo, nunca datos.
    return span;
  }

  // Link que se abre en otra pestaña.
  function linkExterno(href, atributos, hijos) {
    return crear("a", Object.assign({ href: href, target: "_blank", rel: "noopener" }, atributos), hijos);
  }

  function linkWhatsApp(whatsapp) {
    if (!whatsapp || !hayTexto(whatsapp.numero)) return null;
    const base = "https://wa.me/" + whatsapp.numero;
    return hayTexto(whatsapp.mensaje) ? base + "?text=" + encodeURIComponent(whatsapp.mensaje) : base;
  }

  // Muestra una sección y le pone su título (h2).
  function abrirSeccion(id, titulo, tituloOculto) {
    const seccion = document.getElementById(id);
    const h2 = crear("h2", { id: id + "-titulo", class: tituloOculto ? "sr-only" : null }, titulo);
    seccion.setAttribute("aria-labelledby", h2.id);
    seccion.append(h2);
    seccion.hidden = false;
    return seccion;
  }

  /* ---------- Secciones ---------- */

  // "Simón Aspée" → "SA".
  function iniciales(nombre) {
    return nombre.trim().split(/\s+/).map(function (parte) { return parte[0]; }).join("").slice(0, 2).toUpperCase();
  }

  // Iniciales para la insignia de un lugar: "KFC" → "KFC", "Decosméticos" → "D".
  function inicialesLugar(nombre) {
    const palabras = nombre.trim().split(/\s+/).filter(function (p) { return /\p{L}/u.test(p); });
    if (palabras.length === 1 && palabras[0].length <= 4) return palabras[0].toUpperCase();
    return iniciales(palabras.join(" "));
  }

  // Logo de una empresa o institución. Si no hay imagen, o no carga, muestra sus iniciales.
  // Es decorativo (alt vacío): el nombre del lugar ya está escrito al lado.
  function logoLugar(ruta, nombre) {
    const insignia = crear("span", { class: "logo-lugar logo-lugar--iniciales", "aria-hidden": "true" }, inicialesLugar(nombre));
    if (!hayTexto(ruta)) return insignia;
    const imagen = crear("img", { class: "logo-lugar", src: ruta, alt: "", width: "40", height: "40", loading: "lazy", decoding: "async" });
    imagen.addEventListener("error", function () { imagen.replaceWith(insignia); });
    return imagen;
  }

  // Etiqueta de tecnología, con su logo si está en js/logos.js.
  function etiqueta(texto) {
    const propio = Object.prototype.hasOwnProperty;
    const hayLogos = typeof LOGOS !== "undefined" && typeof ICONOS_MARCAS !== "undefined";
    const ids = hayLogos && propio.call(LOGOS, texto) ? LOGOS[texto] : [];
    const logos = ids.filter(function (id) { return propio.call(ICONOS_MARCAS, id); }).map(function (id) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      svg.setAttribute("class", "etiqueta__logo");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("fill", ICONOS_MARCAS[id].color);
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      path.setAttribute("d", ICONOS_MARCAS[id].path);
      svg.append(path);
      return svg;
    });
    return crear("li", { class: "etiqueta" }, logos.concat(texto));
  }

  function renderHero(perfil, disponibilidad, contacto) {
    const hero = document.getElementById("hero");
    const whatsapp = linkWhatsApp(contacto.whatsapp);

    // Barra superior: iniciales + íconos sociales.
    const redes = [];
    if (hayTexto(contacto.github)) {
      redes.push(linkExterno(contacto.github, { class: "redes__link", "aria-label": "GitHub" }, icono("github")));
    }
    if (hayTexto(contacto.linkedin)) {
      redes.push(linkExterno(contacto.linkedin, { class: "redes__link", "aria-label": "LinkedIn" }, icono("linkedin")));
    }
    if (hayTexto(contacto.correo)) {
      redes.push(crear("a", { class: "redes__link", href: "mailto:" + contacto.correo, "aria-label": "Correo" }, icono("correo")));
    }
    hero.append(crear("div", { class: "barra" }, [
      hayTexto(perfil.nombre) ? crear("span", { class: "monograma", "aria-hidden": "true" }, iniciales(perfil.nombre)) : null,
      redes.length ? crear("ul", { class: "redes" }, redes.map(function (link) { return crear("li", {}, link); })) : null
    ]));

    // Cuerpo: foto + texto.
    const texto = crear("div", { class: "hero__texto" });

    texto.append(crear("h1", { class: "hero__nombre" }, perfil.nombre));

    if (hayTexto(perfil.subtitulo)) {
      // Cada parte separada por " · " va en su propia línea (con un espacio entre medio
      // para que los lectores de pantalla no las lean pegadas).
      const lineas = [];
      perfil.subtitulo.split("·").map(function (parte) { return parte.trim(); }).filter(hayTexto).forEach(function (parte, i) {
        if (i > 0) lineas.push(" ");
        lineas.push(crear("span", { class: "hero__subtitulo-linea" }, parte));
      });
      texto.append(crear("p", { class: "hero__subtitulo" }, lineas));
    }

    if (hayTexto(perfil.ubicacion)) {
      texto.append(crear("p", { class: "hero__ubicacion" }, [icono("ubicacion"), perfil.ubicacion]));
    }

    if (disponibilidad && disponibilidad.mostrar && hayTexto(disponibilidad.texto)) {
      texto.append(crear("p", { class: "distintivo" }, [
        crear("span", { class: "distintivo__punto", "aria-hidden": "true" }),
        disponibilidad.texto
      ]));
    }

    const acciones = [];
    if (hayTexto(perfil.cvPdf)) {
      acciones.push(crear("a", { class: "boton boton--principal", href: perfil.cvPdf, download: true }, [icono("descarga"), "Descargar CV"]));
    }
    if (whatsapp) {
      acciones.push(linkExterno(whatsapp, { class: "boton boton--verde" }, [icono("whatsapp"), "WhatsApp"]));
    }
    if (acciones.length) {
      texto.append(crear("div", { class: "acciones" }, acciones));
    }

    const cuerpo = crear("div", { class: "hero__cuerpo" });
    if (hayTexto(perfil.foto)) {
      // Está en el hero: se carga altiro, sin loading="lazy".
      cuerpo.append(crear("img", {
        class: "hero__foto",
        src: perfil.foto,
        alt: "Foto de " + perfil.nombre,
        width: "600",
        height: "600",
        fetchpriority: "high"
      }));
    }
    cuerpo.append(texto);
    hero.append(cuerpo);
  }

  function renderDestacados(destacados) {
    // Cada destacado es { icono, texto }; también se acepta solo el texto.
    const items = (destacados || []).map(function (d) {
      return typeof d === "string" ? { icono: null, texto: d } : d;
    }).filter(function (d) { return d && hayTexto(d.texto); });
    if (!items.length) return;
    const seccion = abrirSeccion("destacados", "Datos destacados", true);
    // Cada destacado es una tarjeta rellena; el color se alterna en el CSS.
    seccion.append(crear("ul", { class: "destacados" }, items.map(function (d) {
      return crear("li", { class: "tarjeta tarjeta--rellena destacado" }, [
        hayTexto(d.icono) && Object.prototype.hasOwnProperty.call(ICONOS, d.icono) ? icono(d.icono) : null,
        crear("span", {}, d.texto)
      ]);
    })));
  }

  function renderSobreMi(parrafos) {
    const items = textos(parrafos);
    if (!items.length) return;
    const seccion = abrirSeccion("sobre-mi", "Sobre mí");
    seccion.append(crear("div", { class: "tarjeta prosa" }, items.map(function (texto) {
      return crear("p", {}, texto);
    })));
  }

  function renderProyecto(proyecto, destacado) {
    const links = proyecto.links || {};
    const historia = (proyecto.historia || []).filter(function (etapa) {
      return etapa && (hayTexto(etapa.etapa) || hayTexto(etapa.texto));
    });
    const aprendizajes = textos(proyecto.aprendizajes);
    const tecnologias = textos(proyecto.tecnologias);

    const tarjeta = crear("article", { class: destacado ? "tarjeta tarjeta--franja proyecto proyecto--destacado" : "tarjeta tarjeta--franja proyecto" });

    // Franja de color: nombre, estado, tipo y contexto.
    tarjeta.append(crear("div", { class: "tarjeta__franja" }, [
      crear("div", { class: "proyecto__cabecera" }, [
        crear("h3", { class: "proyecto__nombre" }, proyecto.nombre),
        " ",
        hayTexto(proyecto.estado) ? crear("span", { class: "estado" }, proyecto.estado) : null
      ]),
      hayTexto(proyecto.tipo) ? crear("p", {}, proyecto.tipo) : null,
      hayTexto(proyecto.contexto) ? crear("p", {}, proyecto.contexto) : null
    ]));

    // Cuerpo oscuro: el resto del contenido.
    const cuerpo = crear("div", { class: "tarjeta__cuerpo" });
    tarjeta.append(cuerpo);

    if (hayTexto(proyecto.descripcion)) cuerpo.append(crear("p", { class: "proyecto__descripcion" }, proyecto.descripcion));

    if (historia.length) {
      cuerpo.append(crear("h4", { class: "subtitulo" }, "Historia"));
      // La última etapa es la actual: se marca con el punto relleno.
      cuerpo.append(crear("ol", { class: "linea-tiempo" }, historia.map(function (etapa, i) {
        const actual = i === historia.length - 1;
        return crear("li", { class: actual ? "linea-tiempo__etapa linea-tiempo__etapa--actual" : "linea-tiempo__etapa" }, [
          crear("p", { class: "linea-tiempo__cabecera" }, [
            hayTexto(etapa.etapa) ? crear("strong", {}, etapa.etapa) : null,
            " ",
            hayTexto(etapa.fecha) ? crear("span", { class: "fecha" }, etapa.fecha) : null
          ]),
          hayTexto(etapa.texto) ? crear("p", {}, etapa.texto) : null
        ]);
      })));
    }

    if (aprendizajes.length) {
      cuerpo.append(crear("h4", { class: "subtitulo" }, "Lo que aprendí"));
      cuerpo.append(crear("ul", { class: "lista" }, aprendizajes.map(function (texto) { return crear("li", {}, texto); })));
    }

    if (tecnologias.length) {
      cuerpo.append(crear("ul", { class: "etiquetas", "aria-label": "Tecnologías" }, tecnologias.map(etiqueta)));
    }

    const pie = [];
    if (hayTexto(links.demo)) pie.push(linkExterno(links.demo, { class: "boton" }, [icono("externo"), "Ver sitio en vivo"]));
    if (hayTexto(links.codigo)) pie.push(linkExterno(links.codigo, { class: "boton" }, [icono("github"), "Ver código"]));
    else if (hayTexto(links.notaCodigo)) pie.push(crear("p", { class: "texto-suave" }, links.notaCodigo));
    if (pie.length) cuerpo.append(crear("div", { class: "acciones proyecto__links" }, pie));

    // Si el cuerpo quedó vacío, la tarjeta es solo la franja.
    if (!cuerpo.childNodes.length) cuerpo.remove();

    return tarjeta;
  }

  function renderProyectos(proyectos) {
    const lista = (proyectos || []).filter(function (p) { return p && hayTexto(p.nombre); });
    if (!lista.length) return;
    const seccion = abrirSeccion("proyectos", "Proyectos");
    // El primer proyecto de la lista se muestra destacado.
    lista.forEach(function (proyecto, i) {
      seccion.append(renderProyecto(proyecto, i === 0));
    });
  }

  // [logo] + título y detalle + fechas (a la derecha en pantallas anchas, abajo en el celular).
  function cabeceraTarjeta(titulo, detalle, fechas, logo) {
    return crear("div", { class: logo ? "tarjeta__cabecera tarjeta__cabecera--con-logo" : "tarjeta__cabecera" }, [
      logo || null,
      crear("div", { class: "tarjeta__titulos" }, [
        crear("h3", {}, titulo),
        hayTexto(detalle) ? crear("p", { class: "tarjeta__detalle" }, detalle) : null
      ]),
      hayTexto(fechas) ? crear("p", { class: "fecha" }, fechas) : null
    ]);
  }

  function renderExperiencia(experiencia, otrosTrabajos) {
    const lista = (experiencia || []).filter(function (e) { return e && hayTexto(e.cargo); });
    const otros = otrosTrabajos && Array.isArray(otrosTrabajos.items)
      ? otrosTrabajos.items.filter(function (t) { return t && hayTexto(t.lugar); })
      : [];
    if (!lista.length && !otros.length) return;

    const seccion = abrirSeccion("experiencia", "Experiencia");

    lista.forEach(function (trabajo) {
      // Solo lleva logo (o insignia) si hay un lugar o un logo definido.
      const logo = hayTexto(trabajo.logo) || hayTexto(trabajo.lugar) ? logoLugar(trabajo.logo, trabajo.lugar || trabajo.cargo) : null;
      seccion.append(crear("article", { class: "tarjeta tarjeta--franja" }, [
        crear("div", { class: "tarjeta__franja" }, cabeceraTarjeta(trabajo.cargo, trabajo.lugar, trabajo.fechas, logo)),
        hayTexto(trabajo.descripcion) ? crear("div", { class: "tarjeta__cuerpo" }, crear("p", {}, trabajo.descripcion)) : null
      ]));
    });

    if (otros.length) {
      seccion.append(crear("article", { class: "tarjeta tarjeta--franja" }, [
        hayTexto(otrosTrabajos.titulo) ? crear("div", { class: "tarjeta__franja" }, crear("h3", {}, otrosTrabajos.titulo)) : null,
        crear("ul", { class: "tarjeta__cuerpo lista-compacta" }, otros.map(function (t) {
          return crear("li", { class: "lista-compacta__item" }, [
            logoLugar(t.logo, t.lugar),
            crear("span", { class: "lista-compacta__lugar" }, t.lugar),
            " ",
            hayTexto(t.cargo) ? crear("span", { class: "lista-compacta__cargo" }, t.cargo) : null,
            " ",
            hayTexto(t.fechas) ? crear("span", { class: "fecha lista-compacta__fechas" }, t.fechas) : null
          ]);
        }))
      ]));
    }
  }

  function renderEducacion(educacion) {
    const lista = (educacion || []).filter(function (e) { return e && hayTexto(e.institucion); });
    if (!lista.length) return;
    const seccion = abrirSeccion("educacion", "Educación");
    lista.forEach(function (estudio) {
      seccion.append(crear("article", { class: "tarjeta tarjeta--rellena" }, [
        cabeceraTarjeta(estudio.institucion, estudio.titulo, estudio.fechas, logoLugar(estudio.logo, estudio.institucion))
      ]));
    });
  }

  function renderHabilidades(habilidades) {
    const grupos = (habilidades || []).filter(function (g) { return g && hayTexto(g.grupo) && textos(g.items).length; });
    if (!grupos.length) return;
    const seccion = abrirSeccion("habilidades", "Habilidades");
    seccion.append(crear("div", { class: "tarjeta habilidades" }, grupos.map(function (grupo) {
      return crear("div", { class: "habilidad" }, [
        crear("h3", { class: "habilidad__grupo" }, grupo.grupo),
        crear("ul", { class: "etiquetas" }, textos(grupo.items).map(etiqueta))
      ]);
    })));
  }

  function renderContacto(contacto, cierre) {
    const whatsapp = linkWhatsApp(contacto.whatsapp);
    if (!whatsapp && !hayTexto(contacto.correo) && !hayTexto(contacto.telefono)) return;

    const titulo = cierre && hayTexto(cierre.titulo) ? cierre.titulo : "Contacto";
    const seccion = abrirSeccion("contacto", titulo);

    if (cierre && hayTexto(cierre.texto)) seccion.append(crear("p", {}, cierre.texto));

    const acciones = [];
    if (whatsapp) acciones.push(linkExterno(whatsapp, { class: "boton boton--verde" }, [icono("whatsapp"), "WhatsApp"]));
    if (hayTexto(contacto.correo)) acciones.push(crear("a", { class: "boton boton--azul", href: "mailto:" + contacto.correo }, [icono("correo"), contacto.correo]));
    if (hayTexto(contacto.telefono)) {
      acciones.push(crear("a", { class: "boton boton--ambar", href: "tel:" + contacto.telefono.replace(/[^\d+]/g, "") }, [icono("telefono"), contacto.telefono]));
    }
    seccion.append(crear("div", { class: "acciones" }, acciones));
  }

  function renderFooter(perfil) {
    if (!hayTexto(perfil.nombre)) return;
    const footer = document.getElementById("footer");
    footer.append(crear("p", {}, "© " + new Date().getFullYear() + " " + perfil.nombre));
  }

  /* ---------- Armar la página ---------- */

  const perfil = DATOS.perfil || {};
  const contacto = DATOS.contacto || {};

  renderHero(perfil, DATOS.disponibilidad, contacto);
  renderDestacados(DATOS.destacados);
  renderSobreMi(DATOS.sobreMi);
  renderProyectos(DATOS.proyectos);
  renderExperiencia(DATOS.experiencia, DATOS.otrosTrabajos);
  renderEducacion(DATOS.educacion);
  renderHabilidades(DATOS.habilidades);
  renderContacto(contacto, DATOS.cierreContacto);
  renderFooter(perfil);
})();
