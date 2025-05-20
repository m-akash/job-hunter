import React from "react";
import Lottie from "lottie-react";
import lottieData from "../../assets/lottie/Animation - 1747730781744.json";
import { Link } from "react-router-dom";

const Recruiting = () => {
  return (
    <div className="hero bg-transparent min-h-[70vh] py-10 px-4 sm:px-6 lg:px-8">
      <div className="hero-content flex-col gap-8 lg:gap-15 lg:flex-row-reverse max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <Lottie
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            animationData={lottieData}
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Recruiting?
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs in our database.
          </p>

          <Link to="/">
            <button className="btn btn-primary text-sm sm:text-base px-6 py-2">
              Start Recruiting Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
