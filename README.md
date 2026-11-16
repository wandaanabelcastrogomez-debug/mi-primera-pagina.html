# 🌿 Mi Rincón — mi primera página web

Proyecto de ejemplo, terminado y funcional, para aprender **HTML, CSS y JavaScript** desde cero.
Viene acompañado de la guía `GUIA-PASO-A-PASO.md`, que explica cómo se construye paso a paso
(por qué cada etiqueta, cada regla y cada línea de JavaScript).

---

## Cómo verlo

| Formato | Qué abrir |
|---|---|
| Proyecto completo | `index.html` (doble clic) |
| Un solo archivo | `mi-primera-web.html` (fuera de esta carpeta) |

No necesita internet, ni instalación, ni servidor.

---

## Qué hay dentro

    mi-primera-web/
    ├── index.html            estructura y contenido (HTML)
    ├── estilos.css           colores, cajas, columnas, móvil y modo oscuro (CSS)
    ├── script.js             menú, tema, año y validación (JavaScript)
    ├── avatar.svg            la imagen de la presentación
    ├── GUIA-PASO-A-PASO.md   el tutorial completo
    └── README.md             este archivo

---

## Qué hace la página

1. **Cabecera** con logo, menú de secciones y botón de tema.
2. **Presentación**: nombre, frase y botón que baja a los proyectos.
3. **Sobre mí** con lista de habilidades.
4. **Proyectos**: tres tarjetas en rejilla que se recolocan solas según el ancho.
5. **Formulario** que valida nombre, correo y mensaje, y avisa del resultado.
6. **Pie** con el año calculado automáticamente.

Y tres cosas que se piden siempre en una web bien hecha:

- **Modo oscuro** con botón, que respeta la preferencia del sistema y **recuerda** la elección
  (`localStorage`).
- **Responsive**: menú ☰ en el móvil y todo en una columna.
- **Accesibilidad básica**: `alt` en las imágenes, `label` en cada campo, foco visible al navegar con
  teclado, `aria-expanded` / `aria-pressed` / `aria-live`.

---

## Los tres archivos, en una frase cada uno

- **HTML** dice **qué** hay: cada etiqueta es una caja con significado (`<h1>`, `<section>`, `<form>`).
- **CSS** dice **cómo se ve**: se elige con selectores (`p`, `.tarjeta`, `#aviso`) y se aplican
  propiedades (color, tamaño, márgenes, columnas).
- **JavaScript** dice **qué hace**: busca elementos, escucha eventos (clic, enviar) y cambia clases o
  textos. Aquí el CSS hace el trabajo visual y el JS solo enciende y apaga clases: ese es el patrón
  de la web moderna.

---

## Para trastear sin miedo

- Abre `index.html` en el editor, cambia un texto, guarda y recarga (`F5`).
- En `estilos.css`, todo el color está en `:root`: cambia `--verde` y verás cómo cambia la página
  entera (incluido el modo oscuro).
- En `script.js`, el mensaje del formulario es tuyo: cámbialo y prueba otra vez.
- **Nada se puede romper**: si algo deja de verse, mira con `F12` la consola, deshaz el último cambio
  y sigue.

---

## Antes de publicarla

- Revisa que los nombres de archivo estén en minúsculas.
- Las rutas deben ser relativas (`estilos.css`, no una ruta de tu ordenador).
- Prueba en el móvil de verdad, no solo estrechando la ventana.

En la guía, el paso 16 explica cómo publicarla gratis con GitHub Pages o Netlify Drop.
