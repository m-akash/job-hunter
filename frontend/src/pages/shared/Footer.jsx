import React from "react";
import logo from "../../assets/logo/logo.png";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="logo" className="h-12" />
            <p className="text-gray-300">
              Your trusted partner in finding the perfect career opportunity. We
              connect talented professionals with their dream jobs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Resume Database
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-4">For Employers</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Search Resumes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Employer Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Recruitment Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-4">Stay Updated</h6>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest job opportunities and
              career tips.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-300 text-white placeholder-gray-400"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} JobHunter. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-blue-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
