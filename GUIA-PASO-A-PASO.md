# Crea tu primera página web, paso a paso

**Proyecto «Mi Rincón»** · HTML + CSS + JavaScript explicados desde cero, sin dar nada por sabido.

Al terminar tendrás una página personal de verdad: con cabecera, presentación, tarjetas, formulario
que valida lo que escribes y modo oscuro que se recuerda. Y sabrás **por qué** funciona cada línea.

---

## Índice

0. [Qué vas a construir](#0-qué-vas-a-construir)
1. [Antes de empezar](#1-antes-de-empezar)
2. [El esqueleto de cualquier página](#2-el-esqueleto-de-cualquier-página)
3. [Tu primer contenido: títulos, párrafos, listas](#3-tu-primer-contenido)
4. [Enlaces, imágenes y secciones](#4-enlaces-imágenes-y-secciones)
5. [Un formulario](#5-un-formulario)
6. [Entra el CSS: selectores](#6-entra-el-css-selectores)
7. [El modelo de caja](#7-el-modelo-de-caja)
8. [Variables CSS y colores](#8-variables-css-y-colores)
9. [Colocar cosas con Flexbox](#9-colocar-cosas-con-flexbox)
10. [Tarjetas con Grid](#10-tarjetas-con-grid)
11. [Que se vea bien en el móvil](#11-que-se-vea-bien-en-el-móvil)
12. [JavaScript: qué es y cómo se conecta](#12-javascript-qué-es-y-cómo-se-conecta)
13. [El menú del móvil y el año del pie](#13-el-menú-del-móvil-y-el-año-del-pie)
14. [Modo oscuro: estado, clase y memoria](#14-modo-oscuro-estado-clase-y-memoria)
15. [Validar el formulario](#15-validar-el-formulario)
16. [Publicar tu página en internet](#16-publicar-tu-página-en-internet)
17. [Errores típicos (y su solución)](#17-errores-típicos-y-su-solución)
18. [10 ejercicios para seguir](#18-10-ejercicios-para-seguir)
19. [Chuleta final](#19-chuleta-final)

---

## 0. Qué vas a construir

Una página personal con cinco partes: cabecera con menú, presentación, «sobre mí», proyectos y
formulario de contacto. Tres archivos, cada uno con un trabajo:

| Archivo | Lenguaje | Qué hace |
|---|---|---|
| `index.html` | HTML | **Qué** hay en la página: títulos, textos, imágenes, formulario. |
| `estilos.css` | CSS | **Cómo se ve**: colores, tamaños, márgenes, columnas. |
| `script.js` | JavaScript | **Qué hace**: responde a clics, valida, recuerda tus preferencias. |

Y uno extra, `avatar.svg`, que es la imagen de la presentación (un dibujo vectorial que se puede
abrir con cualquier navegador).

Una idea que conviene tener clara desde el principio: el navegador **no «ejecuta» la página de una
vez**. Lee el HTML y construye un árbol de cajas; luego aplica el CSS a cada caja; y por último el
JavaScript puede cambiar ese árbol y esas clases. Por eso el orden importa.

---

## 1. Antes de empezar

**Necesitas dos cosas y ninguna es de pago:**

1. Un **editor de texto**. Recomendado: [Visual Studio Code](https://code.visualstudio.com/)
   (gratis). Vale también el Bloc de notas, pero sufre.
2. Un **navegador** moderno: Chrome, Firefox, Edge o Safari.

**Crea la carpeta del proyecto:**

1. Crea una carpeta llamada `mi-primera-web` donde quieras (por ejemplo en el escritorio).
2. Dentro, crea un archivo `index.html`. El nombre `index.html` no es casualidad: es el archivo que
   el navegador busca por defecto cuando entras a una carpeta o a un sitio web.
3. Ábrelo con el editor y escribe (a mano, sin copiar) lo del paso siguiente.

**Cómo ver el resultado:** abre `index.html` con doble clic. Verás la página en el navegador. Cada
vez que cambies algo en el editor, guarda (`Ctrl + S`) y recarga en el navegador con `F5`.

**El atajo que te va a salvar la vida:** `F12` abre las herramientas del desarrollador. En la
pestaña *Consola* salen los errores de JavaScript; en *Elementos* puedes ver el HTML tal y como lo
entiende el navegador. Si algo no funciona, casi siempre hay una pista ahí.

---

## 2. El esqueleto de cualquier página

Todo archivo HTML tiene la misma estructura básica. Escríbela en `index.html`:

    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi Rincón · Página personal de Ana</title>
      <link rel="stylesheet" href="estilos.css">
    </head>
    <body>
      <h1>Hola, mundo</h1>
    </body>
    </html>

Qué es cada cosa:

- `<!DOCTYPE html>` — aviso al navegador: «esto es HTML moderno». Sin él, algunos navegadores
  activan un modo antiguo y todo se ve raro.
- `<html lang="es">` — la etiqueta que envuelve todo. `lang="es"` dice el idioma: ayuda a los
  lectores de pantalla y a los traductores.
- `<head>` — la **ficha técnica**: no se ve, pero el navegador la necesita.
  - `charset="UTF-8"` — sin esto, las tildes y las eñes salen como símbolos raros (`Ã¡`).
  - `viewport` — sin esto, en el móvil la página se ve como una miniatura y hay que hacer zoom.
  - `<title>` — el texto de la pestaña y del resultado de Google.
  - `<link rel="stylesheet">` — aquí se engancha el CSS (todavía no existe; lo crearemos).
- `<body>` — todo lo que **se ve** va aquí dentro.

**Compruébalo:** guarda y recarga. Deberías ver «Hola, mundo» en letra grande.

---

## 3. Tu primer contenido

Dentro del `<body>` hay **etiquetas** que envuelven contenido. Se abren (`<p>`) y se cierran
(`</p>`), y lo de en medio es el contenido.

    <h1>Ana Pérez</h1>
    <p>Estudiante y aprendiz de programadora.</p>

    <h2>Sobre mí</h2>
    <p>Me gusta aprender cosas nuevas y contarlas.</p>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

Las etiquetas que vas a usar todo el rato:

| Etiqueta | Para qué | Se ve como |
|---|---|---|
| `<h1>` … `<h6>` | Títulos, del más importante (h1) al menos | Grande y en negrita |
| `<p>` | Párrafo de texto | Texto normal con espacio |
| `<ul>` + `<li>` | Lista con puntos | Viñetas |
| `<ol>` + `<li>` | Lista numerada | 1, 2, 3 |
| `<strong>` | Algo importante | Negrita |
| `<em>` | Énfasis | Cursiva |
| `<br>` | Salto de línea (no lleva cierre) | — |

Dos reglas de oro:

1. **Un solo `<h1>` por página.** Es el título del documento. Para el resto, `<h2>`, `<h3>`…
2. **Las etiquetas se cierran en orden inverso:** si abres `<p><strong>`, cierras `</strong></p>`.

---

## 4. Enlaces, imágenes y secciones

**Enlaces** llevan de un sitio a otro:

    <a href="https://developer.mozilla.org/es/">Documentación de MDN</a>
    <a href="#contacto">Ir a contacto</a>

- `href="https://…"` — una dirección de internet.
- `href="#contacto"` — un **ancla**: baja a la parte de la página que tenga `id="contacto"`.
  Con `scroll-behavior: smooth` en el CSS, el salto es suave.

**Imágenes:**

    <img src="avatar.svg" alt="Ilustración de una flor con ojos sonrientes" width="200" height="200">

- `src` — la ruta del archivo. Si está en la misma carpeta, basta el nombre.
- `alt` — el texto que se lee si la imagen no carga y lo que escucha quien usa un lector de
  pantalla. **No es opcional**: una web sin `alt` está mal hecha.
- `width` y `height` — las medidas reales. Así el navegador reserva el hueco y la página no «salta»
  mientras carga.
- `<img>` no se cierra: no envuelve contenido, no tiene `</img>`.

**Secciones:** cada parte de la página se envuelve en `<section>` con un `id` único.

    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <p>Texto de la sección.</p>
    </section>

También existen `<header>` (cabecera), `<nav>` (menú), `<main>` (contenido principal), `<article>`
(una pieza con sentido propio), `<footer>` (pie). Se llaman etiquetas **semánticas** y no cambian el
aspecto: le dicen al navegador —y a Google, y a los lectores de pantalla— qué es cada bloque. Úsalas.

---

## 5. Un formulario

Un formulario recoge datos. Tiene tres piezas: un `<form>`, una `<label>` por campo y el campo.

    <form class="formulario" id="formulario" novalidate>
      <label for="nombre">Tu nombre</label>
      <input id="nombre" name="nombre" type="text" placeholder="Ana">

      <label for="email">Tu correo</label>
      <input id="email" name="email" type="email" placeholder="ana@ejemplo.com">

      <label for="mensaje">Tu mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="4"></textarea>

      <button class="boton" type="submit">Enviar mensaje</button>
    </form>

- `for="nombre"` en la etiqueta debe coincidir con el `id` del campo: así se puede pulsar el texto
  para enfocar el campo. Es accesibilidad básica.
- `type="email"` — en el móvil abre un teclado con «@».
- `<textarea>` — para textos largos. **No** es un `<input>`; el valor va entre las etiquetas.
- `novalidate` — desactiva la validación automática del navegador, porque la vamos a hacer nosotros
  con JavaScript en el paso 15 (así practicamos y el mensaje es propio).

> Nota honesta: sin un servidor, un formulario **no envía nada**. En este proyecto valida y muestra
> un mensaje. Para enviar de verdad más adelante se usa un servicio de formularios o un poco de
> servidor.

---

## 6. Entra el CSS: selectores

Crea un archivo `estilos.css` en la misma carpeta y enlázalo en el `<head>` (ya estaba escrito):

    <link rel="stylesheet" href="estilos.css">

Una regla de CSS tiene tres partes:

    h1 { color: #2f7d4f; }

- `h1` — el **selector**: a qué elementos afecta.
- `color` — la **propiedad**: qué se cambia.
- `#2f7d4f` — el **valor**. Y todo termina en `;`.

Los tres selectores que necesitas:

| Selector | Elige | Ejemplo |
|---|---|---|
| `p` | todas las etiquetas `p` | `p { margin: 0 0 1em; }` |
| `.tarjeta` | los elementos con `class="tarjeta"` | `.tarjeta { padding: 22px; }` |
| `#aviso` | **el** elemento con `id="aviso"` | `#aviso { color: red; }` |

Cómo elegir entre clase e id: la **clase** se repite (muchas tarjetas, muchos botones); el **id** es
único en la página. Cuando dudes, usa clase.

Selectores un poco más listos:

    .menu a { }              /* los <a> que están DENTRO de .menu (el espacio = dentro) */
    .tarjeta:hover { }        /* solo cuando el ratón está encima */
    a:focus-visible { }       /* cuando se navega con el teclado */
    body.oscuro { }           /* solo si el body tiene además la clase «oscuro» */

Ese último es el que usaremos para el modo oscuro.

---

## 7. El modelo de caja

Este es el concepto que más cuesta al principio, y el que explica por qué «no encaja nada». **Cada
elemento es una caja rectangular** con cuatro capas, de dentro afuera:

    contenido  →  padding  →  border  →  margin

- **padding** (relleno): espacio **dentro**, entre el texto y el borde.
- **border**: la línea del borde.
- **margin** (margen): espacio **fuera**, que empuja a los demás elementos.

    .tarjeta {
      padding: 22px;              /* aire dentro */
      border: 1px solid #e4e9e2;  /* borde fino gris */
      margin-bottom: 20px;        /* separación con lo de abajo */
    }

Y siempre, siempre, al principio de la hoja:

    * { box-sizing: border-box; }

Sin esta línea, un elemento con `width: 100%` y `padding: 20px` mide 100 % **más** 40 píxeles y se
sale de la pantalla. Con ella, el padding se cuenta dentro del ancho. Es la primera línea de casi
cualquier CSS del mundo.

**Compruébalo:** en la página, con `F12` → *Elementos*, selecciona una tarjeta y mira el diagrama de
colores de la pestaña *Estilos*. Verás las cuatro capas dibujadas.

---

## 8. Variables CSS y colores

Repetir `#2f7d4f` veinte veces es un problema: si un día quieres cambiar el verde, lo cambias en
veinte sitios (y te olvidas de uno). Las **variables** lo resuelven:

    :root {
      --fondo: #fdfaf4;
      --texto: #2f3b34;
      --verde: #2f7d4f;
      --radio: 16px;
    }

    body {
      background: var(--fondo);
      color: var(--texto);
    }

    .boton {
      background: var(--verde);
      border-radius: var(--radio);
    }

`:root` es la raíz del documento (el `<html>`), así que las variables valen en toda la página. Para
usarlas: `var(--nombre)`.

Los colores se escriben de tres formas, todas válidas:

- `#2f7d4f` — hexadecimal: `#` + rojo, verde y azul en dos cifras cada uno.
- `rgb(47, 125, 79)` — lo mismo en números de 0 a 255.
- `hsl(140, 45%, 34%)` — tono, saturación y luminosidad. Muy cómodo para hacer variantes.

Y una idea potente: si el modo oscuro redefine las variables, **todo** el sitio cambia de golpe sin
tocar una sola regla más. Eso es exactamente lo que haremos en el paso 14.

---

## 9. Colocar cosas con Flexbox

Por defecto los elementos de bloque se apilan uno debajo de otro. Para ponerlos **en fila** se usa
Flexbox. Se activa con `display: flex` en el **padre**; los hijos se colocan solos.

La cabecera del proyecto:

    .cabecera {
      display: flex;
      align-items: center;      /* centrado vertical */
      gap: 16px;                /* separación entre hijos */
      flex-wrap: wrap;          /* si no caben, bajan a otra línea */
      max-width: 960px;
      margin: 0 auto;           /* centra el bloque en la página */
      padding: 16px 20px;
    }

    .menu {
      display: flex;
      gap: 18px;
      margin-left: auto;        /* empuja el menú a la derecha */
    }

Las cuatro propiedades que hay que memorizar:

- `display: flex` — pone a los hijos en fila.
- `flex-direction: column` — los pone en columna.
- `align-items` — alinea en el eje **contrario** a la fila (con fila: vertical).
- `justify-content` — alinea en el eje de la fila (horizontal). `space-between` reparte a los
  extremos; `center` centra.
- `gap` — separación entre hijos. Mucho mejor que andar poniendo márgenes.

`margin-left: auto` en un hijo de un flex es un truco clásico: se come todo el espacio libre y
empuja ese elemento a la derecha.

---

## 10. Tarjetas con Grid

Para rejillas de dos o tres columnas, Grid es más directo:

    .tarjetas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

Se lee así: «repite columnas de **mínimo 240 píxeles** y repártelas; si caben tres, haz tres; si el
móvil es estrecho, una». Eso es **responsive sin escribir ni una media query**: la rejilla se
reorganiza sola.

Diferencia rápida para no liarse: **Flexbox** = una fila o una columna (menú, botones, etiquetas).
**Grid** = filas **y** columnas a la vez (rejillas, galerías, maquetas).

---

## 11. Que se vea bien en el móvil

Dos cosas, y las dos ya están hechas en el proyecto:

1. **`<meta name="viewport" …>`** en el `<head>`. Sin esto, el móvil finge tener 980 píxeles y todo
   se ve diminuto.
2. **Una media query** para cambiar el diseño cuando la pantalla es estrecha:

    @media (max-width: 760px) {
      .menu-boton { display: block; }
      .menu { display: none; flex-direction: column; }
      .menu.abierto { display: flex; }
      .hero { flex-direction: column-reverse; text-align: center; }
    }

`@media (max-width: 760px)` significa «desde aquí hacia abajo, aplica esto». Es CSS normal y
sobrescribe lo anterior.

Fíjate en el truco del menú: en el móvil está **oculto** (`display: none`) hasta que JavaScript le
añade la clase `abierto`. Con el botón ☰ lo abriremos en el paso 13.

Y un consejo que casi nadie hace al principio: **prueba redimensionando la ventana** del navegador
de ancho a estrecho. Es la forma más rápida de ver si algo se rompe.

---

## 12. JavaScript: qué es y cómo se conecta

HTML es estructura, CSS es aspecto, **JavaScript es comportamiento**: leer, decidir, calcular y
reaccionar. Es el único de los tres que es un lenguaje de programación de verdad.

Se engancha al final del `<body>`, para que el HTML ya exista cuando el script se ejecute:

    <script src="script.js"></script>

El patrón que se repite en todo el proyecto tiene tres pasos:

    // 1. Buscar el elemento
    const boton = document.querySelector("#botonTema");

    // 2. Escuchar un evento
    boton.addEventListener("click", () => {

      // 3. Hacer algo
      document.body.classList.toggle("oscuro");
    });

Lo que hay que saber de cada pieza:

- `document.querySelector("#algo")` busca **el primero** que coincida. Con `.clase`, `etiqueta` o
  `#id`: se usa la misma sintaxis que en CSS. (`querySelectorAll` devuelve todos.)
- `addEventListener("click", función)` registra una función que se ejecutará **cada vez** que ocurra
  el evento. Otros eventos útiles: `submit`, `input`, `keydown`, `load`.
- Una **función flecha** `() => { … }` es una función anónima y corta. Es lo que va «dentro» del
  evento.
- `classList.add("x")` / `remove("x")` / `toggle("x")` añaden, quitan o alternan una clase. Y el CSS
  hace el resto. Este es **el** patrón de la web moderna: JavaScript cambia clases, CSS cambia el
  aspecto.
- `textContent = "…"` cambia el texto de un elemento. (`innerHTML` interpreta HTML: úsalo solo con
  contenido de confianza.)
- `elemento.value` lee lo que el usuario escribió en un campo.

---

## 13. El menú del móvil y el año del pie

Empieza por algo pequeño y visible. Creamos `script.js`:

    "use strict";

    const $ = (selector) => document.querySelector(selector);

    // 1) El año del pie, calculado (así nunca se queda viejo)
    const anio = $("#anio");
    if (anio) anio.textContent = new Date().getFullYear();

    // 2) El menú del móvil
    const botonMenu = $("#menuBoton");
    const menu = $("#menu");

    if (botonMenu && menu) {
      botonMenu.addEventListener("click", () => {
        const abierto = menu.classList.toggle("abierto");
        botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
      });

      // al pulsar un enlace, se cierra
      menu.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
          menu.classList.remove("abierto");
          botonMenu.setAttribute("aria-expanded", "false");
        });
      });
    }

Detalles que importan:

- `"use strict"` activa el modo estricto: los errores tontos (variables sin declarar) saltan antes.
- `if (anio) { … }` evita el error «no puedo leer una propiedad de null» si el elemento no existe.
  Es la causa número uno de scripts que no funcionan.
- `setAttribute("aria-expanded", …)` actualiza el estado para los lectores de pantalla. No se ve,
  pero hace la página usable por todo el mundo.

**Compruébalo:** haz la ventana estrecha, y el botón ☰ debe abrir y cerrar el menú.

---

## 14. Modo oscuro: estado, clase y memoria

El plan, en tres capas:

1. **CSS**: una clase `oscuro` en el `body` cambia las variables de color.
2. **JavaScript**: un botón pone y quita esa clase.
3. **`localStorage`**: se recuerda la elección al volver a abrir la página.

El CSS (nótese que solo se redefinen las variables):

    body.oscuro {
      --fondo: #131a17;
      --papel: #1b2420;
      --texto: #e6efe9;
      --texto-suave: #9fb2a7;
      --verde: #6ede9b;
      --verde-claro: #22322a;
      --borde: #2b3a32;
    }

El JavaScript:

    const botonTema = $("#botonTema");
    const CLAVE_TEMA = "mi-rincon-tema";

    function aplicarTema(oscuro) {
      document.body.classList.toggle("oscuro", oscuro);
      botonTema.setAttribute("aria-pressed", oscuro ? "true" : "false");
      $("#iconoTema").textContent = oscuro ? "☀️" : "🌙";
      $("#textoTema").textContent = oscuro ? "Modo claro" : "Modo oscuro";
    }

    // al cargar: lo guardado o, si es la primera vez, lo que prefiera el sistema
    const guardado = localStorage.getItem(CLAVE_TEMA);
    const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    aplicarTema(guardado === "oscuro" || (guardado === null && prefiereOscuro));

    // al pulsar
    botonTema.addEventListener("click", () => {
      const quedaraOscuro = !document.body.classList.contains("oscuro");
      aplicarTema(quedaraOscuro);
      localStorage.setItem(CLAVE_TEMA, quedaraOscuro ? "oscuro" : "claro");
    });

Conceptos nuevos:

- `classList.toggle("oscuro", condición)` — el segundo argumento fuerza poner o quitar.
- `localStorage` guarda **texto** (parejas clave-valor) y sobrevive al cerrar la pestaña. Solo texto:
  números y objetos hay que convertirlos (`String()`, `JSON.stringify()`).
- `matchMedia("(prefers-color-scheme: dark)")` pregunta al sistema operativo si está en modo oscuro.
  Detalle de cortesía: la página respeta lo que ya eligió la persona en su equipo.
- En el proyecto real todo esto va envuelto en `try / catch`, porque algunos navegadores con la
  privacidad estricta lanzan un error al usar `localStorage`.

---

## 15. Validar el formulario

Validar es comprobar el dato **antes** de usarlo. Aquí validamos tres cosas: nombre, correo y
mensaje. Y mostramos el resultado en un `<p id="aviso">` con `aria-live="polite"`, para que también
lo anuncie un lector de pantalla.

    const formulario = $("#formulario");
    const aviso = $("#aviso");
    const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    function mostrarAviso(texto, tipo) {
      aviso.textContent = texto;
      aviso.className = "aviso " + tipo;   // «error» o «ok»
    }

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();             // sin servidor, no recargamos la página

      const nombre = $("#nombre").value.trim();
      const email = $("#email").value.trim();
      const mensaje = $("#mensaje").value.trim();

      if (nombre.length < 2) {
        mostrarAviso("Escribe tu nombre (2 letras o más).", "error");
        return;
      }
      if (!RE_EMAIL.test(email)) {
        mostrarAviso("Ese correo no parece válido: revisa el @ y el punto.", "error");
        return;
      }
      if (mensaje.length < 10) {
        mostrarAviso("Cuéntame algo más: al menos 10 letras.", "error");
        return;
      }

      mostrarAviso("¡Gracias, " + nombre + "! Tu mensaje está listo.", "ok");
      formulario.reset();
    });

Tres ideas que valen para cualquier formulario del mundo:

- `evento.preventDefault()` — cancela el comportamiento por defecto del `submit` (recargar y enviar).
  Sin esto, la página parpadea y pierdes lo escrito.
- `.trim()` — quita los espacios de los extremos. Sin él, «   » (tres espacios) cuenta como un nombre
  válido.
- `return` dentro del `if` — sale de la función y no sigue comprobando. Se lee mejor que anidar
  `if` dentro de `if`.
- La expresión regular `/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i` se lee: «algo sin espacios ni arrobas, una
  arroba, algo sin espacios ni arrobas, un punto y al menos dos letras». **No** es perfecta (ninguna
  validación por expresión regular lo es: la única prueba definitiva de que un correo existe es
  enviarle algo), pero filtra los errores de tecleo.

**Compruébalo:** prueba a enviar vacío, con `ana@ejemplo` (sin punto) y con un mensaje corto. Cada
caso tiene que dar su mensaje.

---

## 16. Publicar tu página en internet

Tu página ya funciona en tu ordenador, pero solo tú la ves. Para compartirla hay dos caminos
gratuitos.

### Opción A · GitHub Pages (tu página, con dirección propia y versiones)

1. Crea una cuenta en [github.com](https://github.com/).
2. Crea un repositorio nuevo. Si quieres que la dirección sea `tunombre.github.io`, el repositorio
   debe llamarse exactamente `tunombre.github.io`.
3. Sube los archivos (`index.html`, `estilos.css`, `script.js`, `avatar.svg`) a la raíz del
   repositorio. Con «Add file → Upload files» basta.
4. Ve a **Settings → Pages**, elige *Source: Deploy from a branch*, rama `main`, carpeta `/ (root)` y
   guarda.
5. En un minuto o dos, tu página estará en `https://tunombre.github.io/`.

### Opción B · Netlify Drop (arrastrar y soltar, sin cuenta)

1. Entra en [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra **la carpeta** del proyecto a la ventana.
3. Te da una dirección tipo `https://nombre-random.netlify.app` al instante.

### Antes de publicar, revisa

- Los nombres de archivo coinciden **exactamente** (`Estilos.css` ≠ `estilos.css`: en los servidores
  se distingue mayúsculas de minúsculas; en Windows no, y por eso este error se descubre tarde).
- Todas las rutas son relativas (`estilos.css`, no `C:\Users\...\estilos.css`).
- El `title` y la `meta description` están escritos.
- Lo has probado en el móvil de verdad, no solo estrechando la ventana.

---

## 17. Errores típicos (y su solución)

| Síntoma | Causa casi siempre | Solución |
|---|---|---|
| El CSS no se aplica | Ruta mal escrita o el archivo está en otra carpeta | Revisa `href="estilos.css"` y que el archivo exista |
| Las tildes salen raras (`Ã¡`) | Falta `charset` o el archivo se guardó en otra codificación | Añade `<meta charset="UTF-8">` y guarda en UTF-8 |
| En el móvil se ve diminuto | Falta el `meta viewport` | Añádelo en el `<head>` |
| Todo se sale de la pantalla al poner `padding` | Falta `box-sizing: border-box` | Ponlo al principio del CSS |
| «Cannot read properties of null» | El script busca un elemento que no existe (o corre antes de que exista) | Revisa el id y pon el `<script>` al final del `<body>` |
| El clic no hace nada | Error de JavaScript anterior que corta la ejecución | Mira la consola con `F12`: el primer error es el que importa |
| El formulario recarga la página | Falta `evento.preventDefault()` | Añádelo al principio del `submit` |
| La imagen no carga | Ruta o extensión mal, o el archivo no está en la carpeta | Comprueba `src` y el nombre real del archivo |
| En el ordenador se ve bien y en el servidor no | Mayúsculas en los nombres de archivo | Usa todo en minúsculas |
| Un elemento no cambia de color | Otro selector más específico gana | Revisa el orden y la especificidad (`#id` gana a `.clase`) |

---

## 18. 10 ejercicios para seguir

1. Cambia la paleta entera tocando **solo** las variables de `:root`. Comprueba que todo cambia.
2. Añade una sección «Mis libros favoritos» con una lista y su enlace en el menú.
3. Pon una cuarta tarjeta en proyectos y mira cómo se recoloca la rejilla sola.
4. Añade un botón que cuente clics y muestre el número (variables + `textContent`).
5. Haz que el botón del contador guarde el número en `localStorage`: al volver, sigue ahí.
6. Cambia el formulario para pedir también un «asunto» y valídalo (mínimo 3 letras).
7. Añade un campo de teléfono y valida que tenga 9 cifras.
8. Pon una galería de imágenes con `grid-template-columns: repeat(3, 1fr)`.
9. Añade un botón «Copiar mi correo» que use `navigator.clipboard.writeText(...)`.
10. Publica la página y mándale la dirección a alguien para que la abra en su móvil. Anota lo que
    te diga: ahí empieza el trabajo de verdad.

---

## 19. Chuleta final

**HTML**

    <h1>Título</h1>                 <p>Párrafo</p>
    <ul><li>Elemento</li></ul>      <a href="url">Enlace</a>
    <img src="foto.png" alt="Descripción" width="200" height="200">
    <section id="contacto">…</section>
    <label for="nombre">Nombre</label>
    <input id="nombre" type="text">
    <button type="submit">Enviar</button>

**CSS**

    selector { propiedad: valor; }

    .clase { }   #id { }   etiqueta { }   .padre .hijo { }   .caja:hover { }

    display: flex | grid | none
    flex-direction: row | column
    align-items: center        justify-content: space-between
    gap: 16px
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
    padding: 16px              margin: 0 auto
    border: 1px solid #ddd     border-radius: 12px
    background / color / font-size / font-weight / text-align
    max-width: 960px
    @media (max-width: 760px) { … }

**JavaScript**

    document.querySelector("#id")        // el primero que coincide
    document.querySelectorAll(".clase")  // todos
    elemento.addEventListener("click", () => { … })
    elemento.classList.add / remove / toggle("clase")
    elemento.textContent = "texto"
    elemento.value
    evento.preventDefault()
    localStorage.setItem("clave", "valor")
    localStorage.getItem("clave")

**El orden de trabajo que no falla:** primero el HTML con contenido real (aunque se vea feo),
después el CSS de arriba abajo (base → estructura → detalles), y el JavaScript al final. Y en cada
paso: guardar, recargar, mirar. Páginas grandes se construyen así, un paso pequeño cada vez.

---

*Proyecto «Mi Rincón» · HTML, CSS y JavaScript desde cero. Todo el código que se explica está en la
carpeta `mi-primera-web`.*
