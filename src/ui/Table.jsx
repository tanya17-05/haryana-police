import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const data = {
  header: ["one", "two", "three"],
  row: [
    { id: 1, data: [1, 2, 3] },
    { id: 2, data: [4, 5, 6] },
  ],
};

export default function Table({data}) {
  const [row, setRow] = useState(data.row);

  const removeData = (id) => {
    const newRow = row.filter(() => row.id === id);
    console.log(newRow);
  };

  const renderHeader = () => {
    return (
      <>
        {data?.header?.map((key, index) => {
          return (
            <th className="border-2 h-16" key={index}>
              {key.toUpperCase()}
            </th>
          );
        })}
        <th className="border-2">
          Action
        </th>
      </>
    );
  };

  const renderBody = () => {
    return row?.map((row) => {
      return (
        <tr key={row.id}>
          {row.data.map((cell, i) => {
            return (
              <td key={i} className="text-center border-2 h-16">
                {cell}
              </td>
            );
          })}
          <td className="flex items-center justify-center h-16 gap-5 border-2">
            <FaEdit color="grey" fontSize={16} className="cursor-pointer" />
            <AiOutlineDelete color="grey" className="cursor-pointer"/>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="border-2 m-4 w-full">
      <thead>
        <tr className="border-2" key={"1"}>
          {renderHeader()}
        </tr>
      </thead>
      <tbody key={"2"}>{renderBody()}</tbody>
    </table>
  );
}
