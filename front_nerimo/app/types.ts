export type RootStackParamList = {
  Bienvenue: undefined;
  AccueilAvantConnexion: undefined;
  MenuInitial: undefined;
  SeConnecter: undefined;
  AccueilApresConnexion: { refresh?: boolean };
  CreerUnCompte: undefined;
  MenuUtilisateur: undefined;
  CreerSessionPrenom: undefined;
  ChoisirPlanete: { prenom: string };
  ChoisirPersonnage: { prenom: string; planeteId: string };
};
