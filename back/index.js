require("dotenv").config();
const app = require("./src/server");
const dbConnect = require("./src/config/dbConnect");

const { PORT, HOST } = process.env;

async function openServer() {
  try {
    await dbConnect.dbConnect();
    app.listen(PORT, HOST, () =>
      console.log(`Server activated on ${HOST}:${PORT}`)
    );
  } catch (error) {
    console.error(
      "Something went wrong when trying to activate the server",
      error
    );
  }
}

openServer();
