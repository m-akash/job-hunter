import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  return (
    <div className="min-h-screen my-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex gap-4 sm:gap-6 bg-gray-400 text-black my-5 py-4 sm:py-5 px-4 sm:px-6 lg:px-10 border rounded-md">
        <div className="flex flex-col gap-3 md:px-15 sm:gap-4 justify-between items-start w-full">
          <div className="flex flex-row justify-between items-start w-full">
            <Link className="hover:text-white hover:text-xl">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Software Engineer(Backend)
              </h2>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-3 sm:gap-0">
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start text-sm">
              <span className="whitespace-nowrap">Uber</span>
              <span className="whitespace-nowrap">London, UK</span>
              <span className="whitespace-nowrap">10 hours ago</span>
              <span className="whitespace-nowrap">$30-$45k</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link className="w-full sm:w-auto">
                <button className="btn btn-soft w-full sm:w-auto">
                  Apply For Job
                </button>
              </Link>
              <Link className="hover:border rounded-full p-1">
                <CiBookmark className="text-xl sm:text-2xl" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 items-start mt-2">
            <span className="text-xs sm:text-sm bg-blue-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6 whitespace-nowrap">
              Full-Time
            </span>
            <span className="text-xs sm:text-sm bg-green-200 opacity-150 text-green-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6 whitespace-nowrap">
              Private
            </span>
            <span className="text-xs sm:text-sm bg-yellow-200 opacity-150 text-blue-800 rounded-xl py-1 sm:py-2 px-3 sm:px-6 whitespace-nowrap">
              Urgent
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 p-4 sm:p-6 lg:p-10">
        <div className="bg-blue-50 p-6 rounded-md shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold my-5 text-black">
            Job Description
          </h2>
          <p className="text-gray-700 font-thin mb-6">
            As a Product Designer, you will work within a Product Delivery Team
            fused with UX, engineering, product and data talent. You will help
            the team design beautiful interfaces that solve business challenges
            for our clients. We work with a number of Tier 1 banks on building
            web-based applications for AML, KYC and Sanctions List management
            workflows. This role is ideal if you are looking to segue your
            career into the FinTech or Big Data arenas.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold my-4 text-black">
            Key Responsibilities
          </h2>

          <ul className="md:text-xs list-disc space-y-5 font-thin list-inside text-gray-700">
            <li>
              Be involved in every step of the product design cycle from
              discovery to developer handoff and user acceptance testing.
            </li>
            <li>
              Work with BAs, product managers and tech teams to lead the Product
              Design
            </li>
            <li>
              Maintain quality of the design process and ensure that when
              designs are translated into code they accurately reflect the
              design specifications.
            </li>
            <li>
              Accurately estimate design tickets during planning sessions.
            </li>
            <li>
              Contribute to sketching sessions involving non-designersCreate,
              iterate and maintain UI deliverables including sketch files, style
              guides, high fidelity prototypes, micro interaction specifications
              and pattern libraries.
            </li>
            <li>
              Ensure design choices are data led by identifying assumptions to
              test each sprint, and work with the analysts in your team to plan
              moderated usability test sessions.
            </li>
            <li>
              Design pixel perfect responsive UI's and understand that adopting
              common interface patterns is better for UX than reinventing the
              wheel
            </li>
            <li>
              Present your work to the wider business at Show & Tell sessions.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold my-5 text-black">
            Skills and Experience
          </h2>

          <ul className="md:text-xs list-disc space-y-5 font-thin list-inside text-gray-700">
            <li>
              Be involved in every step of the product design cycle from
              discovery to developer handoff and user acceptance testing.
            </li>
            <li>
              Work with BAs, product managers and tech teams to lead the Product
              Design
            </li>
            <li>
              Maintain quality of the design process and ensure that when
              designs are translated into code they accurately reflect the
              design specifications.
            </li>
            <li>
              Accurately estimate design tickets during planning sessions.
            </li>
            <li>
              Contribute to sketching sessions involving non-designersCreate,
              iterate and maintain UI deliverables including sketch files, style
              guides, high fidelity prototypes, micro interaction specifications
              and pattern libraries.
            </li>
            <li>
              Ensure design choices are data led by identifying assumptions to
              test each sprint, and work with the analysts in your team to plan
              moderated usability test sessions.
            </li>
            <li>
              Design pixel perfect responsive UI's and understand that adopting
              common interface patterns is better for UX than reinventing the
              wheel
            </li>
            <li>
              Present your work to the wider business at Show & Tell sessions.
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
                <p>April 06, 2021</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiLocationOn className="text-2xl" />
              <div>
                <strong>Location:</strong>
                <p>London, UK</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Job Title:</strong>
                <p>Developer</p>
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
                <strong>Rate:</strong>
                <p>$15 - $25 / hour</p>
              </div>
            </div>

            <div className="flex gap-5 justify-start items-start">
              <CiCalendarDate className="text-2xl" />
              <div>
                <strong>Salary:</strong>
                <p>$35k - $45k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
