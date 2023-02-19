import { useState } from "react";

export default function AddComplaint() {
  const [fileRadio, setFileRadio] = useState(false);
  return (
    <div className="bg-blue-50 p-5">
      <div className="flex justify-between bg-white rounded p-5">
        <span>
          <span className="text-xs">ADD</span>
          <span className="text-xs">{">>"}</span>
          <span className="text-xs text-red-600">NEW COMPLAINT</span>
        </span>
        <span>
          <select name="" id="">
            <option value="">Select District</option>
            <option value="hisar">Hisar</option>
            <option value="karnal">Karnal</option>
          </select>
        </span>
        <span className="flex gap-2">
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
          <span>
            <span>Total complaints: </span>
            <span>2500</span>
          </span>
        </span>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Complainant Name</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="p-2 mr-2 border-2 rounded"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="First Last"
              className="p-2 border-2 rounded"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Email ID</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email ID"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Range</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Range"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Issue Date</label>
          <div className="flex">
            <input
              type="date"
              name=""
              id=""
              placeholder="Range"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Address</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Address"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5">
          <label className="mb-5">Phone Number</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone Number"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Address</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Address"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5">
          <label className="mb-5">Phone Number</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone Number"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Complainant Name</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="p-2 mr-2 border-2 rounded"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="First Last"
              className="p-2 border-2 rounded"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">IO</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email ID"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Issue Date</label>
          <div className="flex">
            <input
              type="date"
              name=""
              id=""
              placeholder="Range"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Complainant Name</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Email ID</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email ID"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Email ID</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email ID"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Range</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Range"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Complaint</label>
          <div className="flex">
            <textarea
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="p-2 mr-2 border-2 rounded w-full h-44"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Date of Submission</label>
          <div className="flex">
            <input
              type="date"
              name=""
              id=""
              placeholder=""
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Target deadline</label>
          <div className="flex">
            <input
              type="date"
              name=""
              id=""
              placeholder="First Name"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1 flex items-center justify-start gap-3">
          <div className="flex">
            <input
              type="checkbox"
              name=""
              id=""
              placeholder="First Name"
              className="border-2 rounded h-5 w-5"
            />
          </div>
          <label className="text-xl">High Priority</label>
        </div>
      </div>
      <div className="flex">
        <div className="m-5 flex-1">
          <label className="mb-5">Special remark</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder=""
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
        <div className="m-5 flex-1">
          <label className="mb-5">Write complaint here</label>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label > Upload files</label>
        <div className="flex">
          <div className=" flex-1 flex items-center justify-center">
            <label className="mr-5">From Internet</label>
            <div className="flex">
              <input
                type="radio"
                name="fileradio"
                id="fileradio"
                placeholder=""
                className="p-2 mr-2 border-2 rounded w-full"
                onClick={() => setFileRadio(false)}
                checked={!fileRadio}
              />
            </div>
          </div>
          <div className=" flex-1 flex items-center justify-center">
            <label className="mr-5">From My Computer</label>
            <div className="flex">
              <input
                type="radio"
                name="fileradio"
                id="fileradio"
                placeholder=""
                className="p-2 mr-2 border-2 rounded w-full"
                onClick={() => setFileRadio(true)}
                checked={fileRadio}
              />
            </div>
          </div>
        </div>
        <div className="m-5 flex-1">
          <div className="flex">
            <input
              type={fileRadio ? `file` : `text`}
              name=""
              id=""
              placeholder=""
              className="p-2 mr-2 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <button type="submit" className="my-5 p-3 border-2 border-green-400 hover:border-green-600 hover:bg-green-600 transition-all rounded font-bold hover:text-white">Add</button>
      </div>

    </div>
  );
}
