const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-black text-white p-3 rounded-lg shadow-md">
      <p className="text-sm opacity-80">{label}</p>

      <p className="font-semibold">Distance: {payload[0].value} km 🚴</p>
    </div>
  );
};
