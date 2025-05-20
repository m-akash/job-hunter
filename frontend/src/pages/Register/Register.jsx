import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen my-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 py-8 md:py-5 h-30">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My Account
          </h1>
          <div className="flex items-center text-gray-200">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">My Account</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Create Your Account
        </h1>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-gray-700">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
              <div className="validator-hint hidden text-sm text-red-400 mt-1">
                Enter valid email address
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="Create a password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                required
              />
              <p className="validator-hint hidden text-sm text-gray-400 mt-2">
                Password must contain:
                <ul className="list-disc list-inside mt-1">
                  <li>At least 8 characters</li>
                  <li>At least one number</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one uppercase letter</li>
                </ul>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                I want to register as
              </label>
              <select
                id="registerAs"
                name="registerAs"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                required
              >
                <option value="">Select your role</option>
                <option value="employer">Employer</option>
                <option value="jobSeeker">Job Seeker</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Create Account
            </button>

            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
