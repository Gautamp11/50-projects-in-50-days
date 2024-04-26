const smallCups = document.querySelectorAll(".cup.cup-small");
const litres = document.querySelector(".litres");
const percentage = document.querySelector(".percentage");
const remaining = document.querySelector(".remaining");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => fillSmallCup(idx));
});

function fillSmallCup(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx + 1].classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup.cup-small.full").length;
  const totalCups = document.querySelectorAll(".cup.cup-small").length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 320}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = "visible";
    litres.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
