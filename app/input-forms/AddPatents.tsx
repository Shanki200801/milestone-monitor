import React, { useState } from "react";
import InputCard from "./InputCard";
import { addPatent } from "../api/dbfunctions.tsx";

const AddPatents = () => {
  const [facultyID, setFacultyID] = useState("");
  const [patentName, setPatentName] = useState("");
  const [patentType, setPatentType] = useState("");
  const [applicationNo, setApplicationNo] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [patentLink, setPatentLink] = useState("");
  const [patentDate, setPatentDate] = useState("");

  const addPatentWrapper = async(e: React.MouseEvent, args: [string, string, string, string, string, string, string, string]) => {
    e.preventDefault();
    await addPatent(...args);
  }
  return (
    <div className="">
      <form>
        <div className="grid gap-6 mb-6 ">
          {/* Lock the faculty ID to user.id */}
          <InputCard
            input_name="Faculty ID"
            input_type="text"
            input_value={facultyID}
            set_input={setFacultyID}
          />
          <InputCard
            input_name="Patent name"
            input_type="text"
            input_value={patentName}
            set_input={setPatentName}
          />
          <InputCard
            input_name="Patent Type"
            input_type="text"
            input_value={patentType}
            set_input={setPatentType}
          />
          <InputCard
            input_name="Application Number"
            input_type="text"
            input_value={applicationNo}
            set_input={setApplicationNo}
          />
          <InputCard
            input_name="Status"
            input_type="text"
            input_value={status}
            set_input={setStatus}
          />
          <InputCard
            input_name="Image"
            input_type="text"
            input_value={image}
            set_input={setImage}
          />
          <InputCard
            input_name="Patent Link"
            input_type="text"
            input_value={patentLink}
            set_input={setPatentLink}
          />
          <InputCard
            input_name="Patent Date"
            input_type="date"
            input_value={patentDate}
            set_input={setPatentDate}
          />
          <input type="submit" onClick={(e) => addPatentWrapper(e, [facultyID, patentName, patentDate, applicationNo, image, status, patentType, patentLink])} />
        </div>
      </form>
    </div>
  );
};

export default AddPatents;
