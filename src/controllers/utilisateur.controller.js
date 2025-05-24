const Utilisateur = require("../models/Utilisateur");
const { success } = require("../utils/helper");

exports.ajouterUtilisateur = async (req, res) => {
   try {
      const { nom, email, mot_de_passe, telephone } = req.body;

      const nouvelUtilisateur = await Utilisateur.create({
         nom,
         email,
         mot_de_passe,
         telephone,
      });

      const message = "✅ Utilisateur ajouté avec succès";
      res.json(success(message, nouvelUtilisateur));
   } catch (error) {
      console.error(`❌Erreur lors de l'ajout : ${error}`);
   }
};
