import QuickView from "@/components/QuickView";
import DoubleLineChart from "@/ui/charts/DoubleLineChart";
import DoubleBarChart from "@/ui/charts/DoubleBarChart";
import { mainChart } from "@/constants/chartData";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Notes from "@/components/Notes";
import Message from "@/components/Message";
import Progress from "@/components/Progress";
import Table from "@/ui/Table";
import { mainTableData } from "@/constants/tableData";
import MainTable from "@/components/MainTable";

export default function Home() {
  return (
    <div className="bg-blue-50 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 m-4 pt-4">
          <span>Dashboard</span>
          <Link
            href={"/addComplaint"}
            className="font-bold border-2 p-2 rounded"
          >
            ADD COMPLAINT
          </Link>
        </div>
        <div className="flex items-center gap-3 m-4 pt-4">
          <div className="flex gap-4">
            <Link href={"/"} className="font-bold border-2 p-2 rounded">
              VIEW REPORT
            </Link>
            <Link href={"/"} className="font-bold border-2 p-2 rounded">
              IO DETAILS
            </Link>
          </div>
          <div>
            <Link href={"/"} className="text-sm m-2">
              Home
            </Link>
            <span>/</span>
            <Link href={"/"} className="text-sm m-2 text-purple-400">
              DashBoard
            </Link>
          </div>
        </div>
      </div>
      <QuickView />
      <div className="flex gap-3">
        <div className="bg-white rounded m-5 flex-[3]">
          <div className="flex justify-between pb-3 m-5 border-b-2 mb-5">
            <span>Analytics</span>
            <span>Karnal Range</span>
          </div>
          <DoubleLineChart
            height={300}
            width={1200}
            data={mainChart}
            dataKey1="uv"
            dataKey2="pv"
          />
        </div>
        <div className="flex-[1] flex flex-col items-center rounded-md bg-white m-5 ">
          <div className="bg-indigo-700 w-full p-4 rounded-t-md">
            <span className="text-white">Recent Complaints</span>
            <div className="flex items-center justify-center">
              <DoubleBarChart
                height={200}
                width={200}
                data={mainChart}
                dataKey1="uv"
                dataKey2="pv"
              />
            </div>
          </div>
          <div className="flex items-stretch gap-3 justify-center flex-col h-full">
            <span className="flex gap-2 items-stretch">
              <AiOutlineCheck color="#82ca9d" fontSize={25} />
              <span className="flex flex-col">
                <span className="font-bold text-blue-400">
                  Justice for complaints
                </span>
                <span className="text-xs">Nov 22</span>
              </span>
              <span className="text-xl font-bold">120</span>
            </span>
            <span className="flex gap-2 items-center justify-center">
              <RxCross1 color="red" fontSize={25} />
              <span className="flex flex-col">
                <span className="font-bold text-blue-400">
                  No Justice for complaints
                </span>
                <span className="text-xs">Nov 22</span>
              </span>
              <span className="text-xl font-bold">120</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="bg-white rounded m-5 flex-1">
          <Notes />
        </div>
        <div className="bg-white rounded m-5 flex-1">
          <Message />
        </div>
        <div className="flex-1 flex flex-col items-center rounded-md bg-white m-5 ">
          <Progress />
        </div>
      </div>
      <MainTable />
    </div>
  );
}
