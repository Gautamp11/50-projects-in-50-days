const labels = document.querySelectorAll(".form-control label");

// extracting letter from label and wrapping it into span
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
