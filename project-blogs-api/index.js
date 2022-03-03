const express = require('express');
const { routes } = require('./src/routes');

require('./src/database');
require('dotenv/config');

const app = express();

app.use(express.json());

app.use(routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
