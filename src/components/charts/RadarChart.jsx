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
        <Chart data={performancesData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
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
