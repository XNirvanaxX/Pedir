/* ==========================================================
   Corazones flotantes de fondo (tsParticles)
   Puedes cambiar cantidad, colores y velocidad aquí.
   ========================================================== */
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: { value: 28, density: { enable: true, area: 900 } },
    color: { value: ["#f7b7c8", "#e98aa8", "#c9b6e4"] },
    shape: { type: "character", character: [{ value: "❤", font: "Verdana", weight: "400" }] },
    opacity: { value: { min: 0.25, max: 0.7 } },
    size: { value: { min: 8, max: 20 } },
    move: {
      enable: true,
      direction: "top",
      speed: { min: 0.6, max: 1.8 },
      outModes: { default: "out" }
    },
    wobble: { enable: true, distance: 12, speed: 4 }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 80 } }
  },
  detectRetina: true
});
