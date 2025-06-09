const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());

// import des routes
const utilisateurRoutes = require("./routes/utilisateur.routes");
app.use("/api/utilisateur", utilisateurRoutes);

const welcomeRoutes = require("./routes/welcome.routes");
app.use("/", welcomeRoutes);

const chossureRoutes = require("./routes/chossure.routes");
app.use("/api/chossures", chossureRoutes);

module.exports = app;
