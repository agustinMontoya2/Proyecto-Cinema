const Movies = require("../models/movies");

module.exports = {
  getMovies: async () => {
    try {
      const arrayMovies = await Movies.find();
      console.log(arrayMovies);
      return arrayMovies;
    } catch (error) {
      throw error;
    }
  },
  addMovies: async (title, year, director, duration, genre, rate, poster) => {
    try {
      const newMovie = new Movies({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      await newMovie.save();
      return newMovie;
    } catch (error) {
      throw error;
    }
  },
};
