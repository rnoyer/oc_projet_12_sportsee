import "./LineChart.scss";
import { LineChart as Chart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function LineChart({sessionsData, className}) {
  return (
    <div className={className} >
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={sessionsData} >
          <XAxis dataKey="day" axisLine={false} />
          <Line dataKey="sessionLength" stroke="#FFFFFF" type="monotone" strokeWidth={2} />
          <Tooltip />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
