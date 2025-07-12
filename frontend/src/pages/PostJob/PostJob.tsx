// @ts-nocheck
import React from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const PostJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePostJob = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("https://job-hunter-vercel.vercel.app/api/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added job successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myPostedJobs");
      });
  };
  return (
    <div className="min-h-screen my-5 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="bg-gradient-to-r from-purple-500 to-violet-500 py-8 md:py-5 h-30">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Post a New Job!
          </h1>
          <span className="text-gray-100">Ready to jump back in?</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200"
        >
          <form onSubmit={handlePostJob} className="space-y-6">
            <h1 className="text-xl  font-bold text-gray-800 mb-8">Post Job</h1>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                name="hr_mail"
                defaultValue={user.email}
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 transition-colors text-gray-800 placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 transition-colors text-gray-800 placeholder-gray-500"
                placeholder="Enter job title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Job Description
              </label>
              <textarea
                type="text"
                name="description"
                required
                className="textarea h-40 w-full bg-gray-200 border border-gray-300 rounded-lg  transition-colors text-gray-800 placeholder-gray-500"
                placeholder="Job description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Job Requirements
              </label>
              <textarea
                type="text"
                name="requirements"
                required
                className="textarea h-40 w-full bg-gray-200 border border-gray-300 rounded-lg  transition-colors text-gray-800 placeholder-gray-500"
                placeholder="Please! Write each requirement in a new line!"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Job Responsibilities
              </label>
              <textarea
                type="text"
                name="responsibilities"
                required
                className="textarea h-40 w-full bg-gray-200 border border-gray-300 rounded-lg  transition-colors text-gray-800 placeholder-gray-500"
                placeholder="Please! Write each responsibily in a new line!"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="Dhaka, Bangladesh"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800"
                  required
                >
                  <option value="">Select</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Job Postion
                </label>
                <select
                  id="jobPosition"
                  name="jobPosition"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800"
                  required
                >
                  <option value="">Select</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Intern">Intern</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contractual">Contractual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Job Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800"
                  required
                >
                  <option value="">Select</option>
                  <option value="Banking">Banking</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Engineering">Engineering</option>
                  <option value="HealthCare">HealthCare</option>
                  <option value="Teaching">Teaching</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="1-3 years"
                  required
                />
              </div>
            </div>

            <label className="block text-sm font-medium text-gray-800 mb-2">
              Salary Range(e.g: 50k - 80k)
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="min"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="Min"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="max"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
                  placeholder="Max"
                  required
                />
              </div>
              <div>
                <select
                  id="currency"
                  name="currency"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800"
                  required
                >
                  <option value="">Select</option>
                  <option value="BDT">BDT</option>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Qualification
              </label>
              <select
                id="qualification"
                name="qualification"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800"
                required
              >
                <option value="">Select</option>
                <option value="SSC or Equivalent">SSC or Equivalent</option>
                <option value="HSC or Equivalent">HSC or Equivalent</option>
                <option value="Bsc">Bsc</option>
                <option value="Msc">Msc</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
                <option value="BA">BA</option>
                <option value="MA">MA</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Application Deadline Date
              </label>
              <input
                type="date"
                name="applicationDeadline"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
                placeholder="20.05.2025"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Complete Address
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
                placeholder="Mirpur DOHS, Dhaka, Bangladesh"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-violet-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PostJob;
