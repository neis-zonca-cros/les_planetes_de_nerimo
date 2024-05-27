
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

export async function getPlanete(req, res) {
  try {
    const planeteGet = await Planete.findById(req.params.id);
    res.status(200).json({ message: 'Paramètre d/une planète', data: planeteGet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function updatePlanete(req, res) {
  try {
    const planeteId = req.params.id;
    const updatedFields = req.body; 

    const planete = await Planete.findByIdAndUpdate(planeteId, updatedFields, { new: true });

    if (!planete) {
      return res.status(404).json({ message: "Planète non trouvée" });
    }

    res.status(200).json({ message: 'Planète mise à jour', data: planete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deletePlanete(req, res) {
  try {
    const deletedPlanete = await Planete.findByIdAndDelete(req.params.id);
    if (!deletedPlanete) {
      return res.status(404).json({ message: "Planète non trouvée" });
    }
    res.status(200).json({ message: "Planète supprimée", data: deletedPlanete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}