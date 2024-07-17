const axios = require("axios");
// requiere("../getMovies")

module.exports = async function postMovie(movie) {
  try {
    const response = await axios.post("http://localhost:3000/movies", movie);
    console.log("Posted succesfully");
  } catch (error) {
    console.error("Error setting up request:", error);
  }
};
