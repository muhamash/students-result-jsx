import React from "react";

const StudentsTable = ({ data }) => {
  return (
    <div className="max-w-[848px] mx-auto overflow-hidden text-white">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Grade</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index} className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">{student.id}</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={student.image}
                    width="32"
                    height="32"
                    alt={student.name}
                  />
                  <span className="whitespace-nowrap">{student.name}</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">{student.grade}</td>
              <td className="p-5 text-sm md:text-xl text-center">{student.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;