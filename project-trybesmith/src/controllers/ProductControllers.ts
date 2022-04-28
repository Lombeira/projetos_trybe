import { Request, Response } from 'express';
import * as ProductServices from '../services/ProductServices';

export const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const { status, message, data } = await ProductServices.createProduct({
    name,
    amount,
  });
  if (status >= 400) {
    return res.status(status).json({ error: message });
  }
  return res.status(status).json(data);
};

export const getAll = async (_req: Request, res: Response) => {
  const { status, message, data } = await ProductServices.getAll();
  if (status >= 400) {
    return res.status(status).json({ error: message });
  }
  return res.status(status).json(data);
};
