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

        // Vérifier si le compte est bloqué
        if (utilisateur.dateBlocageConnexion && (Date.now() - utilisateur.dateBlocageConnexion) < 300000) { 
          return res.status(401).json({ message: 'Compte bloqué. Réessayez après 5 minutes.' });
      }

      const passwordMatch = await bcrypt.compare(mdp, utilisateur.mdp);

      if (!passwordMatch) {
        utilisateur.tentativeConnexion += 1;
        if (utilisateur.tentativeConnexion >= 5) {
            utilisateur.dateBlocageConnexion = new Date();
        }
        await utilisateur.save();
        return res.status(401).json({ message: 'Mot de passe invalide' });
      }

      utilisateur.tentativeConnexion = 0;
      utilisateur.dateBlocageConnexion = null;
      await utilisateur.save();
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

export async function getUtilisateur(req, res) {
  try {
    const utilisateurGet = await Utilisateur.findById(req.params.id);
    res.status(200).json({ message: 'Paramètre d/un utilisateur', data: utilisateurGet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateUtilisateur(req, res) {
  try {
    const utilisateurId = req.params.id;
    const updatedFields = req.body; 

    if (updatedFields.mdp) {
      const salt = await bcrypt.genSalt(10);
      updatedFields.mdp = await bcrypt.hash(updatedFields.mdp, salt);
    }

    const utilisateur = await Utilisateur.findByIdAndUpdate(utilisateurId, updatedFields, { new: true });

    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    if (updatedFields.mdp) {
      utilisateur.tentativeConnexion = 0;
      utilisateur.dateBlocageConnexion = null;
      utilisateur.derniereMAJMdp = Date.now();
      await utilisateur.save();
    }

    res.status(200).json({ message: 'Utilisateur mis à jour', data: utilisateur });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteUtilisateur(req, res) {
  try {
    const deletedUtilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
    if (!deletedUtilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.status(200).json({ message: "Utilisateur supprimé", data: deletedUtilisateur });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
