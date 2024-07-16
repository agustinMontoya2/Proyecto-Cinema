const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

const router = Router();

// Root route
router.get("/", (req, res) => {
  res.send("<h1>Hello! Use /movies to access movies</h1>");
});

// Movies routes
router.use("/movies", moviesRouter);

module.exports = router;
