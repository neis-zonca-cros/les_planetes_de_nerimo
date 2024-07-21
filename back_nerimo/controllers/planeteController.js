
import Planete from '../models/Planete.js';

export async function creerPlanete(req, res) {
  try {
    const planete = new Planete(req.body);
    await planete.save();
    res.status(201).json({ message: 'Planète créée', data: planete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function recupererToutesLesPlanetes(req, res) {
  try {
    const planetes = await Planete.find();
    res.status(200).json({ message: 'Liste des planètes', data: planetes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function recupererUnePlanete(req, res) {
  try {
    const recupererPlanete = await Planete.findById(req.params.id);
    res.status(200).json({ message: 'Paramètre d/une planète', data: recupererPlanete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function modifierPlanete(req, res) {
  try {
    const planeteId = req.params.id;
    const miseAJour = req.body; 

    const planete = await Planete.findByIdAndUpdate(planeteId, miseAJour, { new: true });

    if (!planete) {
      return res.status(404).json({ message: "Planète non trouvée" });
    }

    res.status(200).json({ message: 'Planète mise à jour', data: planete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function supprimerPlanete(req, res) {
  try {
    const supprimerUnePlanete = await Planete.findByIdAndDelete(req.params.id);
    if (!supprimerUnePlanete) {
      return res.status(404).json({ message: "Planète non trouvée" });
    }
    res.status(200).json({ message: "Planète supprimée", data: supprimerUnePlanete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}