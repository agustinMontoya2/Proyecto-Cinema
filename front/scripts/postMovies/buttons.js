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
      movie.year >= 0 &&
      movie.year <= 9999 &&
      movie.director &&
      movie.duration &&
      movie.genre &&
      movie.rate >= 0 &&
      movie.rate <= 10 &&
      movie.poster
    ) {
      postMovie(movie);
      alert("Added succesfully");
    } else {
      alert(`
        All fields are required
        The year cannot be more than 4 digits.
        The score must be from 0 to 10`);
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
