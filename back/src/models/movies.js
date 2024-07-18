const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesScheme = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required."],
    },
    year: {
      type: Number,
      min: [0, "The year cannot be negative."],
      max: [9999, "The year cannot be greater than 9999."],
      required: [true, "The year is required"],
    },
    director: {
      type: String,
      required: [true, "The director is required"],
    },
    duration: {
      type: String,
      required: [true, "The duration is required"],
    },
    genre: {
      type: [String],
      required: [true, "The genre is required"],
    },
    rate: {
      type: Number,
      min: [0, "The rating cannot be less than 0."],
      max: [10, "The rating cannot be higher than 10."],
      required: [true, "The rate is required"],
    },
    poster: {
      type: String,
      required: [true, "The poster is required"],
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", MoviesScheme);

module.exports = Movies;
