import Utilisateur from "../models/Utilisateur.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Session from "../models/Session.js";


export async function creerUtilisateur(req, res) {
    try {
      if (req.body.mdp !== req.body.mdp_repeat) {
        return res.status(400).json({ error: "Les mots de passe ne correspondent pas" });
    }
    
        const hasherMotDePasse = await bcrypt.hash(req.body.mdp, 10);
        req.body.mdp = hasherMotDePasse;
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

      const comparerMotDePasse = await bcrypt.compare(mdp, utilisateur.mdp);

      if (!comparerMotDePasse) {
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
export async function recupererTousLesUtilisateurs(req, res) {
    try {
      const utilisateurs = await Utilisateur.find();
      res.status(200).json({ message: 'Liste des utilisateurs', data: utilisateurs });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export async function recupererUnUtilisateur(req, res) {
    try {
       
        const utilisateurId = req.user.userId;
        const utilisateur = req.user;

        if (utilisateur.admin) {
            const recupererUtilisateur = await Utilisateur.findById(req.params.id);
            if (!recupererUtilisateur) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            return res.status(200).json({ message: 'Paramètre d\'un utilisateur', data: recupererUtilisateur });
        }
        
        if (req.params.id === utilisateurId || utilisateur.admin) {
            const recupererUnUtilisateur = await Utilisateur.findById(utilisateurId);
            if (!recupererUnUtilisateur) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            return res.status(200).json({ message: 'Paramètre d\'un utilisateur', data: recupererUnUtilisateur });
        }

        return res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cet utilisateur" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export async function modifierUtilisateur(req, res) {
  try {
      const utilisateurId = req.user.userId;
      const utilisateur = req.user;

      const userId = req.params.id;

      const miseAJour = req.body;

      
      if (utilisateur.admin || userId === utilisateurId) {
          
          if (miseAJour.mdp) {
              if (miseAJour.mdp !== miseAJour.mdp_repeat) {
                  return res.status(400).json({ error: "Les mots de passe ne correspondent pas" });
              }
              const salage = await bcrypt.genSalt(10);
              miseAJour.mdp = await bcrypt.hash(miseAJour.mdp, salage);
          }

          if (!utilisateur.admin && miseAJour.admin) {
              return res.status(403).json({ error: "Pas autorisé" });
          }

          const utilisateurMAJ = await Utilisateur.findByIdAndUpdate(userId, miseAJour, { new: true });

          if (!utilisateurMAJ) {
              return res.status(404).json({ message: "Utilisateur non trouvé" });
          }

          if (miseAJour.mdp) {
              utilisateurMAJ.tentativeConnexion = 0;
              utilisateurMAJ.dateBlocageConnexion = null;
              utilisateurMAJ.derniereMAJMdp = Date.now();
              await utilisateurMAJ.save();
          }

          return res.status(200).json({ message: 'Utilisateur mis à jour', data: utilisateurMAJ });
      } else {
          return res.status(403).json({ error: "Pas autorisé" });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}


export async function supprimerUtilisateur(req, res) {
  try {
  
      const utilisateurId = req.user.userId;
      const utilisateur = req.user;

      const utillisateurIdParam = req.params.id;
      if (utilisateur.admin) {
          const chercherUtilisateur = await Utilisateur.findById(utillisateurIdParam);
          if (!chercherUtilisateur) {
              return res.status(404).json({ message: "Utilisateur non trouvé" });
          }

          await Session.deleteMany({ utilisateurRef: utillisateurIdParam });

          
          const supprimerUnUtilisateur = await Utilisateur.findByIdAndDelete(utillisateurIdParam);
          return res.status(200).json({ message: "Utilisateur supprimé", data: supprimerUnUtilisateur });
      }
      

      if (utillisateurIdParam === utilisateurId) {
          await Session.deleteMany({ utilisateurRef: utilisateurId });

          const deletedUtilisateur = await Utilisateur.findByIdAndDelete(utilisateurId);
          return res.status(200).json({ message: "Utilisateur supprimé", data: deletedUtilisateur });
      }

      return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer cet utilisateur" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }

  
}




