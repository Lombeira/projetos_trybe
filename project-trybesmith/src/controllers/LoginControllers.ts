import { Request, Response } from 'express';
import * as LoginServices from '../services/LoginServices';

export const removeWarnLint = '';

export const checkLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const {
    status,
    message,
    data: token,
  } = await LoginServices.checkLogin({
    username,
    password,
  });
  if (status >= 400) {
    return res.status(status).json({ error: message });
  }
  return res.status(status).json({ token });
};
