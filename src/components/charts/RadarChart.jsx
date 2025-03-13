import "./RadarChart.scss";
import {
  RadarChart as Chart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarChart({ performancesData }) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <Chart
          data={performancesData}
          startAngle={30}
          endAngle={-330}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: 12 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.7}
          />
        </Chart>
      </ResponsiveContainer>
    </>
  );
}

export default RadarChart;
