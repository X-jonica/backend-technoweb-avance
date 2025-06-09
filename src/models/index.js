const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db"); // Connexion Sequelize

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Déclaration des modèles
db.Chossure = require("./Chossure");

module.exports = db;
