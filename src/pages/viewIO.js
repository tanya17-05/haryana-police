import { viewIOTable } from "@/constants/tableData";
import Table from "@/ui/Table";

function viewIO() {
  return (
    <div className="bg-blue-50 p-5">
      <div className="flex m-5 rounded bg-white">
        <Table data={viewIOTable} />
      </div>
    </div>
  );
}

export default viewIO;
