const express = require("express");
const router = express.Router();
const panierController = require("../controllers/panier.controller");

/**
 * @swagger
 * /api/panier:
 *   post:
 *     summary: Ajouter un produit au panier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               produitId: 1
 *               quantite: 2
 *     responses:
 *       201:
 *         description: Produit ajouté
 */
router.post("/", panierController.ajouterAuPanier);

/**
 * @swagger
 * /api/panier/{id}:
 *   put:
 *     summary: Mettre à jour la quantité d'un produit du panier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               quantite: 5
 *     responses:
 *       200:
 *         description: Quantité mise à jour
 */
router.put("/:id", panierController.mettreAJourQuantite);

/**
 * @swagger
 * /api/panier/{id}:
 *   delete:
 *     summary: Supprimer un produit du panier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produit supprimé
 */
router.delete("/:id", panierController.supprimerDuPanier);

/**
 * @swagger
 * /api/panier:
 *   get:
 *     summary: Récupérer le contenu du panier
 *     responses:
 *       200:
 *         description: Liste du panier
 */
router.get("/", panierController.getPanier);

module.exports = router;
