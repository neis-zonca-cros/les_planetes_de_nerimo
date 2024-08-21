import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    prenom: {
        type: String,
        required: true
    },
    sauvegarde: {
        type: String,
        required: false
    },
    utilisateurRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur',
        required: true
    },
    planeteRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Planete',
        required: true
    },
    personnageRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnage',
        required: true
    },
},
    { timestamps: true }
);

sessionSchema.virtual('utilisateur', {
    ref: 'Utilisateur',
    localField: 'utilisateurRef',
    foreignField: '_id',
});

sessionSchema.virtual('planete', {
    ref: 'Planete',
    localField: 'planeteRef',
    foreignField: '_id',
});

sessionSchema.virtual('personnage', {
    ref: 'Personnage',
    localField: 'personnageRef',
    foreignField: '_id',
});



const Session = mongoose.model("Session", sessionSchema, "session"); 
export default Session;