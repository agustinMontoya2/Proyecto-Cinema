const Movies = require("../models/movies");

module.exports = {
  getMovies: async () => {
    try {
      const arrayMovies = await Movies.find();
      return arrayMovies;
    } catch (error) {
      throw error;
    }
  },
  addMovies: async (objects) => {
    try {
      const newMovie = new Movies(objects);
      const res = await newMovie.save();
      return res;
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
