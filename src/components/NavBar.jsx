import React from "react";
import API_ROUTES from "../Api/ROUTE.js";
import API from "../Api/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const logoutAPI = async () => {
    try {
      const response = await API.get(API_ROUTES.AUTH.LOGOUT);
      if (response.status === 200) {
        navigate(API_ROUTES.AUTH.LOGIN);
        toast.success(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="navbar w-full bg-base-300 flex justify-between">
      <div className="flex items-center">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          {/* Sidebar toggle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            className="my-1.5 inline-block size-4"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 4v16"></path>
            <path d="M14 10l2 2l-2 2"></path>
          </svg>
        </label>
        <div className="px-4">Kaung Khant's personal tracker</div>
      </div>
      <div>
        <button className="btn btn-error" onClick={logoutAPI}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
