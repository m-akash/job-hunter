// @ts-nocheck
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Employers = () => {
  const [employers, setEmployers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/all-jobs")
      .then((res) => {
        const jobs = res.data;
        const employerData = jobs.reduce((acc, job) => {
          const { companyName, companyLogo } = job;
          if (companyName) {
            if (!acc[companyName]) {
              acc[companyName] = {
                companyName,
                companyLogo,
                jobCount: 0,
              };
            }
            acc[companyName].jobCount += 1;
          }
          return acc;
        }, {});

        const employersList = Object.values(employerData);
        setEmployers(employersList);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load employers. Please try again later.");
        console.error(err);
        setIsLoading(false);
      });
  }, [axiosSecure]);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 min-h-screen">
      <div className="py-24">
        <h1 className="text-center text-3xl font-bold">All Our Employers</h1>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {employers.map((employer) => (
            <div
              key={employer.companyName}
              className="card bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={
                    employer.companyLogo || "https://via.placeholder.com/150"
                  }
                  alt={employer.companyName}
                  className="rounded-xl h-32 w-full object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{employer.companyName}</h2>
                <p>Open Positions: {employer.jobCount}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Jobs</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Employers;
