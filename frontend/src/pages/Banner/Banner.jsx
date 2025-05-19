import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero my-10 h-200"
      style={{
        backgroundImage: "url(https://i.ibb.co/MDb9qP5Q/4165379.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="flex flex-col hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Browse Job</h1>
          <p className="mb-5">Find Jobs, Employment & Career Opportunities</p>
        </div>

        <div className="bg-gray-500 p-4 flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-64 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select className="p-2 rounded-md bg-white text-gray-700">
            <option>All Regions</option>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>United Kindom</option>
            <option>Singapur</option>
          </select>

          <select className="p-2 rounded-md bg-white text-gray-700">
            <option>Choose a category…</option>
            <option>Accounting</option>
            <option>Developer</option>
            <option>Media & News</option>
            <option>Architect</option>
          </select>

          <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500">
            🔍 SEARCH
          </button>
        </div>
        <div >
          <p>
            {" "}
            <strong>Trending Keywords:</strong>{" "}
            <Link>developer, design, it company</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
