const { Sequelize } = require("sequelize");
require("dotenv").config();

// Acces au bd grace a sequelize 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
   dialect: "postgres",
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false,
      },
   },
});

// Teste de connexion
(async () => {
   try {
      await sequelize.authenticate();
      console.log("✅ Connexion Sequelize réussie !");
   } catch (error) {
      console.error("❌ Échec de la connexion Sequelize :", error);
   }
})();

module.exports = sequelize;
