import { quickViewData } from "@/constants/quickViewData";
import ComplaintCard from "@/ui/ComplaintCard";

export default function ComplaintCards() {
  return (
    <div className="flex gap-3 justify-between">
      {quickViewData.map(data=> {
        return <ComplaintCard name={data.name} number={data.number} chart={data.chart} key={data.name} />
      })}
    </div>
  );
}
