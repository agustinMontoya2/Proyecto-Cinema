const moviesServices = require("../services/moviesServices");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesServices.getMovies();
      res.json(movies);
    } catch (error) {
      res.status(error.response.status).send(error.message);
    }
  },

  postMovies: async (req, res) => {
    try {
      const newMovie = await moviesServices.addMovies(req.body);
      res.json(newMovie);
    } catch (error) {
      res.send(error);
    }
  },
};
