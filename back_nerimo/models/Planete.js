import mongoose from 'mongoose';

const planeteSchema = new mongoose.Schema({
    nom: {
        type : String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  });
  
  const Planete = mongoose.model("Planete", planeteSchema, "planete");
  export default Planete;