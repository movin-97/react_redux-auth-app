import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contextAPI/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
console.log(email,password,error);
  const {signUp} = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
    } catch (err) {
      setError(err.massage);
    }
    console.log();
  };
  return (
    <div className="mt-5">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-4"></div>
        <div className="col-4 border bg-light p-4">
          <div className="text-center">
            <h3>Sign Up Form</h3>
          </div>
          {error && <p className="alert alert-danger">{error}</p>}
          <div className="col-md-12 mt-3">
            <label htmlFor="email" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12 mt-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
          <div className="col-12 mt-4 d-flex justify-content-center">
            <h6>
              Don't have a account? <Link to={"/login"}>Log In</Link>
            </h6>
          </div>
        </div>

        <div className="col-4"></div>
      </form>
    </div>
  );
};

export default Signup;
