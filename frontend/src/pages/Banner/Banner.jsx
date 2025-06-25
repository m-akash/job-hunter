import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Banner = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://job-hunter-vercel.vercel.app/api/jobs")
      .then((res) => setJobs(res.data));
  }, []);

  return (
    <div
      className="hero min-h-[400px] my-5 md:mb-10"
      style={{
        backgroundImage: "url(https://i.ibb.co/MDb9qP5Q/4165379.jpg)",
      }}
    >
      <div className="hero-overlay bg-black/30 backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="flex flex-col hero-content text-white text-center p-4 md:p-8"
      >
        <div className="max-w-md">
          <h1 className="mb-3 md:mb-5 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            There Are {jobs.length} Job Postings Here For you!
          </h1>
          <p className="mb-3 md:mb-5 text-sm md:text-base">
            Find Jobs, Employment & Career Opportunities
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary  p-3 md:p-4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 w-full max-w-4xl">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full md:w-64 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />

          <select className="w-full md:w-auto p-2 rounded-md bg-white text-gray-700">
            <option>All Regions</option>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>United Kindom</option>
            <option>Singapur</option>
          </select>

          <select className="w-full md:w-auto p-2 rounded-md bg-white text-gray-700">
            <option>Choose a category…</option>
            <option>Accounting</option>
            <option>Developer</option>
            <option>Media & News</option>
            <option>Architect</option>
          </select>

          <button className="w-full md:w-auto bg-white text-black px-4 py-2 rounded-md hover:bg-cyan-200 transition-colors">
            🔍 SEARCH
          </button>
        </div>
        <div className="my-4 md:my-8 text-sm md:text-base">
          <p>
            <strong>Popular Search:</strong>{" "}
            <Link className="hover:text-cyan-300 transition-colors">
              developer, design, it company
            </Link>
          </p>
        </div>
        <div>
          <Link to="/jobs">
            <button className="btn btn-primary hover:bg-blue-600">
              Explore Job
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
