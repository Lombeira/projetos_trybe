const { AppError } = require('../error/AppError');
const { Categories } = require('../models/Categories');

async function ensureValidCategories(req, res, next) {
  try {
    const { categoryIds } = req.body;
    const categories = await Categories.findAll();
    const categoryExists = (categoryId) =>
      categories.some((curr) => curr.id === categoryId);

    if (!categoryIds) {
      return res.status(400).json({ message: '"categoryIds" is required' });
    }

    categoryIds.forEach((categoryId) => {
      if (!categoryExists(categoryId)) {
        throw new AppError(400, '"categoryIds" not found');
      }
    });

    next();
  } catch (err) {
    return res.status(err.statusCode).json({ message: err.message });
  }
}

module.exports = { ensureValidCategories };
