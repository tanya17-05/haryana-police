import {AiOutlineDownload} from "react-icons/ai"
export const mainTableData = {
  header: ["Tracking ID", "Complaint from", "Complaint from", "Issued Date", "Area", "Deadline", "Status"],
  row: [
    { id: 1, data: ["#5442", "DG-Office", "Vikas Sharma", "30 Aug, 2021", "Sadar Thana", "15 Nov, 2021", "Progress"] },
    { id: 2, data: ["#5442", "DG-Office", "Vikas Sharma", "30 Aug, 2021", "Sadar Thana", "15 Nov, 2021", "Progress"]  },
  ],
};
export const pendingTableData = {
  header: ["Tracking ID", "Complaint from", "Complaint from", "Issued Date", "Area", "Deadline", "Status"],
  row: [
    { id: 1, data: ["#5442", "DG-Office", "Vikas Sharma", "30 Aug, 2021", "Sadar Thana", "15 Nov, 2021", "Progress"] },
    { id: 2, data: ["#5442", "DG-Office", "Vikas Sharma", "30 Aug, 2021", "Sadar Thana", "15 Nov, 2021", "Progress"]  },
  ],
};
export const viewIOTable = {
  header: ["IO ID", "IO Name", "No. of complaints"],
  row: [
    { id: 1, data: ["#5442", "Vikas Kumar", "25"] },
    { id: 1, data: ["#5442", "Abhilasha Kumari", "45"] },
  ],
};
export const viewIOReportData = {
  header: ["IO ID", "IO Name", "Downlaod Report"],
  row: [
    { id: 1, data: ["#5442", "Vikas Kumar", <AiOutlineDownload className="cursor-pointer"/>] },
    { id: 1, data: ["#5442", "Abhilasha Kumari", <AiOutlineDownload className="cursor-pointer"/>] },
  ],
};

  