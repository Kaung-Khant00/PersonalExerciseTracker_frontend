import React from "react";
import { LuHouse, LuSettings, LuSquareActivity } from "react-icons/lu";
import { Link } from "react-router-dom";

/* 
import React from "react";
import { LuHouse, LuSettings, LuSquareActivity } from "react-icons/lu";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <ul className="menu w-full grow gap-2 mt-2">
      <li>
        <Link to="/dashboard">
          <button
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Dashboard"
          >
            <LuHouse size={20} />
            <span className="is-drawer-close:hidden">Dashboard</span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="/activities">
          <button
            className="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Activity"
          >
            <LuSquareActivity size={20} />
            <span className="is-drawer-close:hidden">Activity</span>
          </button>
        </Link>
      </li>
      <li>
        <button
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Settings"
        >
          <LuSettings size={20} />
          <span className="is-drawer-close:hidden">Settings</span>
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;

*/

const Dock = () => {
  return (
    <div className="dock dock-xs">
      <button>
        <Link to="/dashboard">
          <LuHouse size={20} />
        </Link>
      </button>

      <button className="dock-active">
        <Link to="/activities">
          <LuSquareActivity size={20} />
        </Link>
      </button>

      <button>
        <LuSettings size={20} />
      </button>
    </div>
  );
};

export default Dock;
