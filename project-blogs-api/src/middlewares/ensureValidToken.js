const jwt = require('jsonwebtoken');

async function ensureValidToken(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = { ensureValidToken };
