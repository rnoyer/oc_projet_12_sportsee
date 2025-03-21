import "./RadialChart.scss";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function CustomLabel(props) {
  return (
    <text
      textAnchor="middle"
      offset={props.offset}
      x={props.cx}
      y={props.cy}
      fill="#000000"
      fontWeight={500}
    >
      <tspan
        x={props.cx}
        dy="0em"
        fill="#000000"
        className="radial-label"
        fontSize={26}
        fontWeight={700}
      >{`${props.value}%`}</tspan>
      <tspan x={props.cx} dy="1.5em" fill="#74798C">
        de votre
      </tspan>
      <tspan x={props.cx} dy="1.5em" fill="#74798C">
        objectif
      </tspan>
    </text>
  );
}

function RadialChart({ scoreData }) {
  return (
    <> 
      <ResponsiveContainer width="100%" height="100%" className={"radial-chart"}>
        <p className="radial-chart--title">Score</p>
        <RadialBarChart
          startAngle={90}
          endAngle={450}
          innerRadius="100%"
          barSize={10}
          data={scoreData}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            label={CustomLabel}
            cornerRadius={100}
            dataKey="todayScore"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}

export default RadialChart;
