import client from '../config/db';
import { ObjectId } from 'mongodb';
import { IJobApplication } from '../types';

const jobApplicationData = client.db('HireHubDB').collection<IJobApplication>('jobApplication');

export interface JobApplicationModel {
  getApplicationsByJobId(jobId: string): Promise<IJobApplication[]>;
  getApplicationsByEmail(email: string): Promise<IJobApplication[]>;
  createApplication(applicationData: Omit<IJobApplication, '_id'>): Promise<any>;
  updateApplicationStatus(id: string, status: IJobApplication['status']): Promise<any>;
}

const JobApplicationModel: JobApplicationModel = {
  async getApplicationsByJobId(jobId: string): Promise<IJobApplication[]> {
    return jobApplicationData.find({ job_id: jobId }).toArray();
  },
  
  async getApplicationsByEmail(email: string): Promise<IJobApplication[]> {
    return jobApplicationData.find({ applicant_email: email }).toArray();
  },
  
  async createApplication(applicationData: Omit<IJobApplication, '_id'>): Promise<any> {
    return jobApplicationData.insertOne(applicationData);
  },
  
  async updateApplicationStatus(id: string, status: IJobApplication['status']): Promise<any> {
    return jobApplicationData.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );
  },
};

export default JobApplicationModel; 