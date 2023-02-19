import { mainTableData } from "@/constants/tableData";
import Table from "@/ui/Table";
import React from "react";

function MainTable() {
  return (
    <div className="w-full flex rounded-lg bg-white gap-3 flex-col p-6">
      <span className="border-b-2 pb-3">Latest Complaints: <b>PS Sadar Thana</b></span>
      <Table data={mainTableData} />
    </div>
  );
}

export default MainTable;
