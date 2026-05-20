/* ============================================================
   SBNN.INFO — script.js (commun aux 3 pages)
   Modules :
     1. Date dans le header
     2. Ouverture Google Drive (Magazine)
     3. Lightbox (Galerie)
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initDate();
  initLightbox();
});


/* ────────────────────────────────────────────
   1. DATE DANS LE HEADER
   ──────────────────────────────────────────── */
function initDate() {
  const el = document.getElementById('currentDate');
  if (!el) return;
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  el.textContent = new Date().toLocaleDateString('fr-FR', options);
}


/* ────────────────────────────────────────────
   2. OUVERTURE GOOGLE DRIVE
   Appelé via onclick="openDrive('URL')" dans index.html
   ──────────────────────────────────────────── */
function openDrive(url) {
  if (!url || url.includes('votre-lien')) {
    alert('Lien Google Drive à renseigner dans le HTML.');
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}


/* ────────────────────────────────────────────
   3. LIGHTBOX — galerie.html
   ──────────────────────────────────────────── */
function initLightbox() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(figure) {
  const lightbox = document.getElementById('lightbox');
  const img      = document.getElementById('lightboxImg');
  const caption  = document.getElementById('lightboxCaption');
  if (!lightbox || !img) return;

  const source  = figure.querySelector('img');
  const capText = figure.querySelector('figcaption');

  img.src = source ? source.src : '';
  img.alt = source ? source.alt : '';
  caption.textContent = capText ? capText.textContent : '';

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

/* Exposition globale (onclick dans le HTML) */
window.openDrive     = openDrive;
window.openLightbox  = openLightbox;
window.closeLightbox = closeLightbox;