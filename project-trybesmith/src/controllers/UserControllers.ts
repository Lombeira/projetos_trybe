import { Request, Response } from 'express';
import * as UserServices from '../services/UserServices';

export const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const {
    status,
    message,
    data: token,
  } = await UserServices.createUser({
    username,
    classe,
    level,
    password,
  });
  if (status >= 400) {
    return res.status(status).json({ error: message });
  }
  return res.status(status).json({ token });
};

export const removeWarnLint = () => {};
