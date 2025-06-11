const db = require("../models");
const { success } = require("../utils/helper");
const Chossure = db.Chossure;

//Recuperer tous les chossures
exports.getAll = async (req, res) => {
   try {
      const produits = await Chossure.findAll();
      const message = "Données chossure recuperés avec succes ✅!";
      res.json(success(message, produits));
   } catch (err) {
      res.status(500).json({
         error: "Erreur lors de la récupération des chaussures",
      });
   }
};

// ✅ Récupérer une chaussure par ID
exports.getById = async (req, res) => {
   try {
      const id = req.params.id;
      const produit = await Chossure.findByPk(id);

      if (!produit) {
         return res.status(404).json({ error: "Chaussure non trouvée" });
      }

      const message = "Chossure recuperé avec succes ✅!";
      res.json(success(message, produit));
   } catch (err) {
      res.status(500).json({
         error: "Erreur lors de la récupération de la chaussure",
      });
   }
};
