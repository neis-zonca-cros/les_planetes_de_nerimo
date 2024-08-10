export const normalizeKey = (key: string): string => {
    return key
      .toLowerCase()      
      .normalize('NFD')     
      .replace(/[\u0300-\u036f]/g, ''); 
  };