// @ts-nocheck
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

import jobSeekerImg from "../../assets/images/job-seeker.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="hero  bg-transparent h-150 my-10"
    >
      <div className="hero-content flex-col gap-15 lg:flex-row">
        <img src={jobSeekerImg} className="w-2xl  rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">
            Millions of Jobs. Find the one that suits you.
          </h1>
          <p className="py-6">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>
          <div className="font-thin my-5">
            <div className="flex justify-start items-center gap-6">
              <IoCheckmarkOutline />
              <span> Bring to the table win-win survival</span>
              <br />
              <br />
            </div>
            <div className="flex justify-start items-center gap-6">
              <IoCheckmarkOutline />
              <span>Capitalize on low hanging fruit to identify</span>
              <br />
              <br />
            </div>

            <div className="flex justify-start items-center gap-6">
              <IoCheckmarkOutline />
              <span>But I must explain to you how all this</span>
              <br />
              <br />
            </div>
          </div>
          <Link to="/jobs">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
