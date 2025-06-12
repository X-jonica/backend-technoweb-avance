const express = require("express");
const router = express.Router();
const utilisateurController = require("../controllers/utilisateur.controller");

/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: Gestion des utilisateurs (inscription, connexion)
 */

/**
 * @swagger
 * /api/utilisateurs/inscription:
 *   post:
 *     tags: [Utilisateurs]
 *     summary: Inscrire un nouvel utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - email
 *               - mot_de_passe
 *             properties:
 *               nom:
 *                 type: string
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *             example:
 *               nom: John Doe
 *               email: john@example.com
 *               mot_de_passe: monmotdepasse
 *     responses:
 *       201:
 *         description: Utilisateur inscrit avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post("/inscription", utilisateurController.inscription);

/**
 * @swagger
 * /api/utilisateurs/connexion:
 *   post:
 *     tags: [Utilisateurs]
 *     summary: Authentifier un utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - mot_de_passe
 *             properties:
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *             example:
 *               email: john@example.com
 *               mot_de_passe: monmotdepasse
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Mot de passe incorrect
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.post("/connexion", utilisateurController.connexion);

module.exports = router;
