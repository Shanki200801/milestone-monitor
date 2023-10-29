"use client";
import React from "react";
import { useState } from "react";
import {
  PendingConference,
  PendingData,
  PendingPatent,
  PendingJournal,
  PendingWorkshop,
} from "./types";
import { Button, Checkbox, Label, Modal, Table, TextInput } from "flowbite-react";
import { approveEntry, rejectEntry } from "@/app/api/dbfunctions";
import { Urbanist } from "next/font/google";

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

// Example usage:
// const data: PendingData = /* Your JSON data here */;

const Approval = ({ pending_data, userData }: { pending_data: PendingData, userData:any }) => {
  //specific data

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
      <div className=" min-h-screen bg-white flex flex-col items-center font-sans">
        <p className={`${bodyText.className} my-6 text-xl`}>
          Use the table to approve or disapprove submissions made
          by staff of the {userData.faculty_department} department
        </p>
        <div className="w-full bg-white py-5 px-6">
          <div className={`bg-[#cbfef8] py-5 px-6 rounded`}>
          <Table className={`${bodyText.className} text-black `} hoverable>
              <Table.Head className={``}>
                
                  <Table.HeadCell className={`bg-[#60fbdf]`}>Time Stamp</Table.HeadCell>
                  <Table.HeadCell className={`bg-[#60fbdf]`}>Category</Table.HeadCell>
                  <Table.HeadCell className={`bg-[#60fbdf]`}>Faculty Name</Table.HeadCell>
                  <Table.HeadCell className={`bg-[#60fbdf]`}>Title</Table.HeadCell>
                  <Table.HeadCell className={`bg-[#60fbdf] text-center`}>Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {outer_display_object.map((item, index) => (
                  <Table.Row
                  className="bg-[#29b7a6]"
                    key={index}
                  >
                    <Table.Cell>
                          {item.created_at?.substring(0, 10)}
                    </Table.Cell>
                    <Table.Cell>
                        {item.entry_type}
                    </Table.Cell>
                    <Table.Cell>
                      {item.faculty_id}
                    </Table.Cell>
                    <Table.Cell>
                        {item.title}
                    </Table.Cell>
                    <Table.Cell className={`text-center`}>
                      <ViewModal data={item} />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          </div>
        </div>
  );
};

const ViewModal = ({
  data,
}: {
  data: PendingConference | PendingJournal | PendingWorkshop | PendingPatent;
}) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [isChecked, setIsChecked] = useState(false);
  const props = { openModal, setOpenModal };

  // console.log("data inside new modal is", data);

  const handleApprove = (data: any) => {
    props.setOpenModal(undefined);
    setIsChecked(false);
    approveEntry(data);
  };
  const handleDisapprove = (data: any) => {
    props.setOpenModal(undefined);
    setIsChecked(false);
    rejectEntry(data);
  };
  return (
    <>
      <button
        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 "
        onClick={() => props.setOpenModal("dismissible")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Verify the details</Modal.Header>
        <Modal.Body>
          {data.entry_type === "Conference" && <ConferenceModal {...data} />}
          {data.entry_type === "Journal" && <JournalModal {...data} />}
          {data.entry_type === "Patent" && <PatentModal {...data} />}
          {data.entry_type === "Workshop" && <WorkshopModal {...data} />}
        </Modal.Body>
        <Modal.Footer>
          {/* checkbox to confirm */}
          <div className="flex flex-col w-full">
            <div className="flex items-center  mt-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label className="text-sm text-center">
                I confirm that the information is correct
              </label>
            </div>
            {/* Approve and Reject buttons */}
            <div className="flex justify-evenly">
              <button
                className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 rounded ${
                  isChecked ? "" : "opacity-50 cursor-not-allowed"
                } `}
                disabled={!isChecked}
                onClick={() => handleApprove(data)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2  rounded"
                onClick={() => handleDisapprove(data)}
              >
                Reject
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ConferenceModal = (data: any) => {
  console.log("data inside component " + JSON.stringify(data));
  return (
    <div className="">
      {/* {JSON.stringify(data) + "data inside component"} */}
      <h1 className="text-center text-xl font-bold">Conference</h1>
      {/* Table */}
      <table className="w-full text-center my-4">
        <tbody>
          <tr>
            <th className="py-2 px-4">Field</th>
            <th className="py-2 px-4">Value</th>
          </tr>
          <tr>
            <td className="py-2 px-4">Created At</td>
            <td className="py-2 px-4">{data.created_at}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Type of Conference</td>
            <td className="py-2 px-4">{data.type}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Paper Title</td>
            <td className="py-2 px-4">{data.paper_title}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Conference Name</td>
            <td className="py-2 px-4">{data.conf_name}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Conference Date</td>
            <td className="py-2 px-4">{data.conf_date}</td>
          </tr>

          <tr>
            <td className="py-2 px-4">Proceedings</td>
            <td className="py-2 px-4">{data.proceedings}</td>
          </tr>
          {data.proceedings && (
            <tr>
              <td className="py-2 px-4">Proceedings front page</td>
              <td className="py-2 px-4">{data.proceeding_fp}</td>
            </tr>
          )}
          <tr>
            <td className="py-2 px-4">Faculty ID</td>
            <td className="py-2 px-4">{data.faculty_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const JournalModal = (data: any) => {
  console.log("data inside component " + JSON.stringify(data));

  return (
    <div className="">
      <h1 className="text-center text-xl font-bold">Journals</h1>
      <table className="w-full text-center my-4">
        <thead>
          <tr>
            <th className="py-2 px-4">Field</th>
            <th className="py-2 px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Created at</td>
            <td className="py-2 px-4">{data.created_at}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Paper Title</td>
            <td className="py-2 px-4">{data.paper_title}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Journal Name</td>
            <td className="py-2 px-4">{data.journal_name}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">ISSN Number</td>
            <td className="py-2 px-4">{data.issn_number}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Month and Year of Publication</td>
            <td className="py-2 px-4">{data.month_and_year_of_publication}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">indexed_in</td>
            <td className="py-2 px-4">{data.indexed_in}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Link to Journal</td>
            <td className="py-2 px-4">{data.link}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Image</td>
            <td className="py-2 px-4">{data.upload_image}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Faculty ID</td>
            <td className="py-2 px-4">{data.faculty_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PatentModal = (data: any) => {
  console.log("data inside component " + JSON.stringify(data));

  return (
    <div className="">
      <h1 className="text-center text-xl font-bold">Patent</h1>
      <table className="w-full text-center my-4">
        <thead>
          <tr>
            <th className="py-2 px-4">Field</th>
            <th className="py-2 px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">created_at</td>
            <td className="py-2 px-4">{data.created_at}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Patent Name</td>
            <td className="py-2 px-4">{data.patent_name}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Patent Type</td>
            <td className="py-2 px-4">{data.patent_type}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Application Number</td>
            <td className="py-2 px-4">{data.application_no}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Application Status</td>
            <td className="py-2 px-4">{data.status}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Patent Date</td>
            <td className="py-2 px-4">{data.patent_date}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Patent Link</td>
            <td className="py-2 px-4">{data.patent_link}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Patent Image</td>
            <td className="py-2 px-4">{data.image}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">faculty_id</td>
            <td className="py-2 px-4">{data.faculty_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const WorkshopModal = (data: any) => {
  console.log("data inside component " + JSON.stringify(data));

  return (
    <div className="">
      <h1 className="text-center text-xl font-bold">Workshop</h1>
      <table className="w-full text-center my-4">
        <thead>
          <tr>
            <th className="py-2 px-4">Field</th>
            <th className="py-2 px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">created_at</td>
            <td className="py-2 px-4">{data.created_at}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Workshop Title</td>
            <td className="py-2 px-4">{data.title}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Number of Days</td>
            <td className="py-2 px-4">{data.number_of_days}</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Organized by</td>
            <td className="py-2 px-4">
              {data.organized_by == ""
                ? "Workshop organized by the faculty"
                : data.organized_by}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4">Date of Workshop</td>
            <td className="py-2 px-4">{data.date}</td>
          </tr>
          {/* will most likely need to add this after modifying types, db */}
          {/* <tr>
            <td className="py-2 px-4">Certificate link</td>
            <td className="py-2 px-4">{data.link}</td>
          </tr>
          */}
          <tr>
            <td className="py-2 px-4">faculty_id</td>
            <td className="py-2 px-4">{data.faculty_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Approval;
