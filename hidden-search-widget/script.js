const searchBtnEl = document.querySelector(".search-btn");
const inputEl = document.querySelector(".input");
const searchEl = document.querySelector(".search");

searchBtnEl.addEventListener("click", () => {
  searchEl.classList.toggle("active");
  inputEl.focus();
});
