import client from '../config/db';
import { ObjectId } from 'mongodb';
import { IJob } from '../types';

const jobsData = client.db('HireHubDB').collection<IJob>('jobs');

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

const JobModel: JobModel = {
  async getJobs(page: number, size: number): Promise<IJob[]> {
    return jobsData
      .find()
      .skip(page * size)
      .limit(size)
      .toArray();
  },
  
  async getAllJobs(): Promise<IJob[]> {
    return jobsData.find().toArray();
  },
  
  async getJobsByEmail(email: string): Promise<IJob[]> {
    return jobsData.find({ hr_mail: email }).toArray();
  },
  
  async getJobsByCategory(category: string): Promise<IJob[]> {
    return jobsData.find({ category }).toArray();
  },
  
  async getJobCount(): Promise<number> {
    return jobsData.estimatedDocumentCount();
  },
  
  async createJob(job: Omit<IJob, '_id'>): Promise<any> {
    return jobsData.insertOne(job);
  },
  
  async getJobById(id: string): Promise<IJob | null> {
    return jobsData.findOne({ _id: new ObjectId(id) });
  },
  
  async updateApplicationCount(jobId: string, cnt: number): Promise<any> {
    return jobsData.updateOne(
      { _id: new ObjectId(jobId) },
      { $set: { applicationCount: cnt } }
    );
  },
};

export default JobModel; 