import React from "react";
import { Link } from "react-router-dom";

const PostJob = () => {
  return (
    <div className="min-h-screen my-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 py-8 md:py-5 h-30">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Post a New Job!
          </h1>
          <span>Ready to jump back in?</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Registration Form */}
        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-gray-700">
          <form className="space-y-6">
            <h1 className="text-xl  font-bold text-white mb-8">Post Job</h1>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 transition-colors text-white placeholder-gray-400"
                placeholder="Enter job title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Job Description
              </label>
              <textarea
                type="text"
                name="description"
                required
                className="textarea h-40 w-full bg-gray-700/50 border border-gray-600 rounded-lg  transition-colors text-white placeholder-gray-400"
                placeholder="Job description"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Email address"
                  required
                />
                <div className="validator-hint hidden text-sm text-red-400 mt-1">
                  Enter valid email address
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="Company Name"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="banking">Banking</option>
                  <option value="it">IT</option>
                  <option value="healthCare">HealthCare</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Career Level
                </label>
                <select
                  id="careerLevel"
                  name="careerLevel"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="banking">Banking</option>
                  <option value="it">IT</option>
                  <option value="healthCare">HealthCare</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="1+">1+</option>
                  <option value="2+">2+</option>
                  <option value="3+">3+</option>
                  <option value="4+">4+</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Offered Salary
                </label>
                <input
                  type="text"
                  name="salary"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                  placeholder="$5000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Qualification
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
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
                  <option value="Droupout">Dropout</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="USA">USA</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="New York">York</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Application Deadline Date
              </label>
              <input
                type="text"
                name="deadline"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="20.05.2025"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Complete Address
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="Mirpur DOHS, Dhaka, Bangladesh"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
