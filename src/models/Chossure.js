const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Chossure = sequelize.define(
   "Chossure",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      marque: {
         type: DataTypes.STRING(20),
         allowNull: false,
      },
      nom: {
         type: DataTypes.STRING(100),
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
      autre_url: {
         type: DataTypes.TEXT,
      },
   },
   {
      tableName: "chossure", // pour correspondre au nom réel dans la BD
      timestamps: false, // désactive les colonnes createdAt / updatedAt
   }
);

module.exports = Chossure;
