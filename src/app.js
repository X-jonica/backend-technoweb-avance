const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(cors());

// import des routes
const welcomeRoutes = require("./routes/welcome.routes");
app.use("/", welcomeRoutes);

const chossureRoutes = require("./routes/chossure.routes");
app.use("/api/chossures", chossureRoutes);

const panierRoutes = require("./routes/panier.routes");
app.use("/api/panier", panierRoutes);

module.exports = app;
