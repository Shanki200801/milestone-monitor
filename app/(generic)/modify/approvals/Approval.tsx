import React from "react";
import { PendingData } from "./types";

// Example usage:
// const data: PendingData = /* Your JSON data here */;

const Approval = ({ pending_data }: { pending_data: PendingData }) => {
  // console.log("printing data from component" + JSON.stringify(pending_data));
  for (const confs of pending_data.pending_conferences) {
    confs["entry_type"] = "Conference";
  }
  for (const jour of pending_data.pending_journal) {
    jour["entry_type"] = "Journal";
  }
  for (const workshops of pending_data.pending_workshop) {
    workshops["entry_type"] = "Workshop";
  }
  for (const patents of pending_data.pending_patent) {
    patents["entry_type"] = "Patent";
  }
  const outer_display_object = [
    ...pending_data["pending_conferences"],
    ...pending_data["pending_journal"],
    ...pending_data["pending_workshop"],
    ...pending_data["pending_patent"],
  ];
  // console.log("printing data from component" + outer_display_object);
  // console.log(
  //   "testing " + JSON.stringify([...pending_data["pending_conferences"]])
  // );
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto overflow-scroll h-4/5">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Time Stamp</th>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-center">Faculty Name</th>
                  <th className="py-3 px-6 text-center">Title</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {outer_display_object.map((item, index) => (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-100"
                    key={index}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{item.created_at}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="font-medium">{item.entry_type}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="font-medium">{item.faculty_id}</span>
                    </td>
                    <td className="py-3 px-6 text-center w-60 inline-block">
                      <span className="font-medium truncate block">
                        {item.title}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
