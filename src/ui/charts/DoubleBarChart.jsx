import { BarChart, Bar, Tooltip } from "recharts";

export default function Chart({
  stroke1,
  stroke2,
  data,
  dataKey1,
  dataKey2,
  width,
  height,
  tooltip,
}) {
  return (
    <BarChart width={width} height={height} data={data}>
      <Bar dataKey={dataKey1} fill={stroke1 ?? "#8884d8"} />
      <Bar dataKey={dataKey2} fill={stroke2 ?? "#82ca9d"} />
      {tooltip === true ? <Tooltip /> : ""}
    </BarChart>
  );
}
