import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="hero min-h-[400px] my-5 md:my-10"
      style={{
        backgroundImage: "url(https://i.ibb.co/MDb9qP5Q/4165379.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="flex flex-col hero-content text-neutral-content text-center p-4 md:p-8">
        <div className="max-w-md">
          <h1 className="mb-3 md:mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
            There Are 5000 Job Postings Here For you!
          </h1>
          <p className="mb-3 md:mb-5 text-sm md:text-base">
            Find Jobs, Employment & Career Opportunities
          </p>
        </div>

        <div className="bg-gray-500 p-3 md:p-4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 w-full max-w-4xl">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full md:w-64 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select className="w-full md:w-auto p-2 rounded-md bg-white text-gray-700">
            <option>All Regions</option>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>United Kindom</option>
            <option>Singapur</option>
          </select>

          <select className="w-full md:w-auto p-2 rounded-md bg-white text-gray-700">
            <option>Choose a category…</option>
            <option>Accounting</option>
            <option>Developer</option>
            <option>Media & News</option>
            <option>Architect</option>
          </select>

          <button className="w-full md:w-auto bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors">
            🔍 SEARCH
          </button>
        </div>
        <div className="my-4 md:my-8 text-sm md:text-base">
          <p>
            <strong>Popular Search:</strong>{" "}
            <Link className="hover:text-cyan-400 transition-colors">
              developer, design, it company
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
