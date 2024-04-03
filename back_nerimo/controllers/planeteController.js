import Planete from '../models/Planete.js';

export async function createPlanete(req, res) {
  try {
    const planete = new Planete(req.body);
    await planete.save();
    res.status(201).json({ message: 'Planète créée', data: planete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPlanetes(req, res) {
  try {
    const planetes = await Planete.find();
    res.status(200).json({ message: 'Liste des planètes', data: planetes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}