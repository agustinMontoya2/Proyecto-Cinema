const mongoose = require("mongoose");

require("dotenv").config();
const URI = process.env.URI;

module.exports = {
  dbConnect: async () => {
    try {
      await mongoose.connect(URI); // ('DB://IP:PORT/RUTA')
      console.log("Conectado a mongoose");
    } catch (error) {
      console.log("Error al conectar mongoose");
    }
  },
};
