import React from "react";
import {
  PendingConference,
  PendingPatent,
  PendingJournal,
  PendingWorkshop,
  TransferedData,
} from "./types";
export const ModalComponent = (
  data: TransferedData,
  viewState: boolean,
  onClose: Function
) => {
  return (
    <div
      className={`absolute left-0 right-0 top-20 mx-auto border w-3/5 shadow-lg rounded-md bg-white`}
    >
      <div className="overflow-y-auto bg-white p-6 rounded shadow-lg flex flex-col">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="mb-4">
          {JSON.stringify(data.data)}
          {data["data"].entry_type === "Conference" && (
            <ConferenceModal {...data.data} />
          )}
          {data["data"].entry_type === "Journal" && (
            <JournalModal {...data.data} />
          )}
          {data["data"].entry_type === "Patent" && (
            <PatentModal {...data.data} />
          )}
          {data["data"].entry_type === "Workshop" && (
            <WorkshopModal {...data.data} />
          )}
        </div>

        {/* Approve and Reject buttons */}
        <div className="flex justify-evenly">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2  rounded ">
            Approve
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2  rounded">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

const ConferenceModal = (data: PendingConference) => {
  console.log("data inside component " + data.entry_type);
  return (
    <div className="">
      {JSON.stringify(data + "data inside component")}
      <h1 className="text-center text-xl font-bold">Conference</h1>
      <div className="flex flex-col font-semibold text-lg text-left">
        <div>
          Faculty ID:{" "}
          <span className="font-normal">
            {JSON.stringify(data["faculty_id"])}
          </span>
        </div>
        <div>Name of Conference: {data.conf_name}</div>
        <div>Conference Date: {data.conf_date}</div>
        <div>Title of paper presented: {data.paper_title}</div>
        <div>Faculty ID: {data.faculty_id}</div>
        
      </div>
    </div>
  );
};

const JournalModal = (data: PendingJournal) => {
  return <div>JournalModal</div>;
};

const PatentModal = (data: PendingPatent) => {
  return <div>PatentModal</div>;
};

const WorkshopModal = (data: PendingWorkshop) => {
  return <div>WorkshopModal</div>;
};
