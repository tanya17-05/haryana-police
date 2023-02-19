import { pendingTableData } from "@/constants/tableData";
import Table from "@/ui/Table";

function PendingComplaints() {
  return (
    <div className="bg-blue-50 p-5 flex flex-col">
      <div className="flex justify-between bg-white rounded p-5">
        <span className="flex gap-2 items-center justify-center">
          <span className="text-xs">ADD</span>
          <span className="text-xs">{">>"}</span>
          <span className="text-xs text-red-600">PENDING COMPLAINTS</span>
        </span>
        <span className="flex gap-3">
          <select name="" id="">
            <option value="">Select District</option>
            <option value="hisar">Hisar</option>
            <option value="karnal">Karnal</option>
          </select>
          <input type="date" placeholder="Select Date" name="" id="" />
          <select name="" id="">
            <option value="">Select IO</option>
            <option value="io1">IO 2</option>
            <option value="io1">IO 1</option>
          </select>
        </span>
        <span className="flex gap-2">
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
        </span>
      </div>
      <div className="bg-white rounded mt-3 flex">
        <Table data={pendingTableData} />
      </div>
    </div>
  );
}

export default PendingComplaints;
