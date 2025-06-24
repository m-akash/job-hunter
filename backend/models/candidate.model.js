const client = require("../config/db");

const candidateCollection = client.db("HireHubDB").collection("candidates");

const CandidateModel = {
  async getAll() {
    return candidateCollection.find({}).toArray();
  },
  async create(candidateInfo) {
    return candidateCollection.insertOne(candidateInfo);
  },
};

module.exports = CandidateModel;
