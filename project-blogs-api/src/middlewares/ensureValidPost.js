async function ensureValidPost(req, res, next) {
  const { title, content } = req.body;

  if (!title) return res.status(400).json({ message: '"title" is required' });

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
}

module.exports = { ensureValidPost };
