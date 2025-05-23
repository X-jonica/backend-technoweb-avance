const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json);

app.get("/", (req, res) => {
   res.send("Bienvenue sur mon backend Node.js 🎉");
});

module.exports = app;
