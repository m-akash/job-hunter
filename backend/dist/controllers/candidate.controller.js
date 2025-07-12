"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const candidate_model_1 = __importDefault(require("../models/candidate.model"));
const getAllCandidates = async (req, res) => {
    try {
        const candidates = await candidate_model_1.default.getAll();
        res.status(200).json(candidates);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching candidates', error });
    }
};
const createCandidate = async (req, res) => {
    try {
        const candidateInfo = req.body;
        const result = await candidate_model_1.default.create(candidateInfo);
        res
            .status(201)
            .json({ message: 'Candidate created successfully', data: result });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating candidate', error });
    }
};
const CandidateController = {
    getAllCandidates,
    createCandidate,
};
exports.default = CandidateController;
//# sourceMappingURL=candidate.controller.js.map