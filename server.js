const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello depuis mon backend!");
});

app.listen(port, () => {
    console.log(`Application demaré sur le port : http://localhost:${port}`);
});
