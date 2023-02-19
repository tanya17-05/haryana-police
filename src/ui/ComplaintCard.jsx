import { mainChart } from "@/constants/chartData";

export default function ComplaintCard({name, number, chart}) {
  return (
    <div className="flex gap-3 items-center justify-center bg-white rounded flex-1 m-5 p-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-red-700">{name}</span>
        <span className="text-lg font-bold">{number}</span>
      </div>
      <div className="w-full">
        {chart}
      </div>
    </div>
  );
}
