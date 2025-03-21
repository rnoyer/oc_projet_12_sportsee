import "./Barchart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomTooltip(props) {
  const kgData = props.payload[0]?.value + "kg";
  const kCalData = props.payload[1]?.value + "kCal";

  if (props.active) {
    return (
      <div className="custom-tooltip">
        <p>{kgData}</p>
        <p>{kCalData}</p>
      </div>
    );
  }

  return null;
}

function Barchart({ sessionsData }) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className={"bar-chart"}>
        <p className="bar-chart--title">Activité quotidienne</p>
        <BarChart data={sessionsData} barCategoryGap="35%" className={"bar-chart--chart"}>
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              paddingRight: "20px",
              paddingBottom: "20px",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            orientation="right"
            axisLine={false}
            dataKey="Calories brûlées (kCal)"
            tickLine={false}
            padding={{ top: 20 }}
          />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            radius={[90, 90, 0, 0]}
            maxBarSize={10}
            dataKey="Poids (kg)"
            fill="#282D30"
          />
          <Bar
            radius={[90, 90, 0, 0]}
            maxBarSize={10}
            dataKey="Calories brûlées (kCal)"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchart;
