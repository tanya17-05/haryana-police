import Image from "next/image";
import { user } from "@/constants/user";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export default function Topbar() {

  return (
    <div className="flex items-center justify-between h-14 w-[calc(100%-250px)] bg-white z-10 shadow-[0_35px_60px_-25px_rgba(0,0,0,0.3)] fixed" id="topbar">
      <div className="flex items-center justify-center m-3">
        <span className="mr-3 cursor-pointer">
          <AiOutlineMenu fontSize={20} />
        </span>
        <span className="flex items-center justify-center border-2 rounded">
          <input type="text" />
          <AiOutlineSearch fontSize={20} className="cursor-pointer" />
        </span>
      </div>
      <div>
        <div className="flex items-center justify-center mt-3 mb-3 mr-3">
          <span>
            <span className="font-bold">User</span>
            <span className="text-blue-500">{`: ${user.name}, ${user.designation}, ${user.location}`}</span>
          </span>
          <Image
            src={user.picture}
            height={40}
            width={40}
            className="rounded-full ml-3"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
