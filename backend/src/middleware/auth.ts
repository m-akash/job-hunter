import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IAuthRequest } from '../types';

export const verifyToken = (req: IAuthRequest, res: Response, next: NextFunction): void => {
  const token = req?.cookies?.token;
  
  if (!token) {
    res.status(401).json({ message: 'Unauthorized access' });
    return;
  }
  
  jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
    if (err) {
      res.status(401).json({ message: 'Unauthorized access' });
      return;
    }
    req.user = decoded;
    next();
  });
};

export const requireRole = (roles: string[]) => {
  return (req: IAuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }
    
    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: 'Insufficient permissions' });
      return;
    }
    
    next();
  };
}; 