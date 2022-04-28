import Joi from 'joi';
import { responseValidate, capitalizeString } from '../utils/index';
import IProduct from '../interfaces/IProduct';
import * as ProductModels from '../models/ProductModels';

const schemeProduct = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.min': '"name" must be longer than 2 characters',
  }),
  amount: Joi.string().required().min(3).messages({
    'string.min': '"amount" must be longer than 2 characters',
  }),
}).strict();

export const createProduct = async ({ name, amount }: IProduct) => {
  const { error } = schemeProduct.validate({ name, amount });
  if (error) {
    return responseValidate(422, capitalizeString(error.message));
  }
  const data = await ProductModels.createProduct({ name, amount });
  return responseValidate(201, '', data);
};

export const getAll = async () => {
  const data = await ProductModels.getAll();
  return responseValidate(200, '', data);
};
