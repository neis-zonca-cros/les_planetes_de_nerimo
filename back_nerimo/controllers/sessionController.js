import Session from '../models/Session.js';
import Planete from '../models/Planete.js';
import Personnage from '../models/Personnage.js';


export async function createSession(req, res) {
    try {
        const utilisateurId = req.user.userId;
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



export async function getSessions(req, res) {
    try {
      const utilisateurId = req.user.userId;
      const sessions = await Session.find({ utilisateurRef: utilisateurId })
      .populate("planeteRef")
      .populate("personnageRef")
      .exec();
      res.status(200).json({ message: 'Liste des sessions', data: sessions });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export async function getSession(req, res) {
    try {
        const utilisateurId = req.user.userId;

        const sessionGet = await Session.findOne({ _id: req.params.id, utilisateurRef: utilisateurId })
                                         .populate("planeteRef")
                                         .populate("personnageRef")
                                         .exec();

        if (!sessionGet) {
            return res.status(404).json({ message: "Session non trouvée" });
        }

        res.status(200).json({ message: 'Paramètre d\'une session', data: sessionGet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

  export async function updateSession(req, res) {
    try {
        const utilisateurId = req.user.userId;

        const sessionId = req.params.id;
        const updatedFields = req.body; 

        const session = await Session.findOneAndUpdate({ _id: sessionId, utilisateurRef: utilisateurId }, updatedFields, { new: true });

        if (!session) {
            return res.status(404).json({ message: "Session non trouvée" });
        }

        res.status(200).json({ message: 'Session mise à jour', data: session });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

  export async function deleteSession(req, res) {
    try {
        const utilisateurId = req.user.userId;

        const deletedSession = await Session.findOneAndDelete({ _id: req.params.id, utilisateurRef: utilisateurId });

        if (!deletedSession) {
            return res.status(404).json({ message: "Session non trouvée" });
        }

        res.status(200).json({ message: "Session supprimée", data: deletedSession });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}