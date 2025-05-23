const app = require("./app");
const pool = require("./config/db"); //Initialisation de la connexion

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
