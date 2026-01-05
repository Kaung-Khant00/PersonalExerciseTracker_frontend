import InputBox from "../../components/InputBox";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";
import { toast } from "react-toastify";
import useStore from "../../zustand/zustand";

const Edit_Activity = () => {
  const { editingActivity } = useStore();
  const navigate = useNavigate();
  const [duration, setDuration] = useState({ h: 0, m: 0, s: 0 });
  const [activityInfo, setActivityInfo] = useState({
    title: "",
    maxSpeed: "",
    distance: "",
    rideIntensity: "",
  });
  const [error, setError] = useState("");
  const editActivityAPI = async (e) => {
    e.preventDefault();
    let totalSecond = 0;
    totalSecond +=
      Number(duration.h) * 3600 + Number(duration.m) * 60 + Number(duration.s);
    try {
      const response = await API.put(
        API_ROUTES.ACTIVITIES.UPDATE(editingActivity._id),
        {
          ...activityInfo,
          duration: totalSecond,
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        setError("");
        navigate("/activities");
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data?.message);
    }
  };
  useEffect(() => {
    if (editingActivity?._id) {
      setActivityInfo(editingActivity);
      let totalSecond = editingActivity.duration;
      const h = Math.floor(totalSecond / 3600);
      totalSecond %= 3600;
      const m = Math.floor(totalSecond / 60);
      const s = totalSecond % 60;
      setDuration({ h, m, s });
    } else {
      navigate("/activities");
    }
  }, []);
  return (
    <div className="p-5 ">
      <BackButton css="btn-sm" routeTo="/activities" />
      <div className="box">
        <div className="opacity-50 font-bold text-xl mb-5">
          Anything wrong ? No problem , you can edit.
        </div>
        <form onSubmit={editActivityAPI} className="flex gap-5">
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
                  value={duration.h}
                  type="number"
                  placeholder="hours"
                  className="input w-full"
                />
                <input
                  onChange={({ target }) => {
                    setDuration((pre) => ({ ...pre, m: target.value }));
                  }}
                  value={duration.m}
                  type="number"
                  placeholder="minutes"
                  className="input w-full"
                />
                <input
                  onChange={({ target }) => {
                    setDuration((pre) => ({ ...pre, s: target.value }));
                  }}
                  value={duration.s}
                  type="number"
                  placeholder="seconds"
                  className="input w-full"
                />
              </div>
            </fieldset>
            <div>
              <label
                htmlFor="rideIntensity"
                className="fieldset-legend text-lg"
              >
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
                <option
                  selected={activityInfo.rideIntensity === "Easy"}
                  value="Easy"
                  className="text-green-500"
                >
                  Easy
                </option>
                <option
                  selected={activityInfo.rideIntensity === "Medium"}
                  value="Medium"
                  className="text-orange-500"
                >
                  Medium
                </option>
                <option
                  selected={activityInfo.rideIntensity === "Hard"}
                  value="Hard"
                  className="text-red-500"
                >
                  Hard
                </option>
                <option
                  selected={activityInfo.rideIntensity === "Extreme"}
                  value="Extreme"
                  className="text-purple-500"
                >
                  Extreme
                </option>
              </select>
            </div>
            <div className="text-error pt-4 text-lg mt-9 ">{error}</div>
            <button className="btn btn-primary w-full ">Edit Activity</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_Activity;
