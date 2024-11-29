module.exports = {
  mode: "production",
  entry: {
    index: "./scripts/getMovies/index.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
};
