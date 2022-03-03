const isValidName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
  return res
  .status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const isValidAge = (req, res, next) => {
  const { age } = req.body;

  if (!age || age === '') return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const isValidTalk = (req, res, next) => {
  const { talk } = req.body;
  
  if (!talk || Object.keys(talk).length === 0 || Object.keys(talk).length !== 2) {
      return res.status(400)
      .json(
          { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
          );
  }
  next();
};

const isValidRateAndWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const validDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (talk.rate < 1 || talk.rate > 5) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  if (!validDate.test(talk.watchedAt)) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
    if (authorization !== '7mqaVRXJSp886CGr') {
        return res
    .status(401).json({ message: 'Token inválido' });
    }
    next();
};

module.exports = { validateToken, isValidName, isValidAge, isValidTalk, isValidRateAndWatchedAt };