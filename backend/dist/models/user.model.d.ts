import { IUser } from '../types';
export interface UserModel {
    getUserById(id: string): Promise<IUser | null>;
    getUserByEmail(email: string): Promise<IUser[]>;
    getAllUsers(): Promise<IUser[]>;
    createUser(info: Omit<IUser, '_id'>): Promise<any>;
}
declare const UserModel: UserModel;
export default UserModel;
//# sourceMappingURL=user.model.d.ts.map