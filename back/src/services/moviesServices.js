const Movies = require("../models/movies");

module.exports = {
  getMovies: async () => {
    try {
      const arrayMovies = await Movies.find();
      console.log("Movies geted");
      return arrayMovies;
    } catch (error) {
      throw error;
    }
  },
  addMovies: async (title, year, director, duration, genre, rate, poster) => {
    try {
      const newMovie = new Movies({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      await newMovie.save();
      console.log("Movie posted.");
      return newMovie;
    } catch (error) {
      throw error;
    }
  },
};

//todo Agregar clase movies en services
/*
Te sugerimos como extra que, en lugar de responder con objetos literales de películas, 
en tu módulo de servicio implementes la clase Movie, y respondas con instancias de esta clase. 
Si logras implementar esto, te asegurarás la integridad de los datos. Además, como un desafío extra,
te proponemos que, dentro del constructor de la clase, 
arrojes un error en caso de que esta función no reciba adecuadamente las propiedades 
“title”, “poster” y “director”.
*/
