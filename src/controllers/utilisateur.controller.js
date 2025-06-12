const db = require("../models");
const Utilisateur = db.Utilisateur;
const bcrypt = require("bcrypt");

// Inscription
exports.inscription = async (req, res) => {
    const { nom, email, mot_de_passe } = req.body;

    try {
        const hash = await bcrypt.hash(mot_de_passe, 10);
        const nouvelUtilisateur = await Utilisateur.create({
            nom,
            email,
            mot_de_passe: hash,
        });

        res.status(201).json({
            message: "Inscription réussie",
            data: nouvelUtilisateur,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Connexion
exports.connexion = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
        const utilisateur = await Utilisateur.findOne({ where: { email } });

        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const match = await bcrypt.compare(
            mot_de_passe,
            utilisateur.mot_de_passe
        );
        if (!match) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        res.json({ message: "Connexion réussie", utilisateur });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
