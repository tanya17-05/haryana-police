import SingleBarChart from "@/ui/charts/SingleBarChart";
import SingleLineChart from "@/ui/charts/SingleLineChart";
import { mainChart } from "./chartData";

export const quickViewData = [
  {
    name: "Total Complaints",
    number: "12",
    chart: <SingleBarChart data={mainChart} height={100} width={200} dataKey="pv" />,
  },
  {
    name: "Total Pending",
    number: "5",
    chart: (
      <SingleLineChart data={mainChart} height={100} width={200} dataKey="pv" />
    ),
  },
  {
    name: "Total ",
    number: "12",
    chart: <SingleBarChart data={mainChart} height={100} width={200} dataKey="pv" />,
  },
  {
    name: "Officers complaint",
    number: "5",
    chart: (
      <SingleLineChart data={mainChart} height={100} width={200} dataKey="pv" />
    ),
  },
];
