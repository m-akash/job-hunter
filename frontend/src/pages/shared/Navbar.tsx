// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import singUpIcon from "../../assets/icons/signUp.png";

import logo from "../../assets/logo/logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const { user, SignOutUser, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://job-hunter-vercel.vercel.app/api/users?email=${user.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            setUserData(data[0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user?.email]);

  if (loading) {
    console.log("");
  }

  if (!user) {
    console.log();
  }

  if (!userData) {
    console.log();
  }

  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        alert("Sign out successfully");
      })
      .catch(() => {
        alert("Sign out unsuccessful");
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-lg md:text-xl"
            : "text-primary font-semibold text-lg md:text-xl"
        }
      >
        <button className="link link-hover px-3 md:px-5 transition-all duration-300 hover:text-primary">
          Home
        </button>
      </NavLink>
      <NavLink
        to="/jobs"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-lg md:text-xl"
            : "text-primary font-semibold text-lg md:text-xl"
        }
      >
        <button className="link link-hover px-3 md:px-5 transition-all duration-300 hover:text-primary">
          Jobs
        </button>
      </NavLink>
      <NavLink
        to="/candidates"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-lg md:text-xl"
            : "text-primary font-semibold text-lg md:text-xl"
        }
      >
        <button className="link link-hover px-3 md:px-5 transition-all duration-300 hover:text-primary">
          Candidates
        </button>
      </NavLink>

      <NavLink
        to="/employers"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-lg md:text-xl"
            : "text-primary font-semibold text-lg md:text-xl"
        }
      >
        <button className="link link-hover px-3 md:px-5 transition-all duration-300 hover:text-primary">
          Employers
        </button>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-lg md:text-xl"
            : "text-primary font-semibold text-lg md:text-xl"
        }
      >
        <button className="link link-hover px-3 md:px-5 transition-all duration-300 hover:text-primary">
          Blog
        </button>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-lg md:text-xl"
            : "text-primary font-semibold text-lg md:text-xl"
        }
      >
        <button className="link link-hover px-3 md:px-5 transition-all duration-300 hover:text-primary">
          Contact Us
        </button>
      </NavLink>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-md py-2 md:py-4 px-2 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-gray-100 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg border border-gray-100 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost p-0 hover:bg-transparent">
          <div className="flex items-center gap-1 md:gap-2">
            <img
              className="w-8 md:w-12 transition-all duration-300"
              src={logo}
              alt="HireHub Logo"
            />
            <h3 className="text-xl md:text-3xl font-extrabold italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HireHub
            </h3>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-1 md:gap-4">
          {user ? (
            <>
              <Link
                to="/postjob"
                className="btn btn-soft btn-primary btn-sm md:btn-md px-2 md:px-6 hover:scale-105 transition-all duration-300"
              >
                <button className="hidden md:inline">Post Job</button>
                <button className="md:hidden text-xs">Post</button>
              </Link>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 rounded-full transition-all duration-300"
                >
                  <button className="btn btn-sm md:btn-lg btn-soft btn-circle">
                    <img className="w-3 md:w-4" src={singUpIcon} alt="" />
                  </button>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg border border-gray-100"
                >
                  <li>
                    <Link
                      to="/user"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 text-sm md:text-base"
                    >
                      <CgProfile className="h-4 w-4 md:h-5 md:w-5" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myApplications"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 text-sm md:text-base"
                    >
                      <CgProfile className="h-4 w-4 md:h-5 md:w-5" />
                      Applied Jobs List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myPostedJobs"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 text-sm md:text-base"
                    >
                      <CgProfile className="h-4 w-4 md:h-5 md:w-5" />
                      My Posted Jobs
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 text-red-500 text-sm md:text-base"
                    >
                      <BiLogOut className="h-4 w-4 md:h-5 md:w-5" />
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-soft btn-sm md:btn-md px-2 md:px-4 hover:scale-105 transition-all duration-300 flex items-center gap-1 md:gap-2"
              >
                <img className="w-3 md:w-4" src={singUpIcon} alt="" />
                <span className="hidden md:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Login / Register
                </span>
                <span className="md:hidden text-xs">Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
