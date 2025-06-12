const express = require("express");
const router = express.Router();
const welcomeController = require("../controllers/welcome.controller");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Message de bienvenue
 *     responses:
 *       200:
 *         description: Succès
 */
router.get("/", welcomeController.welcome);

module.exports = router;
