const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

// import des routes
const utilisateurRoutes = require("./routes/utilisateur.routes");
app.use("/api/utilisateur", utilisateurRoutes);

const welcomeRoutes = require("./routes/welcome.routes");
app.use("/", welcomeRoutes);

module.exports = app;
