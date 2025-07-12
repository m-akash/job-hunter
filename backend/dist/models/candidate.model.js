"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const candidateCollection = db_1.default.db('HireHubDB').collection('candidates');
const CandidateModel = {
    async getAll() {
        return candidateCollection.find({}).toArray();
    },
    async create(candidateInfo) {
        return candidateCollection.insertOne(candidateInfo);
    },
};
exports.default = CandidateModel;
//# sourceMappingURL=candidate.model.js.map