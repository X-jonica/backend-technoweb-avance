const express = require("express");
const router = express.Router();
const utilisateurController = require("../controllers/utilisateur.controller");

// Route pour ajouter un utilisateur
router.post("/", utilisateurController.ajouterUtilisateur);

module.exports = router;
