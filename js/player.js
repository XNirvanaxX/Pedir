/* ==========================================================
   Reproductor de música estilo Spotify
   👉 AÑADE TUS CANCIONES en el arreglo "tracks".
      Pon los archivos .mp3 en la carpeta /music y usa la ruta.
   ========================================================== */

const tracks = [
  { title: "Santuario de Girasol", artist: "Aisack1ng", src: "music/cancion1.mp3" },
  { title: "Que Locura Enamorarme de ti",   artist: "Eddie Santiago", src: "music/cancion2.mp3" },
  { title: "Lluvia, Tu me haces Falta, Mia",    artist: "Eddie Santiago", src: "music/cancion3.mp3" },
  { title: "Corazon sin Cara",    artist: "Prince Royce", src: "music/cancion4.mp3" },
  { title: "Quiero Perderme Contigo",    artist: "Jose Jose", src: "music/cancion5.mp3" }
];

const audio       = document.getElementById('audio');
const playBtn     = document.getElementById('playBtn');
const seek        = document.getElementById('seek');
const vol         = document.getElementById('vol');
const curTime     = document.getElementById('curTime');
const durTime     = document.getElementById('durTime');
const trackTitle  = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const playlist    = document.getElementById('playlist');
const plItems     = document.getElementById('plItems');
let idx = 0;

function loadTrack(i) {
  idx = (i + tracks.length) % tracks.length;
  const t = tracks[idx];
  audio.src = t.src;
  trackTitle.textContent = t.title;
  trackArtist.textContent = t.artist;
  document.querySelectorAll('#plItems li').forEach((li, n) => li.classList.toggle('active', n === idx));
}

function playPause() {
  if (!audio.src) return;
  if (audio.paused) { audio.play(); playBtn.textContent = '⏸'; }
  else { audio.pause(); playBtn.textContent = '▶'; }
}

playBtn.onclick = playPause;
document.getElementById('nextBtn').onclick = () => { loadTrack(idx + 1); audio.play().catch(() => {}); playBtn.textContent = '⏸'; };
document.getElementById('prevBtn').onclick = () => { loadTrack(idx - 1); audio.play().catch(() => {}); playBtn.textContent = '⏸'; };

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    seek.value = (audio.currentTime / audio.duration) * 100;
    curTime.textContent = fmt(audio.currentTime);
    durTime.textContent = fmt(audio.duration);
  }
});
seek.addEventListener('input', () => { if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration; });
vol.addEventListener('input', () => audio.volume = vol.value / 100);
audio.volume = 0.8;
audio.addEventListener('ended', () => document.getElementById('nextBtn').onclick());

function fmt(s) {
  const m = Math.floor(s / 60), ss = Math.floor(s % 60);
  return m + ':' + (ss < 10 ? '0' : '') + ss;
}

document.getElementById('listBtn').onclick = () => playlist.classList.toggle('show');
tracks.forEach((t, i) => {
  const li = document.createElement('li');
  li.innerHTML = `<span>${t.title}</span><span style="opacity:.6">${t.artist}</span>`;
  li.onclick = () => { loadTrack(i); audio.play().catch(() => {}); playBtn.textContent = '⏸'; playlist.classList.remove('show'); };
  plItems.appendChild(li);
});
loadTrack(0);
