const faqToggleEl = document.querySelectorAll(".faq-toggle");


faqToggleEl.forEach((toggleIcon) => {
  toggleIcon.addEventListener("click", () => {
    toggleIcon.parentNode.classList.toggle("active");
  });
});
