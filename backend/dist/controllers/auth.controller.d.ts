import { Request, Response } from 'express';
export interface AuthController {
    login(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
}
declare const AuthController: AuthController;
export default AuthController;
//# sourceMappingURL=auth.controller.d.ts.map