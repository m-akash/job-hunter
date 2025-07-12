// @ts-nocheck
import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Candidates = () => {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get("/api/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Failed to fetch candidates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [axiosSecure]);

  const filteredCandidates = candidates.filter((candidate) => {
    const searchLower = search.toLowerCase();
    const nameMatch = candidate.name?.toLowerCase().includes(searchLower);
    const skillsMatch =
      Array.isArray(candidate.skills) &&
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchLower)
      );
    return nameMatch || skillsMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Meet Our Candidates
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCandidates.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No candidates found.
            </div>
          ) : (
            filteredCandidates.map((candidate) => (
              <div
                key={candidate._id || candidate.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={candidate.avatar || "https://i.pravatar.cc/150"}
                  alt={candidate.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-blue-400"
                />
                <h2 className="text-xl font-semibold mb-1">
                  {candidate.name || "N/A"}
                </h2>
                <p className="text-blue-600 font-medium mb-2">
                  {candidate.role || "Role not specified"}
                </p>
                <p className="text-gray-500 mb-2">
                  {candidate.location || "Location not specified"}
                </p>
                <p className="text-gray-700 mb-2">
                  Experience: {candidate.experience || "N/A"}
                </p>
                <div className="flex flex-wrap gap-2 mb-2 justify-center">
                  {Array.isArray(candidate.skills) &&
                  candidate.skills.length > 0 ? (
                    candidate.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500">
                      No skills listed
                    </span>
                  )}
                </div>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  View Profile
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Candidates;
