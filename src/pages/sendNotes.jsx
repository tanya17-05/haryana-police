import { AiOutlineSend } from "react-icons/ai";
function sendNotes() {
  return (
    <div className="bg-blue-50 m-10 p-10">
      <div className="flex gap-10 mb-10">
        <div className="flex gap-4 flex-[6] ">
          <input className="border-b-2 w-full bg-transparent" placeholder="Send to ..."/>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button className="flex items-center justify-center text-green-400 gap-4 border-2 border-green-400 hover:bg-green-600 hover:border-green-bg-green-600 hover:text-white p-3 transition-all rounded-lg">
            <span>Send</span>
            <AiOutlineSend fontSize={20} />
          </button>
        </div>
      </div>
      <div className="rounded">
        <textarea name="" id="" className="resize-none w-full h-20 rounded-md p-4" placeholder="Write your message ..."></textarea>
      </div>
    </div>
  );
}

export default sendNotes;
