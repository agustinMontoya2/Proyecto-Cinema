module.exports = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({ error: "All fields are required." });
  }
  next();
};
