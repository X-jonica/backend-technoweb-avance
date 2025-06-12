const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db"); // Connexion Sequelize

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Déclaration des modèles
db.Chossure = require("./Chossure");
db.Panier = require("./Panier");
db.Utilisateur = require("./Utilisateur");  // <-- tu ajoutes ça

// Associations

// Chaque Panier appartient à une Chossure
db.Panier.belongsTo(db.Chossure, { foreignKey: "chossure_id" });

// Chaque Panier appartient à un Utilisateur
db.Panier.belongsTo(db.Utilisateur, { foreignKey: "utilisateur_id" });

// Un Utilisateur peut avoir plusieurs Paniers
db.Utilisateur.hasMany(db.Panier, { foreignKey: "utilisateur_id" });

module.exports = db;
