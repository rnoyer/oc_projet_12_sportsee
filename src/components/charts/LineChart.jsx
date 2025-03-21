import "./LineChart.scss";
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  Rectangle,
} from "recharts";

function CustomTooltip(props) {
  const sessionData = props.payload[0]?.value + " min";

  if (props.active) {
    return (
      <div className="linechart-custom-tooltip">
        <p>{sessionData}</p>
      </div>
    );
  }

  return null;
}

const CustomCursor = (props) => {
  const { points, width } = props;
  const { x } = points[0]; 
  return <Rectangle fill="#0000001A" x={x} y={0} width={width} height={500} />;
};

function LineChart({ sessionsData }) {
  return (
    <div className="line-chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="line-chart--container"
      >
        <p className="line-chart--title">
          Durée moyenne des <br />
          sessions
        </p>
        <Chart data={sessionsData} height={100} className="line-chart--chart">
          <defs>
            <linearGradient id="lineColor">
              <stop offset="0%" stopColor="#FFFFFF67" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            tick={{ fill: "#FFFFFF80" }}
          />
          <YAxis dataKey="sessionLength" hide={true} padding={{ top: 100 }} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            dataKey="sessionLength"
            stroke="url(#lineColor)"
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
