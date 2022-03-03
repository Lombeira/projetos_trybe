const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const { getTalker } = require('./fs-json');
const { isValidPassword, isValidEmail } = require('./middlewares/validations');
const {
  validateToken,
  isValidName,
  isValidAge,
  isValidTalk,
  isValidRateAndWatchedAt,
} = require('./middlewares/userValidations');

const app = express();
app.use(bodyParser.json());

const TALKER_SEED = './talker.json';
const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', validateToken, async (req, res) => {
  const talkers = await getTalker();
  const { q } = req.query;
  const search = talkers.filter((talk) => talk.name.includes(q));

  if (search === undefined || search === '') {
    return res.status(404).json(talkers);
  }

  if (!search) return res.status(404).json([]);

  return res.status(200).json(search);
});

app.get('/talker', async (req, res) => {
  const showTalker = await getTalker();
  res.status(200).json(showTalker);
});

app.get('/talker/:id', async (req, res) => {
  const showTalker = await getTalker();
  const { id } = req.params;
  const findTalker = showTalker.find((talker) => talker.id === Number(id));

  if (!findTalker) {
 return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' }); 
}

  return res.status(200).json(findTalker);
});

app.post('/login', isValidEmail, isValidPassword, async (req, res) =>
  res.status(200).json({ token: '7mqaVRXJSp886CGr' }));

app.post(
  '/talker',
  validateToken,
  isValidName,
  isValidAge,
  isValidTalk,
  isValidRateAndWatchedAt,
  async (req, res) => {
    const content = JSON.parse(await fs.readFile(TALKER_SEED, 'utf-8'));
    const { name, age, talk } = req.body;
    const lastId = content[content.length - 1].id;

    const newTalker = {
      id: lastId + 1,
      name,
      age,
      talk, 
    };
    
    const getTalkers = JSON.stringify([...content, newTalker]);
    fs.writeFile(TALKER_SEED, getTalkers);

    return res.status(201).json(newTalker);
  },
);

app.put('/talker/:id', 
validateToken,
isValidName,
isValidAge,
isValidTalk,
isValidRateAndWatchedAt,
async (req, res) => {
  const content = JSON.parse(await fs.readFile(TALKER_SEED, 'utf-8'));
  const { id } = req.params;
  const talkerIndex = content.findIndex((talker) => talker.id === parseInt(id, 10));
  const { name, age, talk } = req.body;
  const { rate, watchedAt } = talk;
  content[talkerIndex] = {
    id: Number(id),
    name,
    age: Number(age),
    talk: {
      rate: Number(rate),
      watchedAt,
    },
  };
  const talkers = JSON.stringify(content);
  await fs.writeFile(TALKER_SEED, talkers);
  return res.status(200).json(content[talkerIndex]);
});

app.delete('/talker/:id', validateToken, async (req, res) => {
  const content = JSON.parse(await fs.readFile(TALKER_SEED, 'utf-8'));
  const { id } = req.params;
  const talkerIndex = content.findIndex((talker) => talker.id === parseInt(id, 10));
  content.splice(talkerIndex, 1);
  const talkers = JSON.stringify(content);
  await fs.writeFile('./talker.json', talkers);
  return res.status(204).json({ message: 'Pessoa palestrante removida' });
});

app.listen(PORT, () => {
  console.log('Online');
});