import client from '../config/db';
import { ICandidate } from '../types';

const candidateCollection = client.db('HireHubDB').collection<ICandidate>('candidates');

export interface CandidateModel {
  getAll(): Promise<ICandidate[]>;
  create(candidateInfo: Omit<ICandidate, '_id'>): Promise<any>;
}

const CandidateModel: CandidateModel = {
  async getAll(): Promise<ICandidate[]> {
    return candidateCollection.find({}).toArray();
  },
  
  async create(candidateInfo: Omit<ICandidate, '_id'>): Promise<any> {
    return candidateCollection.insertOne(candidateInfo);
  },
};

export default CandidateModel; 