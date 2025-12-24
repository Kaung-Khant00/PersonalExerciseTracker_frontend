import React from "react";
import InputBox from "../../components/InputBox";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="text-primary font-bold text-center text-3xl mb-2">
        LOGIN
      </div>
      <InputBox label={"Username"} type={"text"} />
      <InputBox label={"Password"} type={"password"} />

      <button className="btn btn-primary py-2 mt-5 w-full">LOGIN</button>
      <div className="mt-2">
        <span className="mr-2">Doesn't have an account ?</span>
        <Link to={"/auth/signup"} className="link link-primary ">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Login;
