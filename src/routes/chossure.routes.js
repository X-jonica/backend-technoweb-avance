const express = require("express");
const router = express.Router();
const chossureController = require("../controllers/chossure.controller");

/**
 * @swagger
 * tags:
 *   name: Chossure
 *   description: Gestion des chossures
 */

/**
 * @swagger
 * /api/chossures:
 *   get:
 *     tags: [Chossure]
 *     summary: Récupérer toutes les chossures
 *     responses:
 *       200:
 *         description: Succès
 */
router.get("/", chossureController.getAll);

/**
 * @swagger
 * /api/chossures/{id}:
 *   get:
 *     tags: [Chossure]
 *     summary: Récupérer une chossure par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la chossure
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Succès
 *       404:
 *         description: Chossure non trouvée
 */
router.get("/:id", chossureController.getById);

module.exports = router;
