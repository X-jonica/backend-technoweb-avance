const app = require("./app");
const db = require("./models");
const sequelize = require("./db");
const Chossure = require("./models/Chossure");
const Panier = require("./models/Panier");

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
    console.log(
        `🚀 Serveur démarré sur https://backend-technoweb-avance.onrender.com`
    );
    try {
        await db.sequelize.sync(); //creer la table si elle n existe pas encore
        console.log("📦 Base de données synchronisée");
    } catch (error) {
        console.error("❌ Erreur lors de la synchronisation :", err);
    }
});
