import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from "recharts";
  
  export default function Chart({ height, width, data, stroke, dataKey }) {
    return (
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line
          type="natural"
          dataKey={dataKey}
          stroke={stroke ?? "#8884d8"}
        />
      </LineChart>
    );
  }
  