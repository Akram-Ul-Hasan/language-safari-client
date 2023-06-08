import React, { useState } from "react";
import background from "../../assets/login/login1.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [hide, setHide] = useState(true);

  const handlePasswordHide = () => {
    setHide(!hide);
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-content ">
        
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 bg-opacity-70 ">
        <h3 className="text-3xl">Please Sign IN</h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex input input-bordered items-center">
                <input
                  type={hide ? "password" : "text"}
                  placeholder="password"
                  className=""
                />
                <button onClick={handlePasswordHide}>
                  {hide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>{" "}
          </p>
          <div className="divider mx-8">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
