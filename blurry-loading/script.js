const bg = document.querySelector(".bg");
const loader = document.querySelector(".loader");
let loading = 0;
let blur = 50;

let interval = setInterval(() => {
  loading++;
  blur = blur - 0.5;
  loader.textContent = `${loading}%`;
  bg.style.filter = `blur(${blur}px)`;
  loader.style.opacity = 1 - loading / 100;
  if (loading > 99) {
    clearInterval(interval);
    loader.textContent = "";
  }
}, 20);
