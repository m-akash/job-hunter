import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="bg-gray-600 md:h-40 my-10">
        <h1 className="text-4xl ml-40 pt-10">My Account</h1>
        <Link to="/" className="ml-40">
          Home
        </Link>{" "}
        {" > "}
        <Link>My Account</Link>
      </div>
      <div>
        <h1 className="text-3xl my-10 text-center font-bold">Register</h1>
      </div>
      <div className="card bg-base-100 max-w-7xl items-center justify-center mx-auto my-10 md:py-10 shadow-2xl">
        <form className="card-body">
          <div>
            <label className="label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="input"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
          </div>
          <div className="validator-hint hidden">
            Enter valid email address{" "}
          </div>
          <div className="relative">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              required
            />
          </div>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>

          <div className="space-y-2">
            <label for="registerAs" className="label text-xl">
              I want to register as
            </label>
            <select
              id="registerAs"
              name="registerAs"
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            >
              <option>Employer</option>
              <option>Job Seeker</option>
            </select>
          </div>

          <button className="btn btn-primary mt-4">Sign up</button>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <strong className="font-extrabold">Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
