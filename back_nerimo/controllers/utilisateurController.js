import Utilisateur from "../models/Utilisateur.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

export async function connexionUtilisateur(req, res) {
  try {
      const { email, mdp } = req.body;
      const utilisateur = await Utilisateur.findOne({ email });

      if (!utilisateur) {
          return res.status(401).json({ message: 'Email invalide' });
      }

      const passwordMatch = await bcrypt.compare(mdp, utilisateur.mdp);
      console.log(passwordMatch);


      if (!passwordMatch) {
          return res.status(401).json({ message: 'Mot de passe invalide' });
      }
      const token = jwt.sign(
        { userId: utilisateur._id, email: utilisateur.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } 
      );

      res.status(200).json({ message: 'Connexion réussie', token });
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
