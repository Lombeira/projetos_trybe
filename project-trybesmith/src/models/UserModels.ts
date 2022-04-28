import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser, IUserId } from '../interfaces/IUser';
import ILogin from '../interfaces/ILogin';

export const createUser = async ({
  username,
  classe,
  level,
  password,
}: IUser) => {
  const query = `
  INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES
  (?, ?, ?, ?)`;
  const values = [username, classe, level, password];
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = data;
  const newUser: IUserId = { id, username, classe, level, password };
  return newUser;
};

export const getByLogin = async ({ username, password }: ILogin) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? LIMIT 1';
  const values = [username, password];
  const [data] = await connection.execute<RowDataPacket[]>(query, values);
  return data;
};

export const getById = async (id: number) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE id = ?';
  const values = [id];
  const [data] = await connection.execute<RowDataPacket[]>(query, values);
  return data;
};
