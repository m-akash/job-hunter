import axios from "axios";
import React, { useEffect, useState } from "react";
import JobsCategoriesCard from "./JobsCategoriesCard";
import { useParams } from "react-router-dom";

const JobCategories = () => {
  const [jobs, setJobs] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs/category?category=${category}`)
      .then((res) => {
        setJobs(res.data);
      });
  }, [category]);

  return (
    <div>
      <div className="flex flex-row justify-center items-center my-10">
        <h1 className="text-3xl">
          {jobs.length} Jobs in {category?.replace(/-/g, " ")}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {jobs.map((job) => (
          <JobsCategoriesCard key={job._id} job={job}></JobsCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
