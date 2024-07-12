const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesScheme = new Schema(
  {
    Title: { type: String, required: true, unique: true },
    year: { type: Number, min: 0, max: 2030 },
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String,
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", MoviesScheme);

module.exports = Movies;
