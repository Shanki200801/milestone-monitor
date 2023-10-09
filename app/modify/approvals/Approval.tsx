"use client";
import React from "react";
import { useState } from "react";
import ViewIcon from "./ViewIcon";
import { ModalComponent } from "./Modal";
import {
  PendingConference,
  PendingData,
  PendingPatent,
  PendingJournal,
  PendingWorkshop,
} from "./types";
// Example usage:
// const data: PendingData = /* Your JSON data here */;

const Approval = ({ pending_data }: { pending_data: PendingData }) => {
  //Modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<
    PendingConference | PendingJournal | PendingWorkshop | PendingPatent | null
  >(null);
  const toogleModal = (
    data: PendingConference | PendingJournal | PendingWorkshop | PendingPatent
  ) => {
    setShowModal(!showModal);
    setSelectedRow(data);
  };

  //modal jsx

  //data handling
  // console.log("printing data from component" + JSON.stringify(pending_data));
  for (const confs of pending_data.pending_conferences) {
    confs["entry_type"] = "Conference";
    confs["title"] = confs["paper_title"];
  }
  for (const jour of pending_data.pending_journal) {
    jour["entry_type"] = "Journal";
    jour["title"] = jour["paper_title"];
  }
  for (const workshops of pending_data.pending_workshop) {
    workshops["entry_type"] = "Workshop";
    // workshops["title"] = workshops['title']
  }
  for (const patents of pending_data.pending_patent) {
    patents["entry_type"] = "Patent";
    patents["title"] = patents["patent_name"];
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
      <div className="min-w-screen min-h-screen bg-gray-100 flex flex-col items-center justify-center  font-sans overflow-hidden">
        <span>
          Use the following table to approve or disapprove the submissions made
          by staff of ... department
        </span>
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
                        <span className="font-medium">
                          {item.created_at?.substring(0, 10)}
                        </span>
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
                      <div
                        className="flex item-center justify-center"
                        onClick={() => toogleModal(item)}
                      >
                        <ViewIcon />
                        <ModalComponent
                          data={selectedRow}
                          viewState={showModal}
                        />
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
