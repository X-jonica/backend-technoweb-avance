const app = require("./app");
const sequelize = require("./models");

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
   console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
   try {
      await sequelize.sync();
      console.log("📦 Base de données synchronisée");
   } catch (error) {
      console.error("❌ Erreur lors de la synchronisation :", err);
   }
});
