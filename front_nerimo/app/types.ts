export type RootStackParamList = {
  Bienvenue: undefined;
  AccueilAvantConnexion: undefined;
  MenuInitial: undefined;
  SeConnecter: undefined;
  AccueilApresConnexion: { refresh?: boolean };
  CreerUnCompte: undefined;
  MenuUtilisateur: undefined;
  CreerSessionPrenom: undefined;
  ChoisirPlanete: undefined;
  ChoisirPersonnage: undefined;
  MonProfil: undefined;
  Histoire: { histoire: string, personnageNom: string, sessionPrenom: string };
};
