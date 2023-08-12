const express = require("express");
require("dotenv").config();

const { checkHealth, handleNotFoundPage } = require("./app");

const app = express();

app.get("/health", checkHealth);

app.use(handleNotFoundPage);

app.listen(5000, () => {
  console.log(`Servidor a la escucha en el puerto http//:5000`);
});
