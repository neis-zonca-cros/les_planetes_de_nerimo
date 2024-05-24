import Utilisateur from "../models/Utilisateur.js";

export async function verifierAdminOuThis(req, res, next) {
    try {
      const currentUser = req.user;
      const userId = req.params.id; 
      const userToActUpon = await Utilisateur.findById(userId);
  
      if (!userToActUpon) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      if (currentUser.admin || currentUser.userId === userId) {
        
        req.userToActUpon = userToActUpon; 
        next(); 
      } else {
        return res.status(403).json({ message: 'Erreur, Vous n\'êtes pas autorisé à effectuer cette action' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  