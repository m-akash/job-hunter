import { Request, Response } from 'express';
import JobModel from '../models/job.model';
import { IJob } from '../types';

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

const JobController: JobController = {
  async getJobs(req: Request, res: Response): Promise<void> {
    const page = parseInt(req.query.page as string) || 0;
    const size = parseInt(req.query.limit as string) || 10;
    const result = await JobModel.getJobs(page, size);
    res.send(result);
  },
  
  async getAllJobs(req: Request, res: Response): Promise<void> {
    const result = await JobModel.getAllJobs();
    res.send(result);
  },
  
  async getJobsByEmail(req: Request, res: Response): Promise<void> {
    const email = req.query.email as string;
    const result = await JobModel.getJobsByEmail(email);
    res.send(result);
  },
  
  async getJobsByCategory(req: Request, res: Response): Promise<void> {
    const category = req.query.category as string;
    const result = await JobModel.getJobsByCategory(category);
    res.send(result);
  },
  
  async getJobCount(req: Request, res: Response): Promise<void> {
    const count = await JobModel.getJobCount();
    res.send({ count });
  },
  
  async createJob(req: Request, res: Response): Promise<void> {
    const job: Omit<IJob, '_id'> = req.body;
    const result = await JobModel.createJob(job);
    res.send(result);
  },
  
  async getJobById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const result = await JobModel.getJobById(id);
    res.send(result);
  },
  
  async getCategoryCount(req: Request, res: Response): Promise<void> {
    const countCategory = await JobModel.getJobCount();
    res.send({ countCategory });
  },
};

export default JobController; 