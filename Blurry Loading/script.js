const loadTextEl = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

// loadTextEl.style.opacity = '20%';
// bg.style.filter = 'blur(0px)';

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadTextEl.style.opacity = `${100 - load}`;
  loadTextEl.innerText = `${load}%`;
  bg.style.filter = `blur(${100 - load}px)`;
}
