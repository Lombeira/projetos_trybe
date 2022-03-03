const { ProductsService } = require('../services/ProductsService');

const productAlreadyExists = 'Product already exists';

const productNotFound = 'Product not found';

class ProductsController {
  static async register(req, res) {
    try {
      const { name, quantity } = req.body;

      const registerProductService = await ProductsService.register(name, quantity);

      return res.status(201).json(registerProductService);
    } catch (err) {
      return res.status(409).json({ message: productAlreadyExists });
    }
  }

  static async getAll(_req, res) {
    const allProducts = await ProductsService.getAll();

    return res.status(200).json(allProducts);
  }

  static async find(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductsService.find(id);

      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({ message: productNotFound });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, quantity } = req.body;

      const product = await ProductsService.update(id, name, quantity);

      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({ message: productNotFound });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductsService.delete(id);

      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({ message: productNotFound });
    }
  }
}

module.exports = { ProductsController };
