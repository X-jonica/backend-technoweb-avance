const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Vente = sequelize.define(
   "Vente",
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
      date_vente: {
         type: DataTypes.DATE,
         defaultValue: DataTypes.NOW,
      },
      total: {
         type: DataTypes.DECIMAL(10, 2),
         allowNull: false,
      },
   },
   {
      tableName: "vente",
      timestamps: false,
   }
);

module.exports = Vente;
