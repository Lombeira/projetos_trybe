const express = require('express');
const { ProductsController } = require('../controllers/ProductsController');
const { ensureValidName } = require('../middlewares/ensureValidName');
const { ensureValidQuantity } = require('../middlewares/ensureValidQuantity');

const productsRouter = express.Router();

productsRouter.post('/', ensureValidName,
  ensureValidQuantity, ProductsController.register);

productsRouter.get('/', ProductsController.getAll);

productsRouter.get('/:id', ProductsController.find);

productsRouter.put('/:id', ensureValidName, ensureValidQuantity, ProductsController.update);

productsRouter.delete('/:id', ProductsController.delete);

module.exports = productsRouter;
