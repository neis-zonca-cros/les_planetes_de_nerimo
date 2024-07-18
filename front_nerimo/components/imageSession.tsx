

export const getPersonnageImageURI = (personnageNom: any) => {
    switch (personnageNom) {
      case "Blouki":
        return require("@/assets/images/escargot.png"); 
      case "Klouki":
        return require("@/assets/images/klouki.png");
      case "Rourk":
        return require("@/assets/images/rourk.png");
  
      default:
        return require("@/assets/images/escargot.png"); 
    }
  };

  export const getPlaneteImageURI = (planeteNom: any) => {
    switch (planeteNom) {
      case "Lune":
        return require("@/assets/images/lune.png"); 
      case "Mars":
        return require("@/assets/images/mars.png");

      default:
        return require("@/assets/images/mars.png"); 
    }
  };