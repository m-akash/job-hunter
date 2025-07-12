// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import accountingImg from "../../assets/icons/accounting.png";
import marketingImg from "../../assets/icons/megaphone.png";
import designImg from "../../assets/icons/curve.png";
import developemntImg from "../../assets/icons/web-programming.png";
import healthCareImg from "../../assets/icons/healthcare.png";
import humanImg from "../../assets/icons/profesions-and-jobs.png";
import automativeImg from "../../assets/icons/teamwork.png";
import customerServiceImg from "../../assets/icons/customer-service.png";
import projectManImg from "../../assets/icons/project-management.png";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="my-5 md:my-10 px-4 md:px-6"
    >
      <div>
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
          Popular Job Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 my-6 md:my-10">
        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={accountingImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Accounting"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Account / Finance
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={marketingImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Marketing"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Marketing
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={designImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Design"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Design
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={developemntImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Development"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Development
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={humanImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Human Resource"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Human Resource
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={automativeImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Automotive Job"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Automotive Job
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={customerServiceImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Customer-Service"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Customer Service
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={healthCareImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Health"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Health & Care
            </Link>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 bg-gray-200 text-black p-4 md:p-5 border rounded-md hover:bg-white transition-colors duration-300">
          <figure className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center hover:bg-white rounded-md p-2">
            <img
              src={projectManImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link
              to="/jobs/category/Project Management"
              className="font-bold text-lg md:text-xl hover:text-black transition-colors duration-300"
            >
              Project Management
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;
