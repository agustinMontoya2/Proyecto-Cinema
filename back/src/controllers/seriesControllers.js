const seriesServices = require("../services/seriesServices");
module.exports = {
  inicio: async (req, res) => {
    try {
      //   const espera = await seriesServices.espera();
      res.status(200).json({ estado: "por ahora nada" });
    } catch (error) {
      res.status(error.status).json({
        Error: "ese",
      });
    }
  },
};
