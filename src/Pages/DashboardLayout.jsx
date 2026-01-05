import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import NavBar from "../components/Navigation/NavBar";
import useWindowWidth from "../Custom/Hooks/useWindowWidth";
import { MOBILE_WIDTH_SIZE } from "../constant/constant";
import Dock from "../components/Navigation/Dock";
import DockNav from "../components/Navigation/DockNav";

const DashboardLayout = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth > MOBILE_WIDTH_SIZE ? (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <NavBar />
            {/* Page content here */}
            <Outlet />
          </div>

          <div className="drawer-side is-drawer-close:overflow-visible">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
              {/* Sidebar content here */}
              <Sidebar />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <DockNav />
          <Outlet />
          <Dock />
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
