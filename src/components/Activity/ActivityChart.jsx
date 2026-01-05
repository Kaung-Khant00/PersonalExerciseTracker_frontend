import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import useResizePause from "../../Custom/Hooks/useResizePause";
import moment from "moment";
import colors from "tailwindcss/colors";
import {
  avgSpeedTickFormatter,
  calcChartTicks,
  dateTickFormatter,
  distanceTickFormatter,
  durationTickFormatter,
  formatChartDuration,
  formatDuration,
} from "../../helper/utility.function";

const ActivityChart = ({ data, summary }) => {
  const chartData = data.map((a) => ({
    date: moment(a.date).format("YYYY/MM/DD, h:mm a"),
    distance: a.distance,
    duration: a.duration,
    avgSpeed: a.avgSpeed,
  }));
  const isResizing = useResizePause();
  if (data.length === 0) <div>No Data Yet</div>;
  return (
    <div className="w-full flex h-100">
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={dateTickFormatter} />
            <YAxis
              tickFormatter={distanceTickFormatter}
              ticks={calcChartTicks(summary?.maxDistance || 0, 20)}
            />
            {!isResizing && <Tooltip />}
            <Area
              dataKey="distance"
              stroke={colors.blue[600]}
              fill={colors.blue[400]}
              syncId="distance"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={dateTickFormatter} />
            <YAxis
              tickFormatter={durationTickFormatter}
              ticks={calcChartTicks(summary?.maxDuration || 0)}
            />

            {!isResizing && <Tooltip />}
            <Area
              dataKey="duration"
              stroke={colors.purple[600]}
              fill={colors.purple[400]}
              syncId="duration"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={dateTickFormatter} />
            <YAxis
              tickFormatter={avgSpeedTickFormatter}
              ticks={calcChartTicks(summary?.maxAvgSpeed || 0, 10)}
            />
            {!isResizing && <Tooltip />}
            <Area
              dataKey="avgSpeed"
              stroke={colors.orange[600]}
              fill={colors.orange[400]}
              syncId="avgSpeed"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

/* 

    <div className="card bg-base-100 shadow-xl h-full">
      <div className="card-body">
        <h2 className="card-title">Performance Overview</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="distance"
              stroke="#22c55e"
              strokeWidth={2}
              name="Distance (km)"
            />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Duration (min)"
            />
            <Line
              type="monotone"
              dataKey="avgSpeed"
              stroke="#f97316"
              strokeWidth={2}
              name="Avg Speed (km/h)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

*/

export default ActivityChart;
