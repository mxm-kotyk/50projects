const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let load = 0;

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const blurring = () => {
  load += 1;

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

let interval = setInterval(blurring, 30);
