const Movies = require("../models/movies");

module.exports = {
  getMovies: async () => {
    try {
      const arrayMovies = await Movies.find();
      console.log("Movies geted");
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
      console.log("Movie posted.");
      return newMovie;
    } catch (error) {
      throw error;
    }
  },
};
