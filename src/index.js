const express = require("express");
const bodyParser = require("body-parser");

// Importar el api router
const apiRouter = require("./routes/api");

const app = express();
const port = 3002;

// Requerir para poder sincronizar la db
require("./db");

// Configuraciones y middelwers
// con app.use se lanza el middleware
app.use(bodyParser.json()); // Lanza middlewew con la función json.
app.use(bodyParser.urlencoded({ extended: true })); // Codifica la url.

// Todas las peticiones que vengan con el prefijo api se envía para que lo gestione al api router
app.use("/api", apiRouter);

// Levantar el servidor
app.listen(port, () => {
  console.log("Servidor iniciado!");
});
