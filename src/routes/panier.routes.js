const express = require("express");
const router = express.Router();
const panierController = require("../controllers/panier.controller");

// Ajouter au panier
router.post("/", panierController.ajouterAuPanier);

// Supprimer un produit du panier
router.delete("/:id", panierController.supprimerDuPanier);

// Récupérer tout le panier
router.get("/", panierController.getPanier);

module.exports = router;
