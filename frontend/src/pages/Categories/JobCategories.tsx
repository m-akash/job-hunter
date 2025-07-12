// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import JobsCategoriesCard from "./JobsCategoriesCard";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const JobCategories = () => {
  const [jobs, setJobs] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://job-hunter-vercel.vercel.app/api/jobs/category?category=${category}`
      )
      .then((res) => {
        setJobs(res.data);
      });
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            {jobs.length} Jobs in {category?.replace(/-/g, " ")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg"
          >
            Find your dream job in {category?.replace(/-/g, " ")} category
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 gap-6 sm:gap-8"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <JobsCategoriesCard job={job} />
            </motion.div>
          ))}
        </motion.div>

        {jobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <h3 className="text-xl sm:text-2xl text-gray-600">
              No jobs found in this category
            </h3>
            <p className="text-gray-500 mt-2">
              Please check back later or explore other categories
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default JobCategories;
