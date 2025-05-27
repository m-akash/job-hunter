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

  useEffect(() => {
    if (user?.email) {
      fetch(`https://backend-omega-beryl.vercel.app/user?email=${user.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
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
            ? "text-primary font-semibold text-xl"
            : "text-primary font-semibold"
        }
      >
        <button className="link link-hover px-5 transition-all duration-300 hover:text-primary">
          Home
        </button>
      </NavLink>
      <NavLink
        to="/jobs"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl"
            : "text-primary font-semibold"
        }
      >
        <button className="link link-hover px-5 transition-all duration-300 hover:text-primary">
          Jobs
        </button>
      </NavLink>
      <NavLink
        to="/candidates"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl"
            : "text-primary font-semibold"
        }
      >
        <button className="link link-hover px-5 transition-all duration-300 hover:text-primary">
          Candidates
        </button>
      </NavLink>

      <NavLink
        to="/employers"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl"
            : "text-primary font-semibold"
        }
      >
        <button className="link link-hover px-5 transition-all duration-300 hover:text-primary">
          Employers
        </button>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl"
            : "text-primary font-semibold"
        }
      >
        <button className="link link-hover px-5 transition-all duration-300 hover:text-primary">
          Blog
        </button>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl"
            : "text-primary font-semibold"
        }
      >
        <button className="link link-hover px-5 transition-all duration-300 hover:text-primary">
          Contact Us
        </button>
      </NavLink>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-md py-4 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg border border-gray-100"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost p-0 hover:bg-transparent">
          <div className="flex items-center gap-2">
            <img
              className="w-10 md:w-12 transition-all duration-300"
              src={logo}
              alt="HireHub Logo"
            />
            <h3 className="text-2xl md:text-3xl font-extrabold italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HireHub
            </h3>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-2 md:gap-4 ">
          {user ? (
            <>
              <Link
                to="/postjob"
                className="btn btn-soft btn-primary btn-sm md:btn-md px-3 md:px-6 hover:scale-105 transition-all duration-300"
              >
                <button className="hidden md:inline">Post Job</button>
                <button className="md:hidden">Post</button>
              </Link>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2 px-4 py-1 rounded-full transition-all duration-300"
                >
                  <button className="btn btn-lg btn-soft btn-circle">
                    <img className="w-4" src={singUpIcon} alt="" />
                  </button>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg border border-gray-100"
                >
                  <li>
                    <Link
                      to="/user"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
                    >
                      <CgProfile className="h-5 w-5" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myApplications"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
                    >
                      <CgProfile className="h-5 w-5" />
                      Applied Jobs List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myPostedJobs"
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
                    >
                      <CgProfile className="h-5 w-5" />
                      My Posted Jobs
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 text-red-500"
                    >
                      <BiLogOut className="h-5 w-5" />
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
                className="btn btn-soft btn-sm md:btn-md px-3 md:px-6 hover:scale-105 transition-all duration-300"
              >
                <img className="w-4" src={singUpIcon} alt="" />
                <button className="hidden md:inline ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Login / Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
