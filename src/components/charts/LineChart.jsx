import "./LineChart.scss";
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea
} from "recharts";

function CustomTooltip(props) {
  console.log(props)
  const sessionData = props.payload[0]?.value + " min"

  if (props.active) {
    console.log(props)
    return(
      <div className="linechart-custom-tooltip">
      <p>{sessionData}</p>
      </div>
    )
  }

  return null
}

function LineChart({ sessionsData }) {
  return (
    <div className="line-chart">
      <p className="line-chart--title">
        Durée moyenne des <br />
        sessions
      </p>
      <ResponsiveContainer width="100%" height="100%" className="line-chart--chart" >
        <Chart data={sessionsData}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            dataKey="sessionLength"
            stroke="#FFFFFF"
            type="natural"
            strokeWidth={2}
            dot={false}
          />
          <ReferenceArea />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
