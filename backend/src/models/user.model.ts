import client from '../config/db';
import { ObjectId } from 'mongodb';
import { IUser } from '../types';

const userData = client.db('HireHubDB').collection<IUser>('userInfo');

export interface UserModel {
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser[]>;
  getAllUsers(): Promise<IUser[]>;
  createUser(info: Omit<IUser, '_id'>): Promise<any>;
}

const UserModel: UserModel = {
  async getUserById(id: string): Promise<IUser | null> {
    return userData.findOne({ _id: new ObjectId(id) });
  },
  
  async getUserByEmail(email: string): Promise<IUser[]> {
    return userData.find({ email }).toArray();
  },
  
  async getAllUsers(): Promise<IUser[]> {
    return userData.find({}).toArray();
  },
  
  async createUser(info: Omit<IUser, '_id'>): Promise<any> {
    return userData.insertOne(info);
  },
};

export default UserModel; 