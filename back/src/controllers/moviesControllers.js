const moviesServices = require("../services/moviesServices");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesServices.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Driver error",
        details: error.message,
      });
    }
  },

  postMovies: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await moviesServices.addMovies(
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
      );
      res.status(201).json({
        message: "Movie posted successfully",
        newMovie,
      });
    } catch (error) {
      res.status(500).json({
        error: "Driver error",
        details: error.message,
      });
    }
  },
};
