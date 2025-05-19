import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
        <h1 className="text-3xl my-10 text-center font-bold">Sign In</h1>
      </div>
      <div className="card bg-base-100 max-w-7xl items-center justify-center mx-auto my-10 md:py-15 shadow-2xl">
        <form className="card-body">
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

          <div>
            <Link className="link link-hover">Forgot password?</Link>
          </div>

          <button className="btn btn-primary mt-4">Login</button>
          <p>
            New to this site?{" "}
            <Link to="/register">
              <strong className="font-extrabold">Register</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
