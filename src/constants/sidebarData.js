import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineCalendar,
  AiOutlineFire,
  AiOutlineClockCircle,
  AiOutlineFileDone,
  AiOutlineEye,
  AiOutlineSend,
  AiOutlineFundView
} from "react-icons/ai";
import { BsFillFileLockFill } from "react-icons/bs";
import { FcHighPriority } from "react-icons/fc";
import { FiTarget } from "react-icons/fi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { TbReportAnalytics, TbFileReport } from "react-icons/tb";


export const sidebarData = [
  {
    section: "Main",
    subSections: [
      {
        image: <AiOutlineHome />,
        text: "Dashboard",
        linkTo: "/",
      },
    ],
  },
  {
    section: "Manage complaints",
    subSections: [
      {
        image: <AiOutlineRead />,
        text: "All complaints",
        linkTo: "/allComplaints",
      },
      {
        image: <AiOutlineCalendar />,
        text: "Today complaints",
        linkTo: "",
      },
      {
        image: <AiOutlineFire color="red" />,
        text: "High Priority",
        linkTo: "",
      },
      {
        image: <AiOutlineClockCircle />,
        text: "Pending complaints",
        linkTo: "/pendingComplaints",
      },
      {
        image: <AiOutlineFileDone />,
        text: "Closed complaints",
        linkTo: "/closedComplaints",
      },
      {
        image: <AiOutlineEye />,
        text: "View Reports",
        linkTo: "/viewReport",
      },
    ],
  },
  {
    section: "Manage officers",
    subSections: [
      {
        image: <GiPoliceOfficerHead/>,
        text: "View IO",
        linkTo: "/viewIO",
      },
      {
        image: <TbReportAnalytics/>,
        text: "IO Reports",
        linkTo: "/viewIOReport",
      },
      {
        image: <AiOutlineSend/>,
        text: "Send Notes",
        linkTo: "/sendNotes",
      },
    ],
  },
  {
    section: "Manage reports",
    subSections: [
      {
        image: <TbFileReport/>,
        text: "Pending reports",
        linkTo: "",
      },
      {
        image: <BsFillFileLockFill/>,
        text: "Closed Reports",
        linkTo: "",
      },
      {
        image: <FiTarget/>,
        text: "Range reports",
        linkTo: "",
      },
      {
        image: <FcHighPriority/>,
        text: "High priority Reports",
        linkTo: "",
      },
      {
        image: <AiOutlineFundView/>,
        text: "View all reports",
        linkTo: "",
      },
    ],
  },
];
