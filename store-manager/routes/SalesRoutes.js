const express = require('express');
const { SalesController } = require('../controllers/SalesController');
const { ensureValidSale } = require('../middlewares/ensureValidSale');

const salesRouter = express.Router();

salesRouter.post('/', ensureValidSale, SalesController.register);

salesRouter.get('/', SalesController.getAll);

salesRouter.get('/:id', SalesController.find);

salesRouter.put('/:id', ensureValidSale, SalesController.update);

salesRouter.delete('/:id', SalesController.delete);

module.exports = salesRouter;
