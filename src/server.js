const app = require("./app");
const sequelize = require("./models");
const Chossure = require("./models/Chossure");
const Utilisateur = require("./models/Utilisateur");
const Panier = require("./models/Panier");
const Vente = require("./models/Vente");
const VenteDetail = require("./models/VenteDetail");

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
   console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
   try {
      await sequelize.sync(); //creer la table si elle n existe pas encore
      console.log("📦 Base de données synchronisée");
   } catch (error) {
      console.error("❌ Erreur lors de la synchronisation :", err);
   }
});
