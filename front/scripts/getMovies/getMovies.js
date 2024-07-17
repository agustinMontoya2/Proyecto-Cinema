const categories = require("./categories");
const axios = require("axios");

module.exports = async function getMovies() {
  try {
    const movies = await axios("http://localhost:3000/movies/");
    categories(movies.data);
  } catch (error) {
    console.log(error.message + error);
    console.log("Hay algun error");
    alert("Salio todo mal. Ingresa a la consola para obtener mas informacion");
  }
};
