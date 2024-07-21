import Personnage from '../models/Personnage.js';
import Planete from '../models/Planete.js'; 

export async function creerPersonnage(req, res) {
    try {
      const { planeteRef } = req.body;
      

      const planete = await Planete.findById(planeteRef);
      if (!planete) {
        return res.status(404).json({ error: "Planète non trouvée" });
      }
      // console.log(planete);

        const personnage = new Personnage({
          ...req.body,
          planeteRef: planete._id
        });
        await personnage.save();
        res.status(201).json({ message: 'Personnage créée', data: personnage });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function recupererTousLesPersonnages(req, res) {
  try {
    const personnages = await Personnage.find().populate("planeteRef").exec();
    res.status(200).json({ message: 'Liste des personnages', data: personnages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function recupererPersonnagesParPlanetes(req, res) {
  try {
    const { planeteId } = req.params; 

    const personnages = await Personnage.find({ "planeteRef": planeteId }).exec();

    if (!personnages) {
      return res.status(404).json({ error: "Aucun personnage trouvé pour cette planète" });
    }

    res.status(200).json({ message: 'Liste des personnages pour la planète sélectionnée', data: personnages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function recupererUnPersonnage(req, res) {
  try {
    const recupererPersonnage = await Personnage.findById(req.params.id).populate("planeteRef").exec();
    res.status(200).json({ message: 'Paramètre du personnage', data: recupererPersonnage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function modifierPersonnage(req, res) {
  try {
    const personnageId = req.params.id;
    const miseAJour = req.body; 

    const personnage = await Personnage.findByIdAndUpdate(personnageId, miseAJour, { new: true });

    if (!personnage) {
      return res.status(404).json({ message: "Personnage non trouvé" });
    }

    res.status(200).json({ message: 'Personnage mis à jour', data: personnage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function supprimerPersonnage(req, res) {
  try {
    const supprimerUnPersonnage = await Personnage.findByIdAndDelete(req.params.id);
    if (!supprimerUnPersonnage) {
      return res.status(404).json({ message: "Personnage non trouvé" });
    }
    res.status(200).json({ message: "Personnage supprimé", data: supprimerUnPersonnage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}