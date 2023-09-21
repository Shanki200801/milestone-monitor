import React, { useState } from "react";
import InputCard from "./InputCard.jsx";
import { addConference } from "../api/dbfunctions.tsx";

const AddConference = () => {
  const [paperTitle, setPaperTitle] = useState("");
  const [conferenceName, setConferenceName] = useState("");
  const [conferenceDate, setConferenceDate] = useState("");
  const [proceedings, setProceedings] = useState(false);
  const [facultyID, setFacultyID] = useState("");
  const [proceedingsFP, setProceedingsFP] = useState(false);
  const [certificate, setCertificate] = useState("");
  const [type, setType] = useState("");

  const addConferenceWrapper = async(e: React.MouseEvent, args: [string, string, string, boolean, string, boolean, string, string]) => {
    e.preventDefault();
    await addConference(...args);
  }

  return (
    <div className="">
      <form>
        <div className="grid gap-6 mb-6 ">
          <InputCard
            input_name="Faculty ID"
            input_type="text"
            input_value={facultyID}
            set_input={setFacultyID}
          />
          <InputCard
            input_name="Paper Title"
            input_type="text"
            input_value={paperTitle}
            set_input={setPaperTitle}
          />
          <InputCard
            input_name="Conference Name"
            input_type="text"
            input_value={conferenceName}
            set_input={setConferenceName}
          />
          <InputCard
            input_name="Conference Date"
            input_type="date"
            input_value={conferenceDate}
            set_input={setConferenceDate}
          />
          <InputCard
            input_name="Conference Type"
            input_type="text"
            input_value={type}
            set_input={setType}
          />
          <InputCard
            input_name="Published as proceedings"
            input_type="checkbox"
            input_value={proceedings}
            set_input={setProceedings}
          />
          <InputCard
            input_name="Proceedings front page"
            input_type="text"
            input_value={proceedingsFP}
            set_input={setProceedingsFP}
          />
          <InputCard
            input_name="Certificate"
            input_type="text"
            input_value={certificate}
            set_input={setCertificate}
          />
          <input type="submit" onClick={(e) => addConferenceWrapper(e, [paperTitle, conferenceName, conferenceDate, proceedings, facultyID, proceedingsFP, certificate, type])}/>
        </div>
      </form>
    </div>
  );
};

export default AddConference;