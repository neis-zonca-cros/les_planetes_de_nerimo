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