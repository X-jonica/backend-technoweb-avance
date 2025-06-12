const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(cors("*"));

// Swagger configuration
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Chossure, Panier & Utilisateur",
      version: "1.0.0",
      description: "Documentation de l'API",
    },
    servers: [
      {
        url: "https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// import des routes
const welcomeRoutes = require("./routes/welcome.routes");
app.use("/", welcomeRoutes);

const chossureRoutes = require("./routes/chossure.routes");
app.use("/api/chossures", chossureRoutes);

const panierRoutes = require("./routes/panier.routes");
app.use("/api/panier", panierRoutes);

const utilisateurRoutes = require("./routes/utilisateur.routes");
app.use("/api/utilisateurs", utilisateurRoutes);

module.exports = app;
