const express = require("express");
const router = express.Router();
const panierController = require("../controllers/panier.controller");

// Ajouter au panier
router.post("/", panierController.ajouterAuPanier);

// Mettre à jour la quantité d'un produit
router.put("/:id", panierController.mettreAJourQuantite);

// Supprimer un produit du panier
router.delete("/:id", panierController.supprimerDuPanier);

// Récupérer tout le panier
router.get("/", panierController.getPanier);

module.exports = router;
