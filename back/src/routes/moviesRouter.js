const { Router } = require("express");
const moviesControllers = require("../controllers/moviesControllers");
const moviesRouter = Router();

moviesRouter.get("/", moviesControllers.getMovies);
moviesRouter.post("/", moviesControllers.postMovies);

module.exports = moviesRouter;
