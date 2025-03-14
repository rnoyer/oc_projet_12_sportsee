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

function Barchart({ sessionsData }) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart data={sessionsData} barCategoryGap="35%" >
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              paddingRight: "20px",
              paddingBottom: "20px"
          }}

          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            orientation="right"
            axisLine={false}
            dataKey="Calories brûlées (kCal)"
            tickLine={false}
          />
          <Tooltip />

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
