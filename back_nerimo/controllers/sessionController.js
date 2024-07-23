import Session from '../models/Session.js';
import Planete from '../models/Planete.js';
import Personnage from '../models/Personnage.js';


export async function creerSession(req, res) {
    try {
        const utilisateurId = req.user.utilisateurId;
        // console.log(utilisateurId);
        const { planeteRef } = req.body;
        const { personnageRef} = req.body;

        const planete = await Planete.findById(planeteRef);
        if (!planete) {
            return res.status(404).json({ error: "Planète non trouvée" });
        }

        const personnage = await Personnage.findById(personnageRef);
        if (!personnage) {
          return res.status(404).json({ error: "Personnage non trouvé" });
        }

        const session = new Session({
          ...req.body,
          utilisateurRef: utilisateurId,
          planeteRef: planete._id,
          personnageRef: personnage._id 
      });
        await session.save();
        res.status(201).json({ message: 'Session créée', data: session });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export async function recupererToutesLesSessions(req, res) {
    try {
      const utilisateurId = req.user.utilisateurId;
      const sessions = await Session.find({ utilisateurRef: utilisateurId })
      .populate("planeteRef")
      .populate("personnageRef")
      .populate({
        path: 'utilisateurRef',
        select: 'prenom' 
      })
      .exec();
      res.status(200).json({ message: 'Liste des sessions', data: sessions });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export async function recupererUneSession(req, res) {
    try {
        const utilisateurId = req.user.utilisateurId;

        const recupererSession = await Session.findOne({ _id: req.params.id, utilisateurRef: utilisateurId })
                                         .populate("planeteRef")
                                         .populate("personnageRef")
                                         .exec();

        if (!recupererSession) {
            return res.status(404).json({ message: "Session non trouvée" });
        }

        res.status(200).json({ message: 'Paramètre d\'une session', data: recupererSession });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

  export async function modifierSession(req, res) {
    try {
        const utilisateurId = req.user.utilisateurId;

        const sessionId = req.params.id;
        const miseAJour = req.body; 

        const session = await Session.findOneAndUpdate({ _id: sessionId, utilisateurRef: utilisateurId }, miseAJour, { new: true });

        if (!session) {
            return res.status(404).json({ message: "Session non trouvée" });
        }

        res.status(200).json({ message: 'Session mise à jour', data: session });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

  export async function supprimerSession(req, res) {
    try {
        const utilisateurId = req.user.utilisateurId;

        const supprimerUneSession = await Session.findOneAndDelete({ _id: req.params.id, utilisateurRef: utilisateurId });

        if (!supprimerUneSession) {
            return res.status(404).json({ message: "Session non trouvée" });
        }

        res.status(200).json({ message: "Session supprimée", data: supprimerUneSession });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}