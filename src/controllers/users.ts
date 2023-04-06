import { Request, Response } from 'express';
import { User } from '../models/user';

const users: User[] = [];

export const getUsers = (req: Request, res: Response): void => {
  res.status(200).json(users);
};

export const createUser = (req: Request, res: Response): void => {
  const newUser: User = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};
