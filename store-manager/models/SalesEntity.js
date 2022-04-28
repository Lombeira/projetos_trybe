const { connection } = require('./connection');

class SalesEntity {
  static async register(sale) {
    const [newSale] = await connection.execute(
      'INSERT INTO StoreManager.sales VALUES ()',
    );

    const data = sale.map(({ product_id: productId, quantity }) => connection
      .execute('INSERT INTO StoreManager.sales_products VALUES (?, ?, ?)',
        [newSale.insertId, productId, quantity]));

    await Promise.all(data);

    return newSale;
  }

  static async getAll() {
    return connection
      .execute(`SELECT sales.id AS saleId, sales.date, products.product_id, products.quantity
      FROM StoreManager.sales AS sales
      INNER JOIN StoreManager.sales_products AS products ON sale_id = sales.id`);
  }

  static async find(id) {
    return connection
      .execute(`SELECT sales.date, products.product_id, products.quantity
      FROM StoreManager.sales AS sales
      INNER JOIN StoreManager.sales_products AS products ON sale_id = sales.id
      WHERE id= ?`, [id]);
  }

  static async update(id, sale) {
    return connection
      .execute('UPDATE StoreManager.sales_products SET product_id= ?, quantity= ? WHERE sale_id= ?',
        [sale[0].product_id, sale[0].quantity, id]);
  }

  static async delete(id) {
    return connection
      .execute(`DELETE FROM StoreManager.sales
            WHERE id= ?`,
        [id]);
  }
}

module.exports = { SalesEntity };
