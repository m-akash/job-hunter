import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import FeatureJobsCard from "./FeatureJobsCard";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://backend-omega-beryl.vercel.app/jobs?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="my-4 sm:my-6 md:my-8 lg:my-10 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
          Featured Jobs
        </h1>
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Know your worth and find the job that qualify your life
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {jobs.map((job) => (
          <FeatureJobsCard key={job._id} job={job}></FeatureJobsCard>
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureJobs;
