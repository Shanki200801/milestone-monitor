import React from "react";
import {
  PendingConference,
  PendingPatent,
  PendingJournal,
  PendingWorkshop,
} from "./types";
export const ModalComponent = (
  data: PendingConference | PendingPatent | PendingJournal | PendingWorkshop,
  viewState: boolean
) => {
  return (
    <div
      className={`${
        viewState ? "absolute" : "hidden"
      } top-20 left-0 right-0 mx-auto p-5 border w-3/5  shadow-lg rounded-md  bg-white`}
    >
      <div className="mt-3 text-center">
        <h1>Details of the entry</h1>
        <ul>
          {
            //Display details present in data.
            JSON.stringify(data)
          }
        </ul>
      </div>
    </div>
  );
};
