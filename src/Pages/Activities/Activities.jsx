import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end p-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("add");
          }}
        >
          <IoIosAddCircleOutline size={25} /> Add activity
        </button>
      </div>
      <div>
        {/* graphs */}
        <div></div>
        {/* list */}
        <div></div>
      </div>
    </div>
  );
};

export default Activities;
