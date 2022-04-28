const bodyParser = require('body-parser');
const express = require('express');
const productsRouter = require('./routes/ProductsRoutes');
const salesRouter = require('./routes/SalesRoutes');

const app = express();
app.use(bodyParser.json());
require('dotenv').config();

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
