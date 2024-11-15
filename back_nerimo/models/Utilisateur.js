import mongoose from 'mongoose';

const utilisateurSchema = new mongoose.Schema({
    admin: {
        type : Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        unique: true,
    },
    mdp: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    tentativeConnexion: {
        type: Number, 
        default: 0,
    },
    dateBlocageConnexion: { 
        type: Date, 
        default: null 
    },
    derniereMAJMdp: {
        type: Date,
        default: Date.now(),
    },
  });
  
  const Utilisateur = mongoose.model("Utilisateur", utilisateurSchema, "utilisateur");
  export default Utilisateur;