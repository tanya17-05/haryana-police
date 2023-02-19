import { FaCircle, FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const allData = [
  {
    highlight: "Officer Information",
    otherInformation: "By Mahesh Singh, IO, Sadar, Karnal",
    color: "red",
  },
  {
    highlight: "Officer Information",
    otherInformation: "By Mahesh Singh, IO, Sadar, Karnal",
    color: "blue",
  },
  {
    highlight: "Officer Information",
    otherInformation: "By Mahesh Singh, IO, Sadar, Karnal",
    color: "green",
  },
  {
    highlight: "Officer Information",
    otherInformation: "By Mahesh Singh, IO, Sadar, Karnal",
    color: "purple",
  },
  {
    highlight: "Officer Information",
    otherInformation: "By Mahesh Singh, IO, Sadar, Karnal",
    color: "teal",
  },
];

export default function Notes() {
  return (
    <div className="mt-5">
      {allData.map((data, i) => {
        return (
          <div className="relative mr-10 text-left" key={i}>
            <div className="flex justify-between">
              <div className="flex items-center relative">
                <div
                  className={`${
                    i !== allData.length-1 ? `border-r-2` : ``
                  } absolute h-full left-1 md:left-10 top-2 z-10`}
                >
                  <FaCircle
                    className="-top-1 -ml-2 absolute"
                    color={data.color}
                  />
                </div>
                <div className="ml-16">
                  <div className="font-bold">{data.highlight}</div>
                  <div className="italic md:mb-4">{data.otherInformation}</div>
                </div>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <FaEdit color="grey" />
                <AiOutlineDelete color="grey" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
