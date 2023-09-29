import React, { useState } from "react";
import InputCard from "./InputCard";
import { addWorkshops } from "../api/dbfunctions";

const AddWorkshops = () => {
  const [facultyID, setFacultyID] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [noDays, setNoDays] = useState(0);
  const [heldOrAttended, setHeldorAttended] = useState("Attended");
  const [organisedBy, setOrganisedBy] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const addWorkshopsWrapper = async(e: React.MouseEvent, args: [string, string, string, string, number, string]) => {
    e.preventDefault();
    await addWorkshops(...args);
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
            input_name="Date"
            input_type="date"
            input_value={date}
            set_input={setDate}
          />
          <InputCard
            input_name="Workshop Type"
            input_type="text"
            input_value={type}
            set_input={setType}
          />
          <InputCard
            input_name="Title"
            input_type="text"
            input_value={title}
            set_input={setTitle}
          />
          <InputCard
            input_name="Number of days"
            input_type="number"
            input_value={noDays}
            set_input={setNoDays}
          />
          <label>Select if you held or attended the workshop</label>
          <div className="flex">
            <input
              type="radio"
              name="heldOrAttended"
              className="mx-4"
              value="Attended"
              checked={heldOrAttended === "Attended"}
              onChange={(e) => setHeldorAttended(e.target.value)}
            />
            Attended
            <input
              type="radio"
              name="heldOrAttended"
              value="Held"
              className="mx-4"
              checked={heldOrAttended === "Held"}
              onChange={(e) => setHeldorAttended(e.target.value)}
            />
            Organized
          </div>

          {heldOrAttended === "Attended" && (
            <InputCard
              input_name="Organized by"
              input_type="text"
              input_value={organisedBy}
              set_input={setOrganisedBy}
            />
          )}
          {heldOrAttended === "Held" && <></>}
          <input type="submit" onClick={(e) => addWorkshopsWrapper(e, [facultyID, date, type, title, noDays, organisedBy])} />
        </div>
      </form>
    </div>
  );
};

export default AddWorkshops;
