const app = require("./src/server");
require("dotenv").config();
const { PORT, HOST } = process.env;

app.listen(PORT, HOST, () => console.log("servidor activado en " + PORT));
