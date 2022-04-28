import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as UserModels from '../models/UserModels';

dotenv.config();

const getJWTUserById = async (decodedJWT: string | jwt.JwtPayload) => {
  if (typeof decodedJWT === 'object') {
    const user = await UserModels.getById(Number(decodedJWT.id));
    return Object.keys(user);
  }
  return false;
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ error: 'Token not found' });
    }

    const secret = process.env.JWT_SECRET || 'secret';

    const decodedJWT = jwt.verify(authorization, secret);

    const user = await getJWTUserById(decodedJWT);

    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default verifyToken;
