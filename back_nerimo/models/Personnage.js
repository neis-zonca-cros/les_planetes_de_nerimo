import mongoose from 'mongoose';

const personnageSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nom_histoire: {
        type: String,
        required: true
    },
    histoire: {
        type: String,
        required: true
    },
    planeteRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Planete', 
        required: true
    }
});

personnageSchema.virtual('planete', {
    ref: 'Planete', 
    localField: 'planeteRef',
    foreignField: '_id',
});

const Personnage = mongoose.model("Personnage", personnageSchema, "personnage"); 
export default Personnage;