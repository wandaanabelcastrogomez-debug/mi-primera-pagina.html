/* =========================================================
   script.js · Mi Rincón
   ---------------------------------------------------------
   1. El año del pie
   2. Menú del móvil
   3. Modo oscuro (con memoria)
   4. Validar el formulario
   ========================================================= */
"use strict";

/* Un atajo para no escribir document.querySelector cada vez */
const $ = (selector) => document.querySelector(selector);

/* ---------- 1. El año del pie ---------- */
const anio = $("#anio");
if (anio) {
  anio.textContent = new Date().getFullYear();
}

/* ---------- 2. Menú del móvil ---------- */
const botonMenu = $("#menuBoton");
const menu = $("#menu");

if (botonMenu && menu) {
  botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  /* al elegir una sección, el menú se cierra */
  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- 3. Modo oscuro ---------- */
const botonTema = $("#botonTema");
const iconoTema = $("#iconoTema");
const textoTema = $("#textoTema");
const CLAVE_TEMA = "mi-rincon-tema";

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  if (botonTema) botonTema.setAttribute("aria-pressed", oscuro ? "true" : "false");
  if (iconoTema) iconoTema.textContent = oscuro ? "☀️" : "🌙";
  if (textoTema) textoTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
}

/* ¿Qué tema toca al abrir la página?
   1º lo que eligió la persona antes, 2º lo que prefiera su sistema */
let temaGuardado = null;
try {
  temaGuardado = localStorage.getItem(CLAVE_TEMA);
} catch (error) {
  /* algunos navegadores bloquean el almacenamiento: seguimos sin memoria */
}

const prefiereOscuro =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

aplicarTema(temaGuardado === "oscuro" || (temaGuardado === null && prefiereOscuro));

if (botonTema) {
  botonTema.addEventListener("click", () => {
    const quedaraOscuro = !document.body.classList.contains("oscuro");
    aplicarTema(quedaraOscuro);
    try {
      localStorage.setItem(CLAVE_TEMA, quedaraOscuro ? "oscuro" : "claro");
    } catch (error) {}
  });
}

/* ---------- 4. Validar el formulario ---------- */
const formulario = $("#formulario");
const aviso = $("#aviso");
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function mostrarAviso(texto, tipo) {
  if (!aviso) return;
  aviso.textContent = texto;
  aviso.className = "aviso" + (tipo ? " " + tipo : "");
}

if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    /* sin servidor, evitamos que la página se recargue */
    evento.preventDefault();

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

    mostrarAviso("¡Gracias, " + nombre + "! Tu mensaje está listo (esto es un formulario de práctica).", "ok");
    formulario.reset();
  });
}
