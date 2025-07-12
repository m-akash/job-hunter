import { IJob } from '../types';
export interface JobModel {
    getJobs(page: number, size: number): Promise<IJob[]>;
    getAllJobs(): Promise<IJob[]>;
    getJobsByEmail(email: string): Promise<IJob[]>;
    getJobsByCategory(category: string): Promise<IJob[]>;
    getJobCount(): Promise<number>;
    createJob(job: Omit<IJob, '_id'>): Promise<any>;
    getJobById(id: string): Promise<IJob | null>;
    updateApplicationCount(jobId: string, cnt: number): Promise<any>;
}
declare const JobModel: JobModel;
export default JobModel;
//# sourceMappingURL=job.model.d.ts.map