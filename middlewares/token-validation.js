import pkg from 'jsonwebtoken';
const { verify } = pkg;



function validateToken(req, res, next) {
  const accessToken = req.headers['authorization'];

  if (!accessToken) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  verify(accessToken, process.env.SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }
    const { UserId } = decodedToken;

    req.UserId = UserId;
    
    next();
  });
}  


export default validateToken;