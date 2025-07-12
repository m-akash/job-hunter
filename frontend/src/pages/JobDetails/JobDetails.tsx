// @ts-nocheck
import { Link, useLoaderData } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import companyIcon from "../../assets/icons/office-building.png";
import locationIcon from "../../assets/icons/location.png";
import timeIcon from "../../assets/icons/clock.png";
import moneyIcon from "../../assets/icons/save-money.png";
const JobDetails = () => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    jobPosition,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    status,
  } = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="min-h-screen my-5 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="flex flex-col sm:flex-row gap-3 my-5 sm:gap-4 md:gap-6 bg-white text-gray-800 py-3 sm:py-4 md:py-5 lg:py-6 px-3 sm:px-4 md:px-6 lg:px-8 border rounded-lg hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-between items-start w-full">
          <div className="flex flex-row justify-between items-start w-full">
            <Link
              to="/jobs"
              className="hover:text-white transition-colors duration-300 max-w-[80%] sm:max-w-[90%]"
            >
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold truncate">
                {title}
              </h2>
            </Link>
            <Link className="hover:bg-white/20 rounded-full p-1 sm:p-1.5 transition-colors duration-300 flex-shrink-0">
              <CiBookmark className="text-lg sm:text-xl md:text-2xl" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full">
            <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base">
              <img
                src={companyIcon}
                alt="Company"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="truncate">{company}</span>
            </div>

            <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base">
              <img
                src={locationIcon}
                alt="Location"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="truncate">{location}</span>
            </div>

            <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base">
              <img
                src={timeIcon}
                alt="Deadline"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="truncate">{applicationDeadline}</span>
            </div>

            <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base">
              <img
                src={moneyIcon}
                alt="Salary"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="truncate">
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 items-start w-full">
            {requirements.map((req, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm bg-cyan-600 opacity-150 text-gray-100 rounded-lg sm:rounded-xl py-0.5 sm:py-1 md:py-1.5 px-2 sm:px-3 md:px-4 truncate"
              >
                {req}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 items-center w-full">
            <span className="text-xs sm:text-sm bg-blue-200 opacity-150 text-blue-800 rounded-lg sm:rounded-xl py-0.5 sm:py-1 md:py-1.5 px-2 sm:px-3 md:px-4">
              {jobType}
            </span>
            <span className="text-xs sm:text-sm bg-green-200 opacity-150 text-green-800 rounded-lg sm:rounded-xl py-0.5 sm:py-1 md:py-1.5 px-2 sm:px-3 md:px-4">
              {status}
            </span>
            <span className="text-xs sm:text-sm bg-yellow-200 opacity-150 text-blue-800 rounded-lg sm:rounded-xl py-0.5 sm:py-1 md:py-1.5 px-2 sm:px-3 md:px-4">
              {category}
            </span>
            <Link
              to={`/applyjob/${_id}`}
              className="btn btn-soft btn-success rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 lg:px-8 ml-auto mt-2 sm:mt-0"
            >
              <button className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                Apply For Job
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 p-4 sm:p-6 lg:p-10">
        <div className="bg-blue-50 p-6 rounded-md shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold my-5 text-black">
            Job Description
          </h2>
          <p className="text-gray-700 font-thin mb-6">{description}</p>
          <h2 className="text-xl sm:text-2xl font-bold my-4 text-black">
            Key Responsibilities
          </h2>

          <ul className="md:text-xs list-disc space-y-5 font-thin list-inside text-gray-700">
            {responsibilities.map((res) => (
              <li>{res};</li>
            ))}
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold my-5 text-black">
            Skills and Experience
          </h2>

          <ul className="md:text-xs list-disc space-y-5 font-thin list-inside text-gray-700">
            <li>
              Be involved in every step of the product design cycle from
              discovery to developer handoff and user acceptance testing.
            </li>
          </ul>
        </div>

        <div className="bg-blue-100 p-6 rounded-md shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">
            Job Overview
          </h2>
          <div className="text-gray-700 space-y-10">
            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Date Posted:</strong>
                <p>Posted 1 hours ago</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Expiration date:</strong>
                <p>{applicationDeadline}</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiLocationOn className="text-2xl" />
              <div>
                <strong>Location:</strong>
                <p>{location}</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Job Title:</strong>
                <p>{title}</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Job Type:</strong>
                <p>{jobType}</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Job Position:</strong>
                <p>{jobPosition}</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Hours:</strong>
                <p>50h / week</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Monthly:</strong>
                <p>
                  {" "}
                  {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
