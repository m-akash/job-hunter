import React from "react";
import { Link } from "react-router-dom";
import accountingImg from "../../assets/icons/accounting.png";
import marketingImg from "../../assets/icons/megaphone.png";
import designImg from "../../assets/icons/curve.png";
import developemntImg from "../../assets/icons/web-programming.png";
import healthCareImg from "../../assets/icons/healthcare.png";
import humanImg from "../../assets/icons/profesions-and-jobs.png";
import automativeImg from "../../assets/icons/teamwork.png";
import customerServiceImg from "../../assets/icons/customer-service.png";
import projectManImg from "../../assets/icons/project-management.png";

const Categories = () => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-center text-2xl mb-2">Popular Job Categories</h1>
        <p className="text-center text-xs">2020 jobs live, 170 added today.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 mx-5">
        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={accountingImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">
              Account / Finance
            </Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md ">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={marketingImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">Marketing</Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={designImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">Art / Design</Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={developemntImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">Development</Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={humanImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">
              Human Resource
            </Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={automativeImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">
              Automotive Job
            </Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={customerServiceImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">
              Customer Service
            </Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={healthCareImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">
              Health & Care
            </Link>
            <p>(2 open positions)</p>
          </div>
        </div>

        <div className="flex gap-6 bg-cyan-400 text-black p-5 border rounded-md">
          <figure className="h-auto w-15 items-center hover:bg-white rounded-md">
            <img src={projectManImg} alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <Link className="hover:text-white hover:text-xl">
              Project Management
            </Link>
            <p>(2 open positions)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
