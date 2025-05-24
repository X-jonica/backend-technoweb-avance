const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Panier = sequelize.define(
   "Panier",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      utilisateur_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "utilisateur",
            key: "id",
         },
      },
      chossure_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "chossure",
            key: "id",
         },
      },
      quantite: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      date_ajout: {
         type: DataTypes.DATE,
         defaultValue: DataTypes.NOW,
      },
   },
   {
      tableName: "panier",
      timestamps: false,
   }
);
module.exports = Panier;
