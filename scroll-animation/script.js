const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
  const triggerHeight = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    if (box.getBoundingClientRect().top < triggerHeight)
      box.classList.add("show");
    else box.classList.remove("show");
  });
});
