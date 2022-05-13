import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="w-full px-2 lg:px-0  lg:w-[400px] lg:mx-auto  rounded-xl my-10  shadow-lg">
      <div className="px-10 text-lg font-semibold">
        <h3 className="text-xl uppercase py-2 text-center">Sign UP</h3>
        <div>
          <label className="block py-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="block py-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="block py-2" htmlFor="pwd">
            Password
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            id="pwd"
          />
        </div>
        <div className="py-5">
          <button className="btn w-full  btn-accent text-white">CREATE AN ACCOUNT</button>
        </div>
        <div className="text-sm py-2">
          <p>
            New to Doctors Portals ?{" "}
            <Link className="text-secondary" to="/login">
              Alrady have an account
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <button className="btn w-full mb-5 text-accent hover:bg-white   ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
