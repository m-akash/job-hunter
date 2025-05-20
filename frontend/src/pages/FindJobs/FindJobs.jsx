import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";

const FindJobs = () => {
  return (
    <div className="min-h-screen my-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gradient-to-r from-blue-900 to-violet-800 py-8 md:py-5 h-30">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl text-center md:text-4xl font-bold text-white mb-2">
            Find Jobs
          </h1>
          <div className="flex justify-center items-center text-gray-200">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2"> / </span>
            <span className="text-white">Jobs</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-6 bg-gray-400 text-black my-5 py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
        <div className="flex flex-col gap-3 md:px-15 sm:gap-4 justify-between items-start w-full">
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
          <div className="flex flex-row justify-between items-start w-full">
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
            <Link>
              <button className="btn btn-soft">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
