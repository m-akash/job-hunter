import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
const Navbar = () => {
  const links = (
    <>
      <NavLink>
        <button className="link link-hover px-5">Home</button>
      </NavLink>
      <NavLink>
        <button className="link link-hover px-5">Jobs</button>
      </NavLink>
      <NavLink>
        <button className="link link-hover px-5">Candidates</button>
      </NavLink>
      <NavLink>
        <button className="link link-hover px-5">Employers</button>
      </NavLink>
      <NavLink>
        <button className="link link-hover px-5">Blog</button>
      </NavLink>
      <NavLink>
        <button className="link link-hover px-5">Contact Us</button>
      </NavLink>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold italic">
          Job Hunter
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/register" className="btn btn-soft mx-2">
          <FaUser /> Sign Up
        </Link>
        <Link to="/login" className="btn btn-soft btn-error mx-2">
          <TbLogin2 /> Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
