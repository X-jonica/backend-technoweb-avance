const DataTypes = require("sequelize");
const sequelize = require("../db/index");

const VenteDetail = sequelize.define(
   "VenteDetail",
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      vente_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "vente",
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
      prix_unitaire: {
         type: DataTypes.DECIMAL(10, 2),
         allowNull: false,
      },
   },
   {
      tableName: "vente_detail",
      timestamps: false,
   }
);

module.exports = VenteDetail;
