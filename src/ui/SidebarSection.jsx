import { sidebarData } from "@/constants/sidebarData";
import Link from "next/link";

export default function SidebarSection() {
  return (
    <>
      {sidebarData.map((data, i) => {
        return (
          <div className="m-3 p-2" key={i}>
            <p className="text-sm text-gray-500">{data.section}</p>
            {data.subSections.map((subsection, i) => {
              return <Link href={subsection.linkTo} className="flex m-2 items-center " key={i}>
                {subsection.image}
                <p className="ml-2">{subsection.text}</p>
              </Link>;
            })}
          </div>
        );
      })}
    </>
  );
}
