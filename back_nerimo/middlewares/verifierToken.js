import jwt from 'jsonwebtoken';

export function verifierToken(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  
  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Token manquant' });
  }
  
  const tokenParts = authorizationHeader.split(' ');
  
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Format de jeton invalide' });
  }
  
  const token = tokenParts[1];
  // console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide' });
  }
}