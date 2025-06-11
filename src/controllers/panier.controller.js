const db = require("../models");
const { success } = require("../utils/helper");
const Panier = db.Panier;
const Chossure = db.Chossure;

// Ajouter un produit au panier
exports.ajouterAuPanier = async (req, res) => {
    const { chossure_id, quantite } = req.body;

    try {
        // Optionnel : Vérifier si le produit existe
        const produit = await Chossure.findByPk(chossure_id);
        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        // Ajouter dans le panier
        const nouvelItem = await Panier.create({
            chossure_id,
            quantite,
        });

        const message = "Produit ajouté dans le panier ✅!";
        res.json(success(message, nouvelItem));
    } catch (error) {
        console.error("Erreur ajout panier:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Supprimer un produit du panier par ID de l'item panier
exports.supprimerDuPanier = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Panier.findByPk(id);
        if (!item) {
            return res
                .status(404)
                .json({ message: "Article non trouvé dans le panier" });
        }

        await item.destroy();
        res.json({ message: "Article supprimé du panier" });
    } catch (error) {
        console.error("Erreur suppression panier:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Récupérer le contenu du panier
exports.getPanier = async (req, res) => {
    try {
        const panier = await Panier.findAll({
            include: {
                model: Chossure,
                attributes: ["nom", "marque", "prix", "image_url"],
            },
        });

        const message = "Données chossure recuperé avec succes !";
        res.json(message, panier);
    } catch (error) {
        console.error("Erreur récupération panier:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
