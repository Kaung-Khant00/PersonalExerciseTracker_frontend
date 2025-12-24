import React from "react";
import AuthImage from "../../../assets/images/authImage.avif";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="flex lg:w-5xl shadow-xl bg-soft-pri rounded">
        <div className=" flex-1 px-20 py-10">
          <Outlet />
        </div>
        <div className=" flex-1 bg-white select-none ">
          <img src={AuthImage} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
