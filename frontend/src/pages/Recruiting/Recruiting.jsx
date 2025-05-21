import React from "react";
import Lottie from "lottie-react";
import recruitingImg from "../../assets/icons/recruitment.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Recruiting = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="hero bg-transparent min-h-[70vh] py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="hero-content flex-col gap-8 lg:gap-15 lg:flex-row-reverse max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-[200px] sm:h-[400px] lg:h-[300px]"
            src={recruitingImg}
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Recruiting?
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs in our database.
          </p>

          <Link to="/">
            <button className="btn btn-primary text-sm sm:text-base px-6 py-2">
              Start Recruiting Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Recruiting;
