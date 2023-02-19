function closedComplaints() {
  return (
    <div>
      <div className="flex justify-between bg-white rounded p-5 gap-10">
        <span className="flex gap-2 items-center justify-center">
          <span className="text-xs">ADD</span>
          <span className="text-xs">{">>"}</span>
          <span className="text-xs text-red-600">PENDING COMPLAINTS</span>
        </span>
        <span className="flex gap-3">
          <select name="" id="">
            <option value="">Select District</option>
            <option value="hisar">Hisar</option>
            <option value="karnal">Karnal</option>
          </select>
          <input type="date" placeholder="Select Date" name="" id="" />
          <select name="" id="">
            <option value="">Select IO</option>
            <option value="io1">IO 2</option>
            <option value="io1">IO 1</option>
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
      <div className="p-5">
        <div className="flex gap-2">
          <span className="uppercase">Congratulations Karnal range</span>
          <span>{">>"}</span>
          <span className="uppercase">Sadar police station</span>
        </div>
        <div className="flex gap-5 flex-col m-10">
            <div className="text-3xl text-green-500">Highest rate of closing complaints, Sadar thana: <span className="text-black">IO Sh. Ramesh Kumar</span></div>
            <div className="text-3xl text-red-500">Lowest rate of closing complaints, Sadar thana <span className="text-black">IO Sh. Ramesh Kumar</span></div>
        </div>
        <div className="flex gap-5 items-center justify-center mt-8">
            <span>View closed complaints</span>
            <span>|</span>
            <span>Complaints with justice</span>
        </div>
      </div>
    </div>
  );
}

export default closedComplaints;
