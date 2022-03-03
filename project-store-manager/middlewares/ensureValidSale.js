const productNotFound = '"product_id" is required';

const quantityNotFound = '"quantity" is required';

const invalidQuantity = '"quantity" must be a number larger than or equal to 1';

const validateProducts = (sale) => sale
  .every(({ product_id: productId }) => productId === undefined);

const validateQuantityOne = (sale) => sale
  .every(({ quantity }) => quantity === undefined && quantity !== 0);

const validateQuantityTwo = (sale) => sale
  .every(({ quantity }) => typeof quantity !== 'number' || quantity < 1);

async function ensureValidSale(req, res, next) {
  const sale = req.body;

  if (validateProducts(sale)) return res.status(400).json({ message: productNotFound });

  if (validateQuantityOne(sale)) return res.status(400).json({ message: quantityNotFound });

  if (validateQuantityTwo(sale)) return res.status(422).json({ message: invalidQuantity });

  next();
}

module.exports = { ensureValidSale };
