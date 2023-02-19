import { mainChart } from "@/constants/chartData";
import DoubleBarChart from "@/ui/charts/DoubleBarChart";
import Link from "next/link";

export default function ComplaintCard() {
  return (
    <div className="bg-blue-50 p-5">
      <div className="flex gap-16 items-center justify-between mx-5">
        <div className="flex gap-2">
          <Link href={"/"} className="font-bold">Dashboard</Link>
          <span>{">>"}</span>
          <Link href={"/"}>Pending Reports</Link>
        </div>
        <span className="text-red-600">Pending: 10</span>
        <span className="text-blue-600">Today: 10</span>
        <span className="text-green-600">Closed: 10</span>
        <span>
          <select name="" id="" className="p-2">
            <option value="">Select area-wise</option>
            <option value="hisar">Hisar</option>
            <option value="karnal">Karnal</option>
          </select>
        </span>
        <span>
          <select name="" id="" className="p-2">
            <option value="">Select district-wise</option>
            <option value="hisar">Hisar</option>
            <option value="karnal">Karnal</option>
          </select>
        </span>
        <span className="text-blue-600">Total Complaints Nov 22: 127</span>
        <span>
            <Link href={"/"} className="text-sm m-2">
              Home
            </Link>
            <span>/</span>
            <Link href={"/"} className="text-sm m-2 text-purple-400">
              DashBoard
            </Link>
          </span>

      </div>
      <div className="flex flex-col gap-3 items-center justify-center bg-white flex-1 m-5 p-6 rounded">
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <span>Karnal Range</span>
            <span>{">>"}</span>
            <span>Pending Reports</span>
          </div>
          <div>
            <button className="mx-3 py-1 px-3 border-2">Filter Category</button>
            <button className="mx-3 py-1 px-3 border-2">Download PDF</button>
          </div>
        </div>
        <div className="w-full">
          <DoubleBarChart
            height={750}
            width={1500}
            data={mainChart}
            dataKey1="uv"
            dataKey2="pv"
            tooltip={true}
          />
        </div>
      </div>
    </div>
  );
}
