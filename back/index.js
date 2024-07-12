const app = require("./src/server");
const dbConnect = require("./src/config/dbConnect");

require("dotenv").config();
const { PORT, HOST } = process.env;

async function openServer() {
  try {
    await dbConnect.dbConnect();
    await app.listen(PORT, HOST, () =>
      console.log("servidor activado en " + PORT)
    );
  } catch (error) {
    console.log("algo salio mal al intentar activar el servidor");
  }
}

openServer();
