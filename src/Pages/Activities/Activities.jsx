import React, { useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";
import useStore from "../../zustand/zustand";
import ActivityList from "./ActivityList";
import ActivityChart from "../../components/Activity/ActivityChart";

const Activities = () => {
  const navigate = useNavigate();
  const { setActivities, activities } = useStore();
  const getActivitiesAPI = async () => {
    try {
      const response = await API.get(API_ROUTES.ACTIVITIES.GET_ALL);
      console.log(response);
      if (response.status === 200) {
        setActivities(response.data.activities, response.data.summary);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getActivitiesAPI();
  }, []);

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
      <div className=" p-2">
        {/* graphs */}
        <ActivityChart data={activities.data} summary={activities.summary} />
        {/* list */}
        <div>
          <ActivityList getActivitiesAPI={getActivitiesAPI} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
