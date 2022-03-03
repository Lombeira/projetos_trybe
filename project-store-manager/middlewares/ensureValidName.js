const nameNotFound = '"name" is required';

const nameLengthIsInsufficient = '"name" length must be at least 5 characters long';

async function ensureValidName(req, res, next) {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: nameNotFound });

  if (name.length < 5) return res.status(422).json({ message: nameLengthIsInsufficient });

  next();
}

module.exports = { ensureValidName };
