const { ProductsEntity } = require('../models/ProductsEntity');

class ProductsService {
  static async register(name, quantity) {
    const allProducts = await ProductsEntity.getAll();

    const productExists = allProducts.some((curr) => curr.name === name);

    if (productExists) throw new Error();

    const [product] = await ProductsEntity.register(name, quantity);

    const newProduct = {
      id: product.insertId,
      name,
      quantity,
    };

    return newProduct;
  }

  static async getAll() {
    const allProducts = await ProductsEntity.getAll();

    return allProducts;
  }

  static async find(id) {
    const [product] = await ProductsEntity.find(id);

    if (product.length < 1) throw new Error();

    return product[0];
  }

  static async update(id, name, quantity) {
    await this.find(id);

    const updateProduct = await ProductsEntity.update({ id, name, quantity });

    return updateProduct;
  }

  static async delete(id) {
    const product = await this.find(id);

    await ProductsEntity.delete(id);

    return product;
  }
}

module.exports = { ProductsService };
