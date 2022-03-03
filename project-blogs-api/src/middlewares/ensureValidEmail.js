async function ensureValidEmail(req, res, next) {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const emailIsValid = regex.test(email);

  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!emailIsValid) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
}

module.exports = { ensureValidEmail };
