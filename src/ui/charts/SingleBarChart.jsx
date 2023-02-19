import { BarChart, Bar, Tooltip } from "recharts";

export default function Chart({ stroke, data, dataKey, width, height }) {
  return (
    <BarChart width={width} height={height} data={data}>
      <Bar dataKey={dataKey} fill={stroke ?? "#8884d8"} />
    </BarChart>
  );
}
