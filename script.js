'use strict';

const getCurrDate = function () {
  return new Date().getFullYear();
};

const imagesToLoad = [
  'img/trucombo-cassette-abierto.png',
  'img/fotografia-cassettes-piano.png',
  'img/arp-improv-no1.png',
  'img/fede-piano-barcelona.png',
  'img/fede-kew-gardens-cortada.png',
  'img/7-10-22.png',
  'img/tru-combo.png',
  'img/fotografia-vol1.png',
  'img/fotografia-vol2.png',
  'img/hidden-toys.png',
  'img/design-cuando-eramos-felices-fondo.png',
  'img/design-fr.png',
  'img/design-modern-better.png',
  'img/design-musica-clasica-fondo.png',
  'img/design-nanen.png',
  'img/design-pasado-oscuro.png',
];

function preloadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = imageUrl;
  });
}

async function preloadImages() {
  for (const imageUrl of imagesToLoad) {
    await preloadImage(imageUrl);
  }
}

preloadImages();
