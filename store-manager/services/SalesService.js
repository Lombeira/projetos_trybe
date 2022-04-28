const { SalesEntity } = require("../models/SalesEntity");

class SalesService {
  static async register(sale) {
    const newSale = await SalesEntity.register(sale);

    const response = {
      id: newSale.insertId,
      itemsSold: sale,
    };

    return response;
  }

  static async getAll() {
    const [sales] = await SalesEntity.getAll();

    return sales;
  }

  static async find(id) {
    const [sales] = await SalesEntity.find(id);

    if (!sales || sales.length === 0) throw new Error();

    return sales;
  }

  static async update(id, sale) {
    await SalesEntity.update(id, sale);

    const response = {
      saleId: +id,
      itemUpdated: sale,
    };

    return response;
  }

  static async delete(id) {
    const sale = await this.find(id);

    if (!sale || sale.length === 0) throw new Error();

    await SalesEntity.delete(id);

    return sale;
  }
}

module.exports = { SalesService };
