import Utilisateur from "../models/Utilisateur.js";
import bcrypt from "bcrypt";


export async function createUtilisateur(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.mdp, 10);
        req.body.mdp = hashedPassword;
        const utilisateur = new Utilisateur(req.body);
        await utilisateur.save();
        res.status(201).json({ message: 'Utilisateur créé', data: utilisateur });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getUtilisateurs(req, res) {
    try {
      const utilisateurs = await Utilisateur.find();
      res.status(200).json({ message: 'Liste des utilisateurs', data: utilisateurs });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }