'use strict';

const getCurrDate = function () {
  return new Date().getFullYear();
};

const imagesToLoad = [
  'img/fede-piano-barcelona.png',
  'img/fede-kew-gardens-cortada.png',
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

/*
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    const target = document.getElementById(this.href.slice(1));
    const headerHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  });
});
*/
