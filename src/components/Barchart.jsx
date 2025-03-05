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

const data = {
  data: {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  },
};

function Barchart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.data.sessions}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} />
          <YAxis orientation="right" axisLine={false} />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
          <Tooltip />
          <Legend verticalAlign="top" iconType="circle" iconSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchart;
