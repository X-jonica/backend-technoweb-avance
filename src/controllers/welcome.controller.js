exports.welcome = async (req, res) => {
   try {
      res.send("Bienvenue sur mon backend Node.js 🎉");
   } catch (error) {
      console.error(
         `Erreur lors de la recuperation de la reauette :( , ${error}`
      );
   }
};
