import React from "react";
import InputBox from "../../components/InputBox";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="text-primary font-bold text-center text-3xl mb-2">
        SIGNUP
      </div>
      <InputBox label={"Username"} type={"text"} />
      <InputBox label={"Password"} type={"password"} />
      <InputBox label={"Confirm Password"} type={"password"} />

      <button className="btn btn-primary py-2 mt-5 w-full">SIGNUP</button>
      <div className="mt-2">
        <span className="mr-2">Already have an account ?</span>
        <Link to={"/auth/login"} className="link link-primary ">
          Login
        </Link>
      </div>
    </>
  );
};

export default Signup;
