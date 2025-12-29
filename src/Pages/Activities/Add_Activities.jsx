import React from "react";
import InputBox from "../../components/InputBox";
import BackButton from "../../components/BackButton";
import api from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useStore from "../../zustand/zustand";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";

const Add_Activities = () => {
  const navigate = useNavigate();
  const [activityInfo, setActivityInfo] = useState({
    title: "",
    maxSpeed: "",
    distance: "",
    duration: "",
    avgSpeed: "",
    intensity: "",
  });
  const [error, setError] = useState("");
  const { setUser } = useStore();
  const createActivityAPI = async (e) => {
    e.preventDefault();
    return console.log(activityInfo);

    try {
      const response = await API.post(API_ROUTES.AUTH.LOGIN, {
        ...userInfo,
      });
      if (response.status === 200) {
        setUser(response.data.user);
        toast.success(response.data.message);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data?.message);
    }
  };
  return (
    <div className="p-5 ">
      <BackButton css="btn-sm" />
      <div className="box flex gap-2">
        <div>
          <div className="text-primary font-bold text-xl">Great Job !</div>
          <div className="text-base-content">
            Let's see what have you done today !
          </div>
        </div>
      </div>
      <form onSubmit={createActivityAPI} className="flex gap-5 box">
        <div className="flex-1">
          <InputBox
            label="Title"
            placeholder={"What's the topic of your today's ride?"}
            inputValue={activityInfo.title}
            setInput={(value) =>
              setActivityInfo({ ...activityInfo, title: value })
            }
          />
          <InputBox
            label="Max Speed"
            placeholder="Max speed ?"
            inputValue={activityInfo.maxSpeed}
            setInput={(value) =>
              setActivityInfo({ ...activityInfo, maxSpeed: value })
            }
          />
          <InputBox
            label="Distance"
            placeholder="Where did you go ?"
            inputValue={activityInfo.distance}
            setInput={(value) =>
              setActivityInfo({ ...activityInfo, distance: value })
            }
          />
        </div>
        <div className="flex-1">
          <InputBox
            label="Duration"
            placeholder="How long did you exercised ?"
            inputValue={activityInfo.duration}
            setInput={(value) =>
              setActivityInfo({ ...activityInfo, duration: value })
            }
          />
          <InputBox
            label="Average Speed (optional)"
            placeholder=""
            inputValue={activityInfo.avgSpeed}
            setInput={(value) =>
              setActivityInfo({ ...activityInfo, avgSpeed: value })
            }
          />
          <div>
            <label htmlFor="intensity" className="fieldset-legend text-lg">
              Intensity
            </label>
            <select
              onChange={(e) => {
                setActivityInfo({ ...activityInfo, intensity: e.target.value });
              }}
              id="intensity"
              className="select select-primary w-full"
            >
              <option value="Easy" className="text-green-500">
                Easy
              </option>
              <option value="Medium" className="text-orange-500">
                Medium
              </option>
              <option value="Hard" className="text-red-500">
                Hard
              </option>
              <option value="Extreme" className="text-purple-500">
                Extreme
              </option>
            </select>
          </div>
          <div className="text-error pt-4 text-lg"></div>
          <div className="text-right">
            <button className="btn btn-primary w-1/2">Add Activity</button>
          </div>
        </div>
      </form>
    </div>
  );
};

/* const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  title: {
    type: String,
    default: "",
  },
  avgSpeed: {
    type: Number,
    require: true,
  },
  maxSpeed: {
    type: Number,
    require: true,
  },
  distance: {
    type: Number,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Activity", ActivitySchema);
 */

export default Add_Activities;
