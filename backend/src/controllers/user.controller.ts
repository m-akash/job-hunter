import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import { IUser } from '../types';

export interface UserController {
  getUserById(req: Request, res: Response): Promise<void>;
  getUserByEmail(req: Request, res: Response): Promise<void>;
  createUser(req: Request, res: Response): Promise<void>;
}

const UserController: UserController = {
  async getUserById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const result = await UserModel.getUserById(id);
    res.send(result);
  },
  
  async getUserByEmail(req: Request, res: Response): Promise<void> {
    const email = req.query.email as string;
    const result = await UserModel.getUserByEmail(email);
    res.send(result);
  },
  
  async createUser(req: Request, res: Response): Promise<void> {
    const newUser = req.body;
    const info: Partial<IUser> = {
      name: newUser.name,
      email: newUser.email,
      role: newUser.regAs,
    };
    const result = await UserModel.createUser(info as Omit<IUser, '_id'>);
    res.send(result);
  },
};

export default UserController; 