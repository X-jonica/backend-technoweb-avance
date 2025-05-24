const express = require("express");
const router = express.Router();
const welcomeController = require("../controllers/welcome.controller");

// Route par default
router.get("/", welcomeController.welcome);

module.exports = router;
