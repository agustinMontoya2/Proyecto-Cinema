const Movies = require("../models/movies");

module.exports = {
  getMovies: async () => {
    try {
      const arrayMovies = await Movies.find();
      console.log(arrayMovies);
      return arrayMovies;
    } catch (error) {}
  },
  addMovies: async (movie) => {
    try {
      tempData.push(movie);
    } catch (error) {}
  },
};
