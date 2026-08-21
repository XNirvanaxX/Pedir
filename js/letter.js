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
const carta = `Bueno nose donde estaras leyendo esto, si en mi casa o en la playa o en un parque.
Como ya abras visto la caja, te hice una pregunta pero antes de saber tu respuesta me gustaria dedicarte unas palabras y sentimientos. Como ambos sabemos somos personas que tenemos bastante historia entre nosotros, para ser exactos 4 años y 1 mes de historia. Somos personas que siempre hemos estado juntos y nos hemos acompañado, hemos reido, hemos pasado momentos triste, momentos felices, nos hemos aconsejado en diferentes cosas, hemos visto tanto amores como desamores.

A sido una relacion con mucha historia la cual no pienso que termine algun dia, tal vez existiera la idea que si yo me enamorara las cosas se podrian romper o cambiar. Creo que evidentemente como personas no hemos cambiado no exactamente como nos tratamos regularmente. No es como que las cosas fueran a cambiar para mal. Simplemente entraremos a una nuevo capitulo o etapa de esta maravillosa historia.

Siempre te he visto como una mujer maravillosa, porque es lo que eres, eres una mujer con un corazon hermoso y estar contigo es como que el tiempo fluyera rapido porque cuando uno disfruta la compañia de alguien que le gusta desea que nunca se acabara ese momento.
  
Todo lo que deseo contigo es darte todo el amor del mundo o todo el amor que mi corazon pueda darte y creeme todavia no conoces todo lo que yo haria por ti, yo quiero darte felicidad, que te sientas segura porque todo lo que quiero es abrazarte todos los dias, darte un beso y que sientas que tienes a alguien a tu lado que te apoyara aunque tuvieras el mundo en contra.

Romeisi, cada momento a tu lado es felicidad para mi vida, eres lo que mas deseo en este mundo, ser el hombre que este a tu lado para mi seria un honor, contigo me gustaria tener todo, vivir tantas cosas de la vida, contigo veo mi presente y futuro. 

Aunque la pregunta sea si quieres ser mi novia, mas que quiero que seas la mujer que este a mi lado, la persona con la que celebrar logros, vivir cosas buenas, tener algo hermoso, un hogar hermoso, dias hermosos. No todo siempre sera color de rosa pero en esos alti bajos, siempre estar juntos y apoyarnos, que solo importemos nosotros. 

Te amo romeisi, este sentimiento no es algo momentaneo o algo con fecha de caducidad. Si alguien me preguntara que es estar enamorado describiria como me siento contigo, cuando te miro, cuando te beso, cuando te abrazo, cuando hablamos. Eres la mujer que quiero en mi vida, eres la persona que al despertarme quiero ver a mi lado, eres la persona que mas extraño cuando no estas cerca. 


Romeisi tu eres a quien quiero tener en mi vida, quiero que seas tu quien este a mi lado y quiero ser yo quien este a tu lado. Quiero que seamos grandes o exitoso juntos. 

Cuando digo que te amo es con todas tus cosas buenas tanto como las malas, te amo tal y como eres sin importar que tan que estes en tus mejores dias y Tambien en los mas dificiles.

Yo pienso en ti todo el dia y cuando no estoy contigo solo pienso en estar contigo, cuando te volvere a ver, cuando volvere a abrazarte, cuando volvere a ver esos bellos ojos. 

Te amo romeisi, eres mi vida entera y eres lo mas important y lo que nunca quiero que me falte ya que eres tan necesaria como el aire para nosotros los humanos.
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
