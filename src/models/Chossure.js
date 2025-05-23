const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Chossure = sequelize.define(
   "Chossure",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nom: {
         type: DataTypes.STRING(20),
         allowNull: false,
      },
      description: {
         type: DataTypes.TEXT,
      },
      prix: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      stock: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      image_url: {
         type: DataTypes.TEXT,
      },
      taille: {
         type: DataTypes.STRING(10),
      },
      couleur: {
         type: DataTypes.STRING(20),
      },
   },
   {
      tableName: "chossure", // pour correspondre au nom réel dans la BD
      timestamps: false, // désactive les colonnes createdAt / updatedAt
   }
);

module.exports = Chossure;
