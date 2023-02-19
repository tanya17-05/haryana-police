import { viewIOReportData } from "@/constants/tableData";
import Table from "@/ui/Table";

function viewIOReport() {
  return (
    <div className="bg-blue-50 p-5">
      <div className="flex m-5 rounded bg-white">
        <Table data={viewIOReportData} />
      </div>
    </div>
  );
}

export default viewIOReport;
