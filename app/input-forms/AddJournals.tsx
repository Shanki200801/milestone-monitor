import React, { useState } from "react";
import InputCard from "./InputCard";

const AddJournals = () => {
  const [facultyID, setFacultyID] = useState("");
  const [date, setDate] = useState("");
  const [paperTitle, setPaperTitle] = useState("");
  const [journalName, setJournalName] = useState("");
  const [issn, setIssn] = useState("");
  const [indexedIn, setIndexedIn] = useState("");
  const [link, setLink] = useState("");
  const [imageLink, setImageLink] = useState("");
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
            input_name="Date published"
            input_type="text"
            input_value={date}
            set_input={setDate}
          />
          <InputCard
            input_name="Paper title"
            input_type="text"
            input_value={paperTitle}
            set_input={setPaperTitle}
          />
          <InputCard
            input_name="Application number"
            input_type="date"
            input_value={journalName}
            set_input={setJournalName}
          />
          <InputCard
            input_name="Status"
            input_type="text"
            input_value={issn}
            set_input={setIssn}
          />
          <InputCard
            input_name="Published as proceedings"
            input_type="checkbox"
            input_value={indexedIn}
            set_input={setIndexedIn}
          />
          <InputCard
            input_name="Proceedings front page"
            input_type="text"
            input_value={link}
            set_input={setLink}
          />
          <InputCard
            input_name="Certificate"
            input_type="text"
            input_value={imageLink}
            set_input={setImageLink}
          />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddJournals;
