// 100b8cc8109126e14f5fa8335c2f6452
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=100b8cc8109126e14f5fa8335c2f6452";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=100b8cc8109126e14f5fa8335c2f6452&query='";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

function getClassByVote(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const roundedVote = vote_average.toFixed(1);

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path} alt="${title}"
        />
        <div class="movie-info">
          <h3>Movie ${title}</h3>
          <span class="${getClassByVote(roundedVote)}">${roundedVote}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>`;

    main.appendChild(movieEl);
  });
}

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
