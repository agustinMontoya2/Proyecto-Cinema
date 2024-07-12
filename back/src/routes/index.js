const { Router } = require("express");
const router = Router();

const moviesRouter = require("./moviesRouter");
const seriesRouter = require("./seriesRouter");

router.get("/", (req, res) => {
  res.send("<h1>Inicio</h1>");
});
router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);

module.exports = router;
