import InputBox from "../../components/InputBox";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";
import { toast } from "react-toastify";

const Add_Activities = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState({ h: 0, m: 0, s: 0 });
  const [activityInfo, setActivityInfo] = useState({
    title: "",
    maxSpeed: "",
    distance: "",
    rideIntensity: "",
  });
  const [error, setError] = useState("");
  const createActivityAPI = async (e) => {
    e.preventDefault();
    let totalSecond = 0;
    totalSecond +=
      Number(duration.h) * 3600 + Number(duration.m) * 60 + Number(duration.s);
    try {
      const response = await API.post(API_ROUTES.ACTIVITIES.CREATE, {
        ...activityInfo,
        duration: totalSecond,
      });
      if (response.status === 201) {
        toast.success(response.data.message);
        setError("");
        navigate("/activities");
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
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-lg">Duration</legend>
            <div className="flex gap-2">
              <input
                onChange={({ target }) => {
                  setDuration((pre) => ({ ...pre, h: target.value }));
                }}
                type="number"
                placeholder="hours"
                className="input w-full"
              />
              <input
                onChange={({ target }) => {
                  setDuration((pre) => ({ ...pre, m: target.value }));
                }}
                type="number"
                placeholder="minutes"
                className="input w-full"
              />
              <input
                onChange={({ target }) => {
                  setDuration((pre) => ({ ...pre, s: target.value }));
                }}
                type="number"
                placeholder="seconds"
                className="input w-full"
              />
            </div>
          </fieldset>
          <div>
            <label htmlFor="rideIntensity" className="fieldset-legend text-lg">
              Intensity
            </label>
            <select
              onChange={(e) => {
                setActivityInfo({
                  ...activityInfo,
                  rideIntensity: e.target.value,
                });
              }}
              id="rideIntensity"
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
          <div className="text-error pt-4 text-lg mt-9 ">{error}</div>
          <button className="btn btn-primary w-full ">Add Activity</button>
        </div>
      </form>
    </div>
  );
};

export default Add_Activities;
