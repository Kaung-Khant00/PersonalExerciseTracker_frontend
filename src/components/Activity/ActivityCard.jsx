import {
  FaRoute,
  FaClock,
  FaTachometerAlt,
  FaBolt,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import moment from "moment";
import { fmtDecimals } from "../../helper/utility.function";
import { formatDuration } from "../../helper/utility.function";

const intensityMap = {
  Easy: { bg: "bg-green-500", border: "border-green-500", color: "green-500" },
  Medium: {
    bg: "bg-orange-500",
    border: "border-orange-500",
    color: "orange-500",
  },
  Hard: { bg: "bg-red-500", border: "border-red-500", color: "red-500" },
  Extreme: {
    bg: "bg-purple-500",
    border: "border-purple-500",
    color: "purple-500",
  },
};

const Metric = ({ icon, value }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="text-primary">{icon}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const ActivityCard = ({ activity, onView, onEdit, onDelete }) => {
  const intensity = intensityMap[activity.rideIntensity];

  return (
    <div
      className={`card bg-base-100 border-s-4 ${intensity.border} shadow-sm hover:shadow-md transition my-1 `}
    >
      <div className="card-body p-4 gap-3 border border-base-300">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex gap-2 items-center">
              <h3 className="font-semibold leading-tight text-lg">
                {activity.title || `${activity.distance} km Ride`}
              </h3>
              <span>•</span>
              <span>{moment(activity.date).format("ll")}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`${intensity.bg} badge`}>
              {activity.rideIntensity}
            </span>

            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-sm">⋮</button>

              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                <li>
                  <button className="flex items-center gap-2" onClick={onEdit}>
                    <FaEdit />
                    Edit
                  </button>
                </li>

                <li>
                  <button
                    className="flex items-center gap-2 text-red-500"
                    onClick={() => onDelete(activity._id)}
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-1">
          <Metric
            icon={<FaRoute />}
            value={`${fmtDecimals(activity.distance)} km`}
          />
          <Metric
            icon={<FaClock />}
            value={formatDuration(activity.duration)}
          />
          <Metric
            icon={<FaTachometerAlt />}
            value={`${fmtDecimals(activity.avgSpeed)} km/h`}
          />
          <Metric
            icon={<FaBolt />}
            value={`${fmtDecimals(activity.maxSpeed)} km/h`}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
