import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      {jobs.map((job) => (
        <JobsCard key={job._id} job={job}></JobsCard>
      ))}
    </div>
  );
};

export default Jobs;
