const { Router } = require("express");
const seriesControllers = require("../controllers/seriesControllers");
const seriesRouter = Router();

seriesRouter.use("/", seriesControllers.inicio);

module.exports = seriesRouter;
