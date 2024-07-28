import jwt from 'jsonwebtoken';

export function verifierToken(req, res, next) {
  const enTeteAutorisation = req.headers.authorization;

  if (!enTeteAutorisation) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  const divisionToken = enTeteAutorisation.split(' ');

  if (divisionToken.length !== 2 || divisionToken[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Format de jeton invalide' });
  }

  const token = divisionToken[1];
  // console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }
  try {
    const verifierTokenValide = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verifierTokenValide;
    next();
  } catch (error) {
    return res.status(401).json(error, { message: 'Token invalide' });
  }
}