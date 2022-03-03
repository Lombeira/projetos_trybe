const quantityNotFound = '"quantity" is required';

const invalidQuantity = '"quantity" must be a number larger than or equal to 1';

async function ensureValidQuantity(req, res, next) {
  const { quantity } = req.body;

  if (!quantity && quantity !== 0) return res.status(400).json({ message: quantityNotFound });

  if (typeof quantity !== 'number' || quantity < 1) {
    return res.status(422)
      .json({ message: invalidQuantity });
  }

  next();
}

module.exports = { ensureValidQuantity };
