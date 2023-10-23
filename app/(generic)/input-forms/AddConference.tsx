import React, { useState } from "react";
import InputCard from "./InputCard";
import { addConference } from "../../api/dbfunctions";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AddConference = () => {
  const [paperTitle, setPaperTitle] = useState("");
  const [conferenceName, setConferenceName] = useState("");
  const [conferenceDate, setConferenceDate] = useState("");
  const [proceedings, setProceedings] = useState(false);
  const [facultyID, setFacultyID] = useState("");
  const [proceedingsFP, setProceedingsFP] = useState(false);
  const [certificate, setCertificate] = useState("");
  const [type, setType] = useState("");

  const addConferenceWrapper = async (
    e: React.MouseEvent,
    args: [string, string, string, boolean, string, boolean, string, string]
  ) => {
    e.preventDefault();
    await addConference(...args);
  };

  const supabase = createClientComponentClient();

  async function uploadImage(e: any) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("staff-media")
      .upload("conferenceMedia/" + facultyID + file.name, file);
    setCertificate("conferenceMedia/" + facultyID + file.name);
    console.log("file upload logs " + data);
    console.log("Error logs " + error?.message);
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
          {/* <InputCard
            input_name="Certificate"
            input_type="text"
            input_value={certificate}
            set_input={setCertificate}
          /> */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload certificate image
          </label>
          <input type="file" onChange={(e) => uploadImage(e)} />
          <input
            type="submit"
            onClick={(e) =>
              addConferenceWrapper(e, [
                paperTitle,
                conferenceName,
                conferenceDate,
                proceedings,
                facultyID,
                proceedingsFP,
                certificate,
                type,
              ])
            }
          />
        </div>
      </form>
    </div>
  );
};

export default AddConference;
