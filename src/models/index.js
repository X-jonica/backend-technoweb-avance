const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db"); // Connexion Sequelize

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Déclaration des modèles
db.Chossure = require("./Chossure");
db.Panier = require("./Panier");

// Association
db.Panier.belongsTo(db.Chossure, { foreignKey: "chossure_id" });

module.exports = db;
