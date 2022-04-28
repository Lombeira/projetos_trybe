import Joi from 'joi';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { responseValidate, capitalizeString } from '../utils/index';
import { IUser } from '../interfaces/IUser';
import * as UserModels from '../models/UserModels';

dotenv.config();

export const schemeCreateUser = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string.min': '"username" must be longer than 2 characters',
  }),
  classe: Joi.string().required().min(3).messages({
    'string.min': '"classe" must be longer than 2 characters',
  }),
  level: Joi.number().required().greater(0),
  password: Joi.string().required().min(8).messages({
    'string.min': '"password" must be longer than 7 characters',
  }),
}).strict();

export const createUser = async ({ username, classe, level, password }: IUser) => {
  const { error } = schemeCreateUser.validate({ username, classe, level, password });
  if (error) {
    return responseValidate(422, capitalizeString(error.message));
  }
  const {
    id, username: usernameModel,
  } = await UserModels.createUser({ username, classe, level, password });
  const secret = process.env.JWT_SECRET || 'meusegredo';
  const token = jwt.sign({ id, username: usernameModel }, secret);
  return responseValidate(201, '', token);
};