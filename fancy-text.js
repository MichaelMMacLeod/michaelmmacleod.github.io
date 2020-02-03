"use strict";

const fancyElements = document.getElementsByClassName("fancy-text");
const fancyIds = Array.prototype.map.call(fancyElements, v => v.id);

function randomInt(range) {
  return Math.floor(Math.random() * range);
}

function fancyMove() {
  fancyIds.map(id => {
    const range = 10;
    const top = randomInt(range) - range / 2;
    const left = randomInt(range) - range / 2;
    const translateString = `translate3d(${top}rem, ${left}rem, 0)`;
    document.getElementById(id).style.transform = translateString;
  });
}

function resize() {
  const spinner = document.getElementById("spinner-image");
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const size = Math.min(vw, vh);
  spinner.style.width = `${size}px`;
  spinner.style.height = `${size}px`;
  spinner.style.bottom = `${-size/2}px`;
};


resize();
fancyMove();

setInterval(fancyMove, 3000);
window.onresize = resize;
