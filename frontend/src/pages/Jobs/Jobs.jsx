import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import { useLoaderData } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const { count } = useLoaderData();
  const numberOfPages = Math.ceil(count / cardsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(
      `https://backend-omega-beryl.vercel.app/jobs?page=${currentPage}&limit=${cardsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [currentPage, cardsPerPage]);

  const handleCardsPerPage = (event) => {
    const val = parseInt(event.target.value);
    setCardsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <div className="flex items-center gap-2">
          <button
            className="btn btn-primary btn-sm sm:btn-md disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                className={`btn btn-sm sm:btn-md ${
                  currentPage === page
                    ? "btn-primary"
                    : "btn-outline btn-primary"
                }`}
                key={page}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            className="btn btn-primary btn-sm sm:btn-md disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
          >
            Next
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base">Show:</span>
          <select
            className="select select-bordered select-sm sm:select-md w-20"
            value={cardsPerPage}
            onChange={handleCardsPerPage}
          >
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="20">20</option>
          </select>
          <span className="text-sm sm:text-base">per page</span>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
