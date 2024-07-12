const axios = require("axios");

const tempData2 = require("../../../front/scripts/tempData");

tempData2.forEach((movie) => tempData.push(movie));

module.exports = {
  getMovies: async () => {
    try {
      const arrayMovies = await axios(
        "https://students-api.up.railway.app/movies"
      );
      return arrayMovies.data;
    } catch (error) {}
  },
  addMovies: async (movie) => {
    try {
      tempData.push(movie);
    } catch (error) {}
  },
};
