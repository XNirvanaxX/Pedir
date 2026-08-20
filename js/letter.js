/* ==========================================================
   Portada -> Sobre -> Carta con efecto máquina de escribir
   👉 EDITA TU CARTA en la variable "carta" de abajo.
   ========================================================== */

const cover       = document.getElementById('cover');
const envWrap     = document.getElementById('envWrap');
const envelope    = document.getElementById('envelope');
const backBtn     = document.getElementById('backBtn');
const overlay     = document.getElementById('letterOverlay');
const letterText  = document.getElementById('letterText');
const letterClose = document.getElementById('letterClose');

/* ✍️  Escribe aquí tu carta. Usa saltos de línea normales. */
const carta = `Desde el día en que te conocí, todo cambió de color.

Tu sonrisa se volvió mi lugar favorito y tu risa, la canción que nunca me canso de escuchar.

Gracias por cada abrazo, cada mensaje y cada "buenos días". Contigo hasta lo simple se siente extraordinario.

Te amo hoy, mañana y siempre.
— R 💗`;

/* Portada -> Sobre */
document.getElementById('heartBtn').addEventListener('click', () => {
  cover.style.display = 'none';
  envWrap.classList.add('show');
  backBtn.classList.add('show');
});

/* Abrir el sobre -> mostrar la carta */
let typingTimer = null;
envelope.addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  setTimeout(openLetter, 560); // espera a que la solapa suba
});

function openLetter() {
  overlay.classList.add('show');
  typeLetter();
}
function closeLetter() {
  overlay.classList.remove('show');
  clearTimeout(typingTimer);
  envelope.classList.remove('open');
}
letterClose.addEventListener('click', closeLetter);
overlay.addEventListener('click', e => { if (e.target === overlay) closeLetter(); });

/* Efecto máquina de escribir */
function typeLetter() {
  clearTimeout(typingTimer);
  let i = 0;
  letterText.innerHTML = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  letterText.appendChild(cursor);

  const tick = () => {
    if (i < carta.length) {
      cursor.insertAdjacentText('beforebegin', carta[i]);
      const prev = carta[i];
      i++;
      // pausa más larga en los saltos de línea
      typingTimer = setTimeout(tick, prev === '\n' ? 110 : 36);
    } else {
      typingTimer = setTimeout(() => cursor.remove(), 1200);
    }
  };
  tick();
}

/* Botón volver a la portada */
backBtn.addEventListener('click', () => {
  closeLetter();
  envWrap.classList.remove('show');
  backBtn.classList.remove('show');
  cover.style.display = 'flex';
});
