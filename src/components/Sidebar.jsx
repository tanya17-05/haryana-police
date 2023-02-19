import { useState } from "react";
import Image from "next/image";
import { logo } from "@/constants/images";
import SidebarSection from "@/ui/SidebarSection"
import Link from "next/link";
import { useRouter } from "next/router"
import {AiOutlineLogout} from "react-icons/ai"

export default function Sidebar({setLoggedIn}) {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter()


  const toggleSidebar = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebar(open);
  };

  return (
    <div className="w-fit border-r-2 p-3 fixed h-full" id="sidebar">
      <Link href={"/"} className="flex flex-row items-center justify-center pb-3 border-b-2">
        <Image src={logo} height="40" width="40" className="rounded-full mx-3" alt=""/>
        <p className="font-bold">Haryana CMS</p>
      </Link>
      <SidebarSection/>
      <button className="ml-6 flex gap-2 items-center justify-center hover:bg-red-200 px-3 py-2 rounded border-2 border-red-400" onClick={()=>setLoggedIn(false)}><AiOutlineLogout/>Logout</button>
    </div>
  );
}
