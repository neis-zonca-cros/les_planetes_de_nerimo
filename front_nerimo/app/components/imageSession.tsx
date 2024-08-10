

export const getPersonnageImageURI = (personnageNom: any) => {
    switch (personnageNom) {
      case "Blouki":
        return require("@/app/assets/images/escargot.png"); 
      case "Klouki":
        return require("@/app/assets/images/klouki.png");
      case "Rourk":
        return require("@/app/assets/images/rourk.png");
      case "Gloumars":
        return require("@/app/assets/images/gloumars.png");
  
      default:
        return require("@/app/assets/images/escargot.png"); 
    }
  };

  export const getPlaneteImageURI = (planeteNom: any) => {
    switch (planeteNom) {
      case "Lune":
        return require("@/app/assets/images/planete_nerimo.gif"); 
      case "Mars":
        return require("@/app/assets/images/mars.png");

      default:
        return require("@/app/assets/images/mars.png"); 
    }
  };