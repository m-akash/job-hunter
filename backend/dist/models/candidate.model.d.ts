import { ICandidate } from '../types';
export interface CandidateModel {
    getAll(): Promise<ICandidate[]>;
    create(candidateInfo: Omit<ICandidate, '_id'>): Promise<any>;
}
declare const CandidateModel: CandidateModel;
export default CandidateModel;
//# sourceMappingURL=candidate.model.d.ts.map