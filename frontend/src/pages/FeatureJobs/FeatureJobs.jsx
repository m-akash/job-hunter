import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { motion } from "framer-motion";

const FeatureJobs = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="my-10 px-4 sm:px-6 lg:px-8"
    >
      <div>
        <h1 className="text-center text-xl sm:text-2xl mb-2">Featured Jobs</h1>
        <p className="text-center text-xs sm:text-sm">
          Know your worth and find the job that qualify your life
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-10">
        <div className="flex gap-4 sm:gap-6 bg-cyan-400 text-black py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
          <div className="flex flex-col gap-3 sm:gap-4 justify-between items-start w-full">
            <div className="flex flex-row justify-between items-start w-full">
              <Link to="/jobs" className="hover:text-white hover:text-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Software Engineer(Backend)
                </h2>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span>Uber</span>
              <span>London, UK</span>
              <span>10 hours ago</span>
              <span>$30-$45k</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <span className="text-xs bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Full-Time
              </span>
              <span className="text-xs bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Private
              </span>
              <span className="text-xs bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Urgent
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 bg-cyan-400 text-black py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
          <div className="flex flex-col gap-3 sm:gap-4 justify-between items-start w-full">
            <div className="flex flex-row justify-between items-start w-full">
              <Link className="hover:text-white hover:text-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Software Engineer(Backend)
                </h2>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span>Uber</span>
              <span>London, UK</span>
              <span>10 hours ago</span>
              <span>$30-$45k</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <span className="text-xs bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Full-Time
              </span>
              <span className="text-xs bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Private
              </span>
              <span className="text-xs bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Urgent
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 bg-cyan-400 text-black py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
          <div className="flex flex-col gap-3 sm:gap-4 justify-between items-start w-full">
            <div className="flex flex-row justify-between items-start w-full">
              <Link className="hover:text-white hover:text-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Software Engineer(Backend)
                </h2>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span>Uber</span>
              <span>London, UK</span>
              <span>10 hours ago</span>
              <span>$30-$45k</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <span className="text-xs bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Full-Time
              </span>
              <span className="text-xs bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Private
              </span>
              <span className="text-xs bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Urgent
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 bg-cyan-400 text-black py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
          <div className="flex flex-col gap-3 sm:gap-4 justify-between items-start w-full">
            <div className="flex flex-row justify-between items-start w-full">
              <Link className="hover:text-white hover:text-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Software Engineer(Backend)
                </h2>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span>Uber</span>
              <span>London, UK</span>
              <span>10 hours ago</span>
              <span>$30-$45k</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <span className="text-xs bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Full-Time
              </span>
              <span className="text-xs bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Private
              </span>
              <span className="text-xs bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Urgent
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 bg-cyan-400 text-black py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
          <div className="flex flex-col gap-3 sm:gap-4 justify-between items-start w-full">
            <div className="flex flex-row justify-between items-start w-full">
              <Link className="hover:text-white hover:text-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Software Engineer(Backend)
                </h2>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span>Uber</span>
              <span>London, UK</span>
              <span>10 hours ago</span>
              <span>$30-$45k</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <span className="text-xs bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Full-Time
              </span>
              <span className="text-xs bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Private
              </span>
              <span className="text-xs bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Urgent
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 bg-cyan-400 text-black py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
          <div className="flex flex-col gap-3 sm:gap-4 justify-between items-start w-full">
            <div className="flex flex-row justify-between items-start w-full">
              <Link className="hover:text-white hover:text-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Software Engineer(Backend)
                </h2>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span>Uber</span>
              <span>London, UK</span>
              <span>10 hours ago</span>
              <span>$30-$45k</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <span className="text-xs bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Full-Time
              </span>
              <span className="text-xs bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Private
              </span>
              <span className="text-xs bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6">
                Urgent
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-primary">Load More Listing</button>
      </div>
    </motion.div>
  );
};

export default FeatureJobs;
