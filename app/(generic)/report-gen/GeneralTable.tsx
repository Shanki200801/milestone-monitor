import React from "react";

const GenralTable = ({ data }) => {
  console.log("data from table component", data);
  return (
    <div className="max-h-80 overflow-y-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4">Faculty ID</th>
            <th className="py-2 px-4">Faculty Name</th>
            <th className="py-2 px-4">Entry Type</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Verification Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4">{item.faculty_id}</td>
              <td className="py-2 px-4">{item.faculty_id}</td>
              <td className="py-2 px-4">{item.entry_type}</td>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.title}</td>
              <td className="py-2 px-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenralTable;
