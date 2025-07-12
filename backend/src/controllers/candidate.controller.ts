import { Request, Response } from 'express';
import CandidateModel from '../models/candidate.model';
import { ICandidate } from '../types';

export interface CandidateController {
  getAllCandidates(req: Request, res: Response): Promise<void>;
  createCandidate(req: Request, res: Response): Promise<void>;
}

const getAllCandidates = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidates = await CandidateModel.getAll();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching candidates', error });
  }
};

const createCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidateInfo: Omit<ICandidate, '_id'> = req.body;
    const result = await CandidateModel.create(candidateInfo);
    res
      .status(201)
      .json({ message: 'Candidate created successfully', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Error creating candidate', error });
  }
};

const CandidateController: CandidateController = {
  getAllCandidates,
  createCandidate,
};

export default CandidateController; 