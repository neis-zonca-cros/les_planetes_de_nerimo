import Utilisateur from "../models/Utilisateur.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Session from "../models/Session.js";


export async function createUtilisateur(req, res) {
    try {
      if (req.body.mdp !== req.body.mdp_repeat) {
        return res.status(400).json({ error: "Les mots de passe ne correspondent pas" });
    }
    
        const hashedPassword = await bcrypt.hash(req.body.mdp, 10);
        req.body.mdp = hashedPassword;
        const utilisateur = new Utilisateur(req.body);
        if(req.body.admin === true) {
          return res.status(403).json({ error: "Permission refusée de créer un utilisateur administrateur" });
        }
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
          return res.status(401).json({ message: 'Compte invalide' });
      }

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
        return res.status(401).json({ message: 'Compte invalide' });
      }

      utilisateur.tentativeConnexion = 0;
      utilisateur.dateBlocageConnexion = null;
      await utilisateur.save();
      const token = jwt.sign(
        { userId: utilisateur._id, email: utilisateur.email, prenom: utilisateur.prenom, admin: utilisateur.admin },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } 
      );

      res.status(200).json({ message: 'Connexion réussie', userId: utilisateur._id, token });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

//avec verifierAdmin
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
       
        const utilisateurId = req.user.userId;
        const utilisateur = req.user;

        if (utilisateur.admin) {
            const utilisateurGet = await Utilisateur.findById(req.params.id);
            if (!utilisateurGet) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            return res.status(200).json({ message: 'Paramètre d\'un utilisateur', data: utilisateurGet });
        }
        
        if (req.params.id === utilisateurId || utilisateur.admin) {
            const utilisateurGet = await Utilisateur.findById(utilisateurId);
            if (!utilisateurGet) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            return res.status(200).json({ message: 'Paramètre d\'un utilisateur', data: utilisateurGet });
        }

        return res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cet utilisateur" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export async function updateUtilisateur(req, res) {
  try {
      const utilisateurId = req.user.userId;
      const utilisateur = req.user;

      const userId = req.params.id;

      const updatedFields = req.body;

      
      if (utilisateur.admin || userId === utilisateurId) {
          
          if (updatedFields.mdp) {
              if (updatedFields.mdp !== updatedFields.mdp_repeat) {
                  return res.status(400).json({ error: "Les mots de passe ne correspondent pas" });
              }
              const salt = await bcrypt.genSalt(10);
              updatedFields.mdp = await bcrypt.hash(updatedFields.mdp, salt);
          }

          if (!utilisateur.admin && updatedFields.admin) {
              return res.status(403).json({ error: "Pas autorisé" });
          }

          const utilisateurUpdated = await Utilisateur.findByIdAndUpdate(userId, updatedFields, { new: true });

          if (!utilisateurUpdated) {
              return res.status(404).json({ message: "Utilisateur non trouvé" });
          }

          if (updatedFields.mdp) {
              utilisateurUpdated.tentativeConnexion = 0;
              utilisateurUpdated.dateBlocageConnexion = null;
              utilisateurUpdated.derniereMAJMdp = Date.now();
              await utilisateurUpdated.save();
          }

          return res.status(200).json({ message: 'Utilisateur mis à jour', data: utilisateurUpdated });
      } else {
          return res.status(403).json({ error: "Pas autorisé" });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}


export async function deleteUtilisateur(req, res) {
  try {
  
      const utilisateurId = req.user.userId;
      const utilisateur = req.user;

      const userId = req.params.id;
      if (utilisateur.admin) {
          const userToDelete = await Utilisateur.findById(userId);
          if (!userToDelete) {
              return res.status(404).json({ message: "Utilisateur non trouvé" });
          }

          await Session.deleteMany({ utilisateurRef: userId });

          
          const deletedUtilisateur = await Utilisateur.findByIdAndDelete(userId);
          return res.status(200).json({ message: "Utilisateur supprimé", data: deletedUtilisateur });
      }
      

      if (userId === utilisateurId) {
          await Session.deleteMany({ utilisateurRef: utilisateurId });

          const deletedUtilisateur = await Utilisateur.findByIdAndDelete(utilisateurId);
          return res.status(200).json({ message: "Utilisateur supprimé", data: deletedUtilisateur });
      }

      return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer cet utilisateur" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }

  
}




