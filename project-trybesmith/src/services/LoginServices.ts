import Joi from 'joi';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { capitalizeString, responseValidate } from '../utils/index';
import ILogin from '../interfaces/ILogin';
import * as UserModels from '../models/UserModels';

dotenv.config();

export const schemeLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const checkLogin = async ({ username, password }: ILogin) => {
  const { error } = schemeLogin.validate({ username, password });
  if (error) {
    return responseValidate(400, capitalizeString(error.message));
  }
  const users = await UserModels.getByLogin({ username, password });

  if (!users.length) {
    return responseValidate(401, 'Username or password invalid');
  }

  const userLogged = users[0];

  const secret = process.env.JWT_SECRET || 'secret';
  const token = jwt.sign(
    { id: userLogged.id, username: userLogged.username },
    secret,
  );
  return responseValidate(200, '', token);
};
