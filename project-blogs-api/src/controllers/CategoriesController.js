const { CategoriesService } = require('../services/CategoriesService');

class CategoriesController {
  static async create(req, res) {
    const { name } = req.body;

    const category = await CategoriesService.create(name);

    return res.status(201).json(category);
  }

  static async getAll(_req, res) {
    const categories = await CategoriesService.getAll();

    return res.status(200).json(categories);
  }
}

module.exports = { CategoriesController };
