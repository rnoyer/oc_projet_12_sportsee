import "./LineChart.scss";
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LineChart({ sessionsData, className }) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={sessionsData}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip />
          <Line
            dataKey="sessionLength"
            stroke="#FFFFFF"
            type="monotone"
            strokeWidth={2}
            dot={false}
          />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
