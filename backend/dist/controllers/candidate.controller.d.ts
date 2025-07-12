import { Request, Response } from 'express';
export interface CandidateController {
    getAllCandidates(req: Request, res: Response): Promise<void>;
    createCandidate(req: Request, res: Response): Promise<void>;
}
declare const CandidateController: CandidateController;
export default CandidateController;
//# sourceMappingURL=candidate.controller.d.ts.map