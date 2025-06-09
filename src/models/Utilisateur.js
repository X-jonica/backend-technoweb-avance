const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Utilisateur = sequelize.define(
   "Utilisateur",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nom: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      mot_de_passe: {
         type: DataTypes.STRING(20),
         allowNull: false,
      },
      telephone: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      date_inscription: {
         type: DataTypes.DATE,
         defaultValue: DataTypes.NOW,
      },
   },
   {
      tableName: "utilisateur",
      timestamps: false,
   }
);

module.exports = Utilisateur;
