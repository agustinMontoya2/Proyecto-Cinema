const moviesServices = require("../services/moviesServices");
module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesServices.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(error.status).json({
        error: "no se pudo",
      });
    }
  },
  postMovies: async (req, res) => {
    try {
      await moviesServices.addMovies(req.body);
      res.status(200).json({
        message: "Joya",
      });
    } catch (error) {
      res.status(error.status).json({
        error: "mal ahi",
      });
    }
  },
};
