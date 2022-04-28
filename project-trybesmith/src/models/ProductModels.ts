import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/IProduct';

export const createProduct = async ({ name, amount }: IProduct) => {
  const query = `
  INSERT INTO Trybesmith.Products
  (name, amount) VALUES
  (?, ?)`;
  const values = [name, amount];
  const [data] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = data;
  const newUser = { item: { id, name, amount } };
  return newUser;
};

export const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [data] = await connection.execute(query);
  return data;
};
