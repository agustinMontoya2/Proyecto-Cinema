const postMovie = require("./postMovie");

const title = document.getElementById("inputTitle");
const year = document.getElementById("inputYear");
const director = document.getElementById("inputDirector");
const duration = document.getElementById("inputDuration");
const genres = document.getElementById("inputGenres");
const rate = document.getElementById("inputRate");
const poster = document.getElementById("inputImg");

module.exports = {
  post: () => {
    const movie = {
      title: title.value,
      year: Number(year.value),
      director: director.value,
      duration: duration.value,
      genre: [genres.value],
      rate: Number(rate.value),
      poster: poster.value,
    };
    if (
      movie.title &&
      movie.year &&
      movie.director &&
      movie.duration &&
      movie.genre &&
      movie.rate &&
      movie.poster
    ) {
      console.log("Estan todos los campos");
      postMovie(movie);
    } else {
      alert("Todos los campos son requeridos");
    }
  },
  clean: () => {
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    genres.value = "";
    rate.value = "";
    poster.value = "";
    console.log("limpiado");
  },
};
