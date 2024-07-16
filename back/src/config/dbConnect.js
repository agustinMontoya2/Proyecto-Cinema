const mongoose = require("mongoose");

require("dotenv").config();
const URI = process.env.URI;

module.exports = {
  dbConnect: async () => {
    try {
      await mongoose.connect(URI); // ('DB://IP:PORT/RUTA')
      console.log("Conected to Mongoose");
    } catch (error) {
      console.log("Error connecting Mongoose");
    }
  },
};
