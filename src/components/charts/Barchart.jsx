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

function Barchart({sessionsData}) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sessionsData} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} />
          <YAxis orientation="right" axisLine={false} />
          <Tooltip />
          <Bar radius={[90, 90, 0, 0]} maxBarSize={10} dataKey="kilogram" fill="#282D30" />
          <Bar radius={[90, 90, 0, 0]} maxBarSize={10} dataKey="calories" fill="#E60000" />
          <Legend verticalAlign="top" iconType="circle" iconSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchart;
