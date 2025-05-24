import React from "react";
import { data, Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJobApply = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:3000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Application submit successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myApplications");
      });
    form.reset();
  };

  return (
    <div className="md:my-50 my-20">
      <div className="container mx-auto px-4 md:px-8 py-4 ">
        <motion.div
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border border-gray-700"
        >
          <form onSubmit={handleJobApply} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Linkedin URL
              </label>
              <input
                type="url"
                name="linkedin"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="Enter your valid linkedin url"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Github URL
              </label>
              <input
                type="url"
                name="github"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="Enter your valid guthub url"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Resume URL
              </label>
              <input
                type="url"
                name="resume"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                placeholder="Enter your valid resume url"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default JobApply;
