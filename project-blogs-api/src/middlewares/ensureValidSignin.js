async function ensureValidSignin(req, res, next) {
  const { email, password } = req.body;

  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (email.length === 0) {
    return res
      .status(400)
      .json({ message: '"email" is not allowed to be empty' });
  }

  if (password.length === 0) {
    return res
      .status(400)
      .json({ message: '"password" is not allowed to be empty' });
  }

  next();
}

module.exports = { ensureValidSignin };
