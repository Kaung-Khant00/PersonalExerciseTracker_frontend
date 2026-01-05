import moment from "moment";

export const fmtDecimals = (n) => (Number.isInteger(n) ? n : +n.toFixed(2));

export const formatDuration = (totalSeconds) => {
  const seconds = Number(totalSeconds) || 0;
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const parts = [];
  if (hrs) parts.push(`${hrs}h`);
  if (mins) parts.push(`${mins}m`);
  if (secs || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(" ");
};
export const formatChartDuration = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);

  return `${h}h`;
};

export const calcChartTicks = (maxValue, step = 3600) => {
  const ticks = [0, step];
  for (let i = step; i <= maxValue; i += step) {
    ticks.push(i);
  }
  ticks.push(ticks[ticks.length - 1] + step);
  return ticks;
};

export const dateTickFormatter = (value) => {
  return moment(value).format("MMM D");
};
export const avgSpeedTickFormatter = (value) => {
  if (value === 0) return "";
  return `${value}`;
};
export const distanceTickFormatter = (value) => {
  if (value === 0) return "";
  return `${value}km`;
};
export const durationTickFormatter = (value) => {
  if (value === 0) return "";
  return `${Math.round(value / 3600)}H`;
};
