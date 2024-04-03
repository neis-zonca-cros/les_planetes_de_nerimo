import Personnage from "../models/Personnage.js";

export async function createPersonnage(req, res) {
    try {
      const personnage = new Personnage(req.body);
      await personnage.save();
      res.status(201).json({ message: 'Personnage créée', data: personnage });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  export async function getPersonnages(req, res) {
    try {
      const personnages = await Personnage.find();
      res.status(200).json({ message: 'Liste des personnages', data: personnages });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }