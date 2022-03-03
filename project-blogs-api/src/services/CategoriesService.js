const { Categories } = require('../models/Categories');

class CategoriesService {
  static async create(name) {
    const [category] = await Categories.findOrCreate({
      where: { name },
    });

    return category;
  }

  static async getAll() {
    const categories = await Categories.findAll();

    return categories;
  }
}

module.exports = { CategoriesService };
