import Session from '../models/Session.js';


export async function createSession(req, res) {
    try {

        const session = new Session(req.body);
        await session.save();
        res.status(201).json({ message: 'Session créée', data: session });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getSessions(req, res) {
    try {
      const sessions = await Session.find().populate("planeteRef").populate("personnageRef").exec();
      res.status(200).json({ message: 'Liste des sessions', data: sessions });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export async function getSession(req, res) {
    try {
      const sessionGet = await Session.findById(req.params.id).populate("planeteRef").populate("personnageRef").exec();
      res.status(200).json({ message: 'Paramètre d/une session', data: sessionGet });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export async function updateSession(req, res) {
    try {
      const sessionId = req.params.id;
      const updatedFields = req.body; 
  
      const session = await Session.findByIdAndUpdate(sessionId, updatedFields, { new: true });
  
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
      const deletedSession = await Session.findByIdAndDelete(req.params.id);
      if (!deletedSession) {
        return res.status(404).json({ message: "Session non trouvée" });
      }
      res.status(200).json({ message: "Session supprimée", data: deletedSession });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }