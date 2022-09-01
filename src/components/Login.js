import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-5">
      <form className="row g-3">
        <div className="col-4"></div>
        <div className="col-4 border bg-light p-4">
        <div className="text-center">
            <h3>Login Form</h3>
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
          <div className="col-md-12 mt-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
          <div className="col-12 mt-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">Log In</button>
          </div>
          <div className="col-12 mt-5 d-flex justify-content-center">
            <GoogleButton type="light" />
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <h6>Don't have a account? <Link to={"/signup"}>Sign Up</Link></h6>
          </div>
        </div>

        <div className="col-4"></div>
      </form>
    </div>
  );
};

export default Login;
