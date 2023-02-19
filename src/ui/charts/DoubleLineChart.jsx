import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart({ height, width, data, stroke1, stroke2, dataKey1, dataKey2 }) {
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataKey1}
        stroke={stroke1 ?? "#8884d8"}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={dataKey2} stroke={stroke2 ?? "#82ca9d"} />
    </LineChart>
  );
}
