const iconToggleEl = document.getElementById("toggle-icon");
const navEl = document.getElementById("nav");

iconToggleEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
});
