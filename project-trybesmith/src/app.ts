import express from 'express';
import * as UserControllers from './controllers/UserControllers';
import * as LoginControllers from './controllers/LoginControllers';
import * as ProductControllers from './controllers/ProductControllers';
import verifyToken from './middlewares/verifyToken';

const app = express();

app.use(express.json());

app.route('/users').post(UserControllers.createUser);

app.route('/login').post(LoginControllers.checkLogin);

app
  .route('/products')
  .post(verifyToken, ProductControllers.createProduct)
  .get(verifyToken, ProductControllers.getAll);

export default app;
