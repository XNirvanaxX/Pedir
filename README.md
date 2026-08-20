# 💗 Carta R + R

Página romántica interactiva: corazones flotantes, portada con corazón "R+R",
sobre que se abre, carta con efecto de máquina de escribir y reproductor de música.

## Estructura

```
proyecto felicidad/
├── index.html          → estructura de la página (lo que se ve)
├── css/
│   └── style.css       → todos los estilos y colores
├── js/
│   ├── particles.js    → corazones flotantes del fondo
│   ├── letter.js       → sobre + carta + efecto de escritura  ✍️ TU CARTA AQUÍ
│   └── player.js       → reproductor de música               🎵 TUS CANCIONES AQUÍ
└── music/              → pon aquí tus archivos .mp3
```

## Cómo probarlo
Abre `index.html` con doble clic (o arrástralo al navegador).

> Nota: para que la música cargue bien, es mejor abrirlo con un servidor local.
> Si tienes Python instalado, en esta carpeta ejecuta:
> `python -m http.server` y entra a http://localhost:8000

## Qué editar
- **La carta:** variable `carta` en `js/letter.js`
- **Las canciones:** arreglo `tracks` en `js/player.js` (y copia los .mp3 a `music/`)
- **Los colores:** variables `:root` al inicio de `css/style.css`
- **Las iniciales del corazón:** texto `R+R` en `index.html`
