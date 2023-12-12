'use strict';

const getCurrDate = function () {
  return new Date().getFullYear();
};

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
