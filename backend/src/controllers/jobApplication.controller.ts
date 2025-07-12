import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import JobApplicationModel from '../models/jobApplication.model';
import JobModel from '../models/job.model';
import { IJobApplication } from '../types';

export interface JobApplicationController {
  getApplicationsByJobId(req: Request, res: Response): Promise<void>;
  getApplicationsByEmail(req: Request, res: Response): Promise<void>;
  createApplication(req: Request, res: Response): Promise<void>;
  updateApplicationStatus(req: Request, res: Response): Promise<void>;
}

const JobApplicationController: JobApplicationController = {
  async getApplicationsByJobId(req: Request, res: Response): Promise<void> {
    const jobId = req.params.job_id;
    const result = await JobApplicationModel.getApplicationsByJobId(jobId);
    res.send(result);
  },
  
  async getApplicationsByEmail(req: Request, res: Response): Promise<void> {
    const email = req.query.email as string;
    const result = await JobApplicationModel.getApplicationsByEmail(email);
    
    for (const application of result) {
      const jobId = typeof application.jobId === 'string' ? application.jobId : application.jobId.toString();
      const job = await JobModel.getJobById(jobId);
      if (job) {
        (application as any).title = job.title;
        (application as any).company = job.company;
        (application as any).location = job.location;
      }
    }
    res.send(result);
  },
  
  async createApplication(req: Request, res: Response): Promise<void> {
    const applicationData: Omit<IJobApplication, '_id'> = req.body;
    const result = await JobApplicationModel.createApplication(applicationData);
    
    // Update application count
    const jobId = typeof applicationData.jobId === 'string' ? applicationData.jobId : applicationData.jobId.toString();
    const job = await JobModel.getJobById(jobId);
    let cnt = 0;
    if (job && (job as any).applicationCount) {
      cnt = (job as any).applicationCount + 1;
    } else {
      cnt = 1;
    }
    await JobModel.updateApplicationCount(jobId, cnt);
    res.send(result);
  },
  
  async updateApplicationStatus(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = req.body;
    const result = await JobApplicationModel.updateApplicationStatus(
      id,
      body.status
    );
    res.send(result);
  },
};

export default JobApplicationController; 