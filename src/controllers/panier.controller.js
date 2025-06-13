const db = require("../models");
const { success } = require("../utils/helper");
const Panier = db.Panier;
const Chossure = db.Chossure;

// Ajouter un produit au panier
exports.ajouterAuPanier = async (req, res) => {
    const { utilisateur_id, chossure_id, quantite } = req.body;

    try {
        const produit = await Chossure.findByPk(chossure_id);
        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        const nouvelItem = await Panier.create({
            utilisateur_id,
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
    const utilisateur_id = req.headers["utilisateur-id"];

    if (!utilisateur_id) {
        return res.status(400).json({ message: "Utilisateur non spécifié." });
    }

    try {
        const panier = await Panier.findAll({
            where: { utilisateur_id },
            include: {
                model: Chossure,
                attributes: ["nom", "marque", "prix", "image_url"],
            },
        });

        const message = "Panier récupéré avec succès ✅!";
        res.json(success(message, panier));
    } catch (error) {
        console.error("Erreur récupération panier:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Mettre à jour la quantité d'un produit dans le panier
exports.mettreAJourQuantite = async (req, res) => {
    const { id } = req.params;
    const { quantite } = req.body;

    try {
        const item = await Panier.findByPk(id);
        if (!item) {
            return res
                .status(404)
                .json({ message: "Article non trouvé dans le panier" });
        }

        // Mise à jour de la quantité
        item.quantite = quantite;
        await item.save();

        res.json({ message: "Quantité mise à jour avec succès", data: item });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la quantité:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
