import React from "react";
import { Alata } from "next/font/google";
import NoData from "@/components/categories/NoData";

const tableFont = Alata({ weight: "400", subsets: ["latin"] });

const GenralTable = ({ data, staffDetails }) => {
  // console.log("data from table component", data);
  // console.log("Staff details ->", staffDetails);
  return (
    <div className="max-h-80 overflow-y-auto">
      {data.length == 0 ? (
        <NoData
          columns={[
            "Faculty ID",
            "Faculty Name",
            "Entry Type",
            "Date",
            "Title",
            "Verification Status",
          ]}
        />
      ) : (
        <DisplayTable props={data} staffDetails={staffDetails} />
      )}
    </div>
  );
};

const DisplayTable = (props: any, staffDetails: any) => {
  console.log("props", props);
  staffDetails = props.staffDetails;
  props = props.props;

  const getfacultyname = (id: string) => {
    const faculty = staffDetails.find((f: any) => f.faculty_id == id);
    return faculty ? faculty.faculty_name : "";
  };
  return (
    <section id="table-section" className=" m-3 p-5 sm:rounded min-h-[25rem]">
      <div className="overflow-x-auto shadow-md sm:rounded">
        <table
          className={`${tableFont.className} w-full text-sm text-left text-black`}
        >
          <thead className="text-lg text-black uppercase bg-[#60fbdf]">
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
            {props.map((item: any, index: any) => {
              return (
                <tr key={index}>
                  <td className="py-2 px-4">{item.faculty_id}</td>
                  <td className="py-2 px-4">
                    {getfacultyname(item.faculty_id)}
                  </td>
                  <td className="py-2 px-4">{item.entry_type}</td>
                  <td className="py-2 px-4">{item.date}</td>
                  <td className="py-2 px-4">{item.title}</td>
                  <td className="py-2 px-4">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GenralTable;
