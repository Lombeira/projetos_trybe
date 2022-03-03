const express = require('express');
const { BlogPostsController } = require('./controllers/BlogPostsController');
const { CategoriesController } = require('./controllers/CategoriesController');
const { UserController } = require('./controllers/UserController');
const {
  ensureValidCategories,
} = require('./middlewares/ensureValidCategories');
const {
  ensureValidCategoryName,
} = require('./middlewares/ensureValidCategoryName');
const { ensureValidEmail } = require('./middlewares/ensureValidEmail');
const { ensureValidName } = require('./middlewares/ensureValidName');
const { ensureValidPassword } = require('./middlewares/ensureValidPassword');
const { ensureValidPost } = require('./middlewares/ensureValidPost');
const { ensureValidSignin } = require('./middlewares/ensureValidSignin');
const { ensureValidToken } = require('./middlewares/ensureValidToken');

const routes = express.Router();

routes.post(
  '/user',
  ensureValidName,
  ensureValidEmail,
  ensureValidPassword,
  UserController.create,
);
routes.get('/user', ensureValidToken, UserController.getAll);
routes.get('/user/:id', ensureValidToken, UserController.findById);

routes.post('/login', ensureValidSignin, UserController.signin);

routes.get('/categories', ensureValidToken, CategoriesController.getAll);
routes.post(
  '/categories',
  ensureValidCategoryName,
  ensureValidToken,
  CategoriesController.create,
);

routes.post(
  '/post',
  ensureValidPost,
  ensureValidCategories,
  ensureValidToken,
  BlogPostsController.create,
);
routes.get('/post', ensureValidToken, BlogPostsController.getAll);
routes.get('/post/:id', ensureValidToken, BlogPostsController.findById);

module.exports = { routes };
