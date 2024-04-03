import Personnage from '../models/Personnage.js';
import Planete from '../models/Planete.js'; 

export async function createPersonnage(req, res) {
    try {
        const planeteExiste = await Planete.exists({ _id: req.body.planeteRef });

        if (!planeteExiste) {
            return res.status(400).json({ message: 'La planète spécifiée n\'existe pas.' });
        }

        const personnage = new Personnage(req.body);
        await personnage.save();
        res.status(201).json({ message: 'Personnage créée', data: personnage });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getPersonnages(req, res) {
  try {
    const personnages = await Personnage.find().populate("planeteRef").exec();
    res.status(200).json({ message: 'Liste des personnages', data: personnages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deletePersonnage(req, res) {
  try {
    const deletedPersonnage = await Personnage.findByIdAndDelete(req.params.id);
    if (!deletedPersonnage) {
      return res.status(404).json({ message: "Personnage non trouvé" });
    }
    res.status(200).json({ message: "Personnage supprimé", data: deletedPersonnage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}