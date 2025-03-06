import "./RadialChart.scss";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadialChart({ scoreData }) {

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={90}
          endAngle={450}
          innerRadius="50%"
          barSize={10}
          data={scoreData}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar
            label={{ position: "center", fill: "#000000" }}
            cornerRadius={100}
            dataKey="todayScore"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}

export default RadialChart;
