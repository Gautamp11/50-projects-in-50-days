const songs = [
  "aj-styles",
  "roman-reigns",
  "seth-rollins",
  "john-cena",
  "randy-orton",
];

songs.forEach((song) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = song;
  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    songs.forEach((song) => {
      document.getElementById(song).pause();
    });
    document.getElementById(song).play();
  });
});
