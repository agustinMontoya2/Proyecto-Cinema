const createMovie = require("./createMovie");

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.querySelector("#sendForm");
  const btnDelete = document.querySelector("#deleteValue");

  const title = document.getElementById("inputTitle");
  const year = document.getElementById("inputYear");
  const director = document.getElementById("inputDirector");
  const duration = document.getElementById("inputDuration");
  const genres = document.getElementById("inputGenres");
  const rate = document.getElementById("inputRate");
  const poster = document.getElementById("inputImg");

  btnDelete.addEventListener("click", () => {
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    genres.value = "";
    rate.value = "";
    poster.value = "";
  });
  btnForm.addEventListener("click", () => {
    if (
      title.value.length > 0 &&
      year.value > 0 &&
      year.value < 9999 &&
      director.value.length > 0 &&
      duration.value.length > 0 &&
      genres.value.length > 0 &&
      rate.value > 0 &&
      rate.value < 10 &&
      poster.value.length > 0
    ) {
      alert("hay titulo");
    }
  });
});
