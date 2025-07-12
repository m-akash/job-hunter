import { Response, NextFunction } from 'express';
import { IAuthRequest } from '../types';
export declare const verifyToken: (req: IAuthRequest, res: Response, next: NextFunction) => void;
export declare const requireRole: (roles: string[]) => (req: IAuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map