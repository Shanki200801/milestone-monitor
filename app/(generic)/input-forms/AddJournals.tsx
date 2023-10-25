import React, { useState } from "react";
import InputCard from "./InputCard";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { addJournals } from "../../api/dbfunctions";

const AddJournals = () => {
  const [facultyID, setFacultyID] = useState("");
  const [date, setDate] = useState("");
  const [paperTitle, setPaperTitle] = useState("");
  const [journalName, setJournalName] = useState("");
  const [issn, setIssn] = useState("");
  const [indexedIn, setIndexedIn] = useState("");
  const [link, setLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  const addJournalWrapper = async (
    e: React.MouseEvent,
    args: [string, string, string, string, string, string, string, string]
  ) => {
    e.preventDefault();
    await addJournals(...args);
  };

  const supabase = createClientComponentClient();
  // Do not use the below function. Use the one in DB functions
  // pass staff id and e.target.files[0] and date state to it as args to it

  // it also does not do the path setting to certificate state. Handle that out of the function
  async function uploadImage(e: any) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("staff-media")
      .upload("journalMedia/" + facultyID + file.name, file);
    setImageLink("journalMedia/" + facultyID + file.name);
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
            input_name="Paper title"
            input_type="text"
            input_value={paperTitle}
            set_input={setPaperTitle}
          />
          <InputCard
            input_name="Journal Name"
            input_type="text"
            input_value={journalName}
            set_input={setJournalName}
          />
          <InputCard
            input_name="Date published"
            input_type="date"
            input_value={date}
            set_input={setDate}
          />
          <InputCard
            input_name="ISSN Number"
            input_type="text"
            input_value={issn}
            set_input={setIssn}
          />
          <InputCard
            input_name="Indexed In"
            input_type="text"
            input_value={indexedIn}
            set_input={setIndexedIn}
          />
          <InputCard
            input_name="Link"
            input_type="text"
            input_value={link}
            set_input={setLink}
          />
          {/* <InputCard
            input_name="Upload Image"
            input_type="text"
            input_value={imageLink}
            set_input={setImageLink}
          /> */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload certificate image
          </label>
          <input type="file" onChange={(e) => uploadImage(e)} />
          <input
            type="submit"
            onClick={(e) =>
              addJournalWrapper(e, [
                facultyID,
                paperTitle,
                date,
                journalName,
                issn,
                indexedIn,
                link,
                imageLink,
              ])
            }
          />
        </div>
      </form>
    </div>
  );
};

export default AddJournals;
