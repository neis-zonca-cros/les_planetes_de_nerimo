import mongoose from 'mongoose';


const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://lesplanetesdenerimo:zRAsOi24i5jFazEp@nerimo.cmrqurt.mongodb.net/nerimo?retryWrites=true&w=majority&appName=Nerimo');
    console.log('Connexion à la base de donnée réussie');

  } catch (error) {
    console.error('Erreur de connexion à la base de donnée', error);
  }
};

connectToMongo();