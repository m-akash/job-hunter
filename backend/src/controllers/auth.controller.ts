import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../types';

export interface AuthController {
  login(req: Request, res: Response): Promise<void>;
  logout(req: Request, res: Response): Promise<void>;
}

const AuthController: AuthController = {
  async login(req: Request, res: Response): Promise<void> {
    const user: IUser = req.body;
    const token = jwt.sign(user, process.env.SECRET_KEY!, {
      expiresIn: '23h',
    });
    
    res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      })
      .send({ success: true });
  },
  
  async logout(req: Request, res: Response): Promise<void> {
    res
      .clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      })
      .send({ success: true });
  },
};

export default AuthController; 