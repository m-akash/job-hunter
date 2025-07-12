import { Request, Response } from 'express';
export interface JobController {
    getJobs(req: Request, res: Response): Promise<void>;
    getAllJobs(req: Request, res: Response): Promise<void>;
    getJobsByEmail(req: Request, res: Response): Promise<void>;
    getJobsByCategory(req: Request, res: Response): Promise<void>;
    getJobCount(req: Request, res: Response): Promise<void>;
    createJob(req: Request, res: Response): Promise<void>;
    getJobById(req: Request, res: Response): Promise<void>;
    getCategoryCount(req: Request, res: Response): Promise<void>;
}
declare const JobController: JobController;
export default JobController;
//# sourceMappingURL=job.controller.d.ts.map