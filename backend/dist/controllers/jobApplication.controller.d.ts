import { Request, Response } from 'express';
export interface JobApplicationController {
    getApplicationsByJobId(req: Request, res: Response): Promise<void>;
    getApplicationsByEmail(req: Request, res: Response): Promise<void>;
    createApplication(req: Request, res: Response): Promise<void>;
    updateApplicationStatus(req: Request, res: Response): Promise<void>;
}
declare const JobApplicationController: JobApplicationController;
export default JobApplicationController;
//# sourceMappingURL=jobApplication.controller.d.ts.map