const { SalesService } = require('../services/SalesService');

const saleNotFound = 'Sale not found';

class SalesController {
  static async register(req, res) {
    const sale = req.body;

    const registerSale = await SalesService.register(sale);

    return res.status(201).json(registerSale);
  }

  static async getAll(_req, res) {
    const sales = await SalesService.getAll();

    return res.status(200).json(sales);
  }

  static async find(req, res) {
    try {
      const { id } = req.params;

      const sales = await SalesService.find(id);

      return res.status(200).json(sales);
    } catch (err) {
      return res.status(404).json({ message: saleNotFound });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const sale = req.body;

    const updateSale = await SalesService.update(id, sale);

    return res.status(200).json(updateSale);
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      const sale = await SalesService.delete(id);

      return res.status(200).json(sale);
    } catch (err) {
      return res.status(404).json({ message: saleNotFound });
    }
  }
}

module.exports = { SalesController };
