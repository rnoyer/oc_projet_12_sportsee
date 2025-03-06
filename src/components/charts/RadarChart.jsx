import "./RadarChart.scss";
import {
  RadarChart as Chart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarChart({ performancesData }) {
  const data = performancesData?.data;

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind"/>
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
