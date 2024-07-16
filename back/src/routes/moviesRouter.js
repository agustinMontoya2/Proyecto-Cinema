const { Router } = require("express");
const moviesControllers = require("../controllers/moviesControllers");
const validacionMiddleware = require("../middlewares/validacion");
const moviesRouter = Router();

moviesRouter.get("/", moviesControllers.getMovies);
moviesRouter.post("/", validacionMiddleware, moviesControllers.postMovies);

module.exports = moviesRouter;
    