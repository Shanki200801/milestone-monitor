import React, { useState } from "react";
import InputCard from "./InputCard";

const AddPatents = () => {
  const [facultyID, setFacultyID] = useState("");
  const [patentName, setPatentName] = useState("");
  const [patentType, setPatentType] = useState("");
  const [applicationNo, setApplicationNo] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [patentLink, setPatentLink] = useState("");
  const [patentDate, setPatentDate] = useState("");
  const [isVerified, setIsVerified] = useState(false);

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
            input_name="Application number"
            input_type="date"
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
            input_name="Published as proceedings"
            input_type="checkbox"
            input_value={image}
            set_input={setImage}
          />
          <InputCard
            input_name="Proceedings front page"
            input_type="text"
            input_value={patentLink}
            set_input={setPatentLink}
          />
          <InputCard
            input_name="Certificate"
            input_type="text"
            input_value={patentDate}
            set_input={setPatentDate}
          />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddPatents;
