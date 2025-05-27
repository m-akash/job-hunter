import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import companyIcon from "../../assets/icons/office-building.png";
import locationIcon from "../../assets/icons/location.png";
import timeIcon from "../../assets/icons/clock.png";
import moneyIcon from "../../assets/icons/save-money.png";
const JobsCategoriesCard = ({job}) => {
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
    requirements,
    status,
  } = job;
    return (
       <div className="w-full">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col gap-4">
            {/* Header Section */}
            <div className="flex justify-between items-start">
              <Link to={`/jobs/${_id}`} className="group">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h2>
              </Link>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <CiBookmark className="text-2xl text-gray-600 hover:text-primary" />
              </button>
            </div>

            {/* Company Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <img src={companyIcon} alt="Company" className="w-5 h-5" />
                <span className="truncate">{company}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span className="truncate">{location}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <img src={timeIcon} alt="Deadline" className="w-5 h-5" />
                <span className="truncate">{applicationDeadline}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <img src={moneyIcon} alt="Salary" className="w-5 h-5" />
                <span className="truncate">
                  {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                </span>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="flex flex-wrap gap-2">
              {requirements.slice(0, 3).map((req, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {req}
                </span>
              ))}
              {requirements.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  +{requirements.length - 3} more
                </span>
              )}
            </div>

            {/* Footer Section */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {jobType}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {jobPosition}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {status}
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                {category}
              </span>
              <Link to={`/jobs/${_id}`} className="ml-auto">
                <button className="btn btn-primary btn-sm sm:btn-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default JobsCategoriesCard;