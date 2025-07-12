import { IJobApplication } from '../types';
export interface JobApplicationModel {
    getApplicationsByJobId(jobId: string): Promise<IJobApplication[]>;
    getApplicationsByEmail(email: string): Promise<IJobApplication[]>;
    createApplication(applicationData: Omit<IJobApplication, '_id'>): Promise<any>;
    updateApplicationStatus(id: string, status: IJobApplication['status']): Promise<any>;
}
declare const JobApplicationModel: JobApplicationModel;
export default JobApplicationModel;
//# sourceMappingURL=jobApplication.model.d.ts.map