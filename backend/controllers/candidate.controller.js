const CandidateModel = require("../models/candidate.model");

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await CandidateModel.getAll();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates", error });
  }
};

const createCandidate = async (req, res) => {
  try {
    const candidateInfo = req.body;
    const result = await CandidateModel.create(candidateInfo);
    res
      .status(201)
      .json({ message: "Candidate created successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Error creating candidate", error });
  }
};

module.exports = {
  getAllCandidates,
  createCandidate,
};
