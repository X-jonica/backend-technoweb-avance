const express = require("express");
const router = express.Router();
const panierController = require("../controllers/panier.controller");

/**
 * @swagger
 * tags:
 *   name: Panier
 *   description: Gestion du panier utilisateur
 */

/**
 * @swagger
 * /api/panier:
 *   post:
 *     tags: [Panier]
 *     summary: Ajouter un produit au panier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - utilisateur_id
 *               - chossure_id
 *               - quantite
 *             properties:
 *               utilisateur_id:
 *                 type: integer
 *               chossure_id:
 *                 type: integer
 *               quantite:
 *                 type: integer
 *             example:
 *               utilisateur_id: 1
 *               chossure_id: 2
 *               quantite: 3
 *     responses:
 *       200:
 *         description: Produit ajouté dans le panier
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.post("/", panierController.ajouterAuPanier);

/**
 * @swagger
 * /api/panier/{id}:
 *   put:
 *     tags: [Panier]
 *     summary: Mettre à jour la quantité d'un produit du panier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'item dans le panier
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantite
 *             properties:
 *               quantite:
 *                 type: integer
 *             example:
 *               quantite: 5
 *     responses:
 *       200:
 *         description: Quantité mise à jour avec succès
 *       404:
 *         description: Article non trouvé dans le panier
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", panierController.mettreAJourQuantite);

/**
 * @swagger
 * /api/panier/{id}:
 *   delete:
 *     tags: [Panier]
 *     summary: Supprimer un produit du panier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'item dans le panier
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article supprimé du panier
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", panierController.supprimerDuPanier);

/**
 * @swagger
 * /api/panier:
 *   get:
 *     tags: [Panier]
 *     summary: Récupérer le contenu du panier
 *     parameters:
 *       - in: query
 *         name: utilisateur_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Panier récupéré avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get("/", panierController.getPanier);

module.exports = router;
