import { Request, Response } from 'express';
export interface UserController {
    getUserById(req: Request, res: Response): Promise<void>;
    getUserByEmail(req: Request, res: Response): Promise<void>;
    createUser(req: Request, res: Response): Promise<void>;
}
declare const UserController: UserController;
export default UserController;
//# sourceMappingURL=user.controller.d.ts.map