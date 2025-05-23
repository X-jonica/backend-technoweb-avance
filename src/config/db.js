const { Pool } = require("pg");
require("dotenv").config();

// recuperation du DATABASE_URL du .env
const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
   ssl: {
      rejectUnauthorized: false,
   },
});

// Tester la connexion
pool
   .connect()
   .then(() => console.log("✅ Connexion PostgreSQL réussie !"))
   .catch((err) => console.error("❌ Connexion PostgreSQL échouée :", err));

module.exports = pool;
