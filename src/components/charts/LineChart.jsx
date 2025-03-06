import "./LineChart.scss";
import { LineChart as Chart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function LineChart({sessionsData}) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={sessionsData}>
          <XAxis dataKey="day"/>
          <Line dataKey="sessionLength" stroke="#8884d8" type="monotone" strokeWidth={2} />
          <Tooltip />
        </Chart>
      </ResponsiveContainer>
    </>
  );
}

export default LineChart;
