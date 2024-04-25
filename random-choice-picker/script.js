const tagsEl = document.getElementById("tags");
const textAreaEl = document.getElementById("text");
const resetBtnEl = document.getElementById("reset");

textAreaEl.focus();
textAreaEl.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function randomSelect() {
  const iteration = 30;
  const tags = document.querySelectorAll(".tag");

  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * tags.length);
    const randomTag = tags[randomIndex];
    randomTag.classList.add("active");
    setTimeout(() => {
      randomTag.classList.remove("active");
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tags.length);
      const randomTag = tags[randomIndex];
      randomTag.classList.add("active");
    }, 100);
  }, iteration * 100);
}

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

resetBtnEl.addEventListener("click", () => {
  tagsEl.innerHTML = "";
  textAreaEl.value = "";
});
