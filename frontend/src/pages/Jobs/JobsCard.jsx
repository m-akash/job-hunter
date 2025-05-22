import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import companyIcon from "../../assets/icons/office-building.png";
import locationIcon from "../../assets/icons/location.png";
import timeIcon from "../../assets/icons/clock.png";
import moneyIcon from "../../assets/icons/save-money.png";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    status,
  } = job;
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 my-5 sm:gap-4 md:gap-6 bg-cyan-400 text-black py-3 sm:py-4 md:py-5 lg:py-6 px-3 sm:px-4 md:px-6 lg:px-8 border rounded-lg hover:shadow-lg transition-shadow duration-300">
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
              to={`/jobs/${_id}`}
              className="btn btn-soft btn-success rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 lg:px-8 ml-auto mt-2 sm:mt-0"
            >
              <button className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
