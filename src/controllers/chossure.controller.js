const db = require("../models")
const Chossure = db.Chossure

//Recuperer tous les chossures
exports.getAll = async (req, res) => {
  try {
    const produits = await Chossure.findAll();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des chaussures' });
  }
};