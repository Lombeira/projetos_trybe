const { connection } = require('./connection');

class ProductsEntity {
  static async register(name, quantity) {
    return connection.execute(
      'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)',
      [name, quantity],
    );
  }

  static async getAll() {
    const [products] = await connection.execute(
      'SELECT * from StoreManager.products',
    );

    return products;
  }

  static async find(id) {
    return connection.execute(
      'SELECT * from StoreManager.products WHERE id = ?',
      [id],
    );
  }

  static async update({ id, name, quantity }) {
    await connection.execute(
      'UPDATE StoreManager.products SET name= ?, quantity= ? WHERE id= ?',
      [name, quantity, id],
    );

    return { id, name, quantity };
  }

  static async delete(id) {
    return connection.execute('DELETE FROM StoreManager.products WHERE id= ?', [
      id,
    ]);
  }
}

module.exports = { ProductsEntity };
