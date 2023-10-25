'use client'

import { fetchRole, updateStaffGoogleScholar, updateStaffLinkedInURL, updateStaffName, updateStaffPW, updateStaffPhoneNumber, uploadProfilePicture } from "@/app/api/dbfunctions";
import React, { useEffect, useState } from "react";
import { Modal, FileInput, TextInput, Checkbox, Label, Button } from "flowbite-react";

type Settings = {
    [key: string]: string;
};

function formatFieldName(fieldName: string): string {
    return fieldName
      .split("_") // Split the field name by underscores
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize each part
      .join(" "); // Join the parts with spaces
  }

export default function Settings() {
  const [facultyId, setFacultyId] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal }
  const [settings, setSettings] = useState<Settings>
  
  ({


    
    // Add more fields/values here in the same format (formatter will change appearance in UI)
    name: "",
    linkedIn_url: "",	
    phone_number:"",
    google_scholar:"",
  });
  useEffect(() => {
    fetchRole("dummy").then((data) => {
      setUser(data);
      setSettings({
        name: data?.faculty_name,
        linkedIn_url: data?.faculty_linkedin,
        phone_number:data?.faculty_phone,
        google_scholar:data?.faculty_google_scholar,
      })
      setFacultyId(data?.faculty_id);
    })
  }, []);

  console.log("From settings component", user);


    // console.log(user,"user updated");

  useEffect(() => {

    updateStaffName(settings.name);
    
    
  }, [settings.name]);

  useEffect(() => {
    updateStaffPhoneNumber(settings.phone_number);
  }, [settings.phone_number]);


  useEffect(() => {
    updateStaffLinkedInURL(settings.linkedIn_url);
  },[settings.linkedIn_url]);

  useEffect(() => {
    updateStaffGoogleScholar(settings.google_scholar);
  }, [settings.google_scholar]);
  
  useEffect(() => {
    updateStaffPW(settings.password);
  }, [settings.password]);


  const [isEditing, setIsEditing] = useState<Record<string, boolean>>({
    name: false,
    phone_number: false,
    linkedIn_url: false,
    google_scholar: false,
    password: false,
    profile_picture: false, //media file so might have to handle differently
  });

  // Handles changes in input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    setSettings({ ...settings, [field]: value });
  };

  const handleEditClick = (field: string) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handlePwChange = () => {
    if(pw1 === pw2) {
      updateStaffPW(pw1);
      props.setOpenModal(undefined);
    }
    else{
      setPw1("");
      setPw2("");
      alert("Passwords do not match");
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = Array.from(e.currentTarget.files??[]);
    // const path = 
    uploadProfilePicture(facultyId, file);
  }

  const handleSaveClick = (field: string) => {
    // Assuming you want to save the value when the user clicks the save button.
    // You can add your logic here to save the updated value to your backend or perform other actions.
    // You can also add validation before saving the value.

    // After saving, set the editing mode back to false for the specific field.
    setIsEditing({ ...isEditing, [field]: false });
  };

  return (
    <div
      id="settings-wrapper"
      className="text-teal-950 flex flex-col justify-center items-center px-4 bg-teal-500/20 col-start-2 col-span-2 border border-transparent rounded h-[85vh]"
    >

      <div
        id="settings-items-wrapper"
        className="flex flex-col justify-center gap-10 w-full border border-transparent rounded"
      >
        {Object.keys(settings).map((field) => (
          <div
            key={field}
            className="w-full py-3 px-4 border border-transparent rounded-full bg-teal-700/40 flex flex-row gap-2 items-center justify-between hover:shadow-lg hover:shadow-teal-600/80"
          >
            <span className="flex gap-2 items-center">
              <p className="font-bold tracking-wide">{formatFieldName(field)}:</p>
              {isEditing[field] ? (
                <input
                  name={field}
                  className="caret-emerald-700 border-teal-800 font-bold text-teal-800/80 w-[15vw] h-fit border-2 rounded bg-teal-200 py-1 px-2"
                  value={settings[field]}
                  onChange={(e) => handleInputChange(e, field)}
                />
              ) : (
                <span className="font-bold text-teal-800/80 w-[15vw] h-fit border border-transparent rounded">
                  {settings[field]}
                </span>
              )}
            </span>

            <div
              className={`setting-edit-btn p-2 border border-transparent rounded-full bg-teal-200 hover:cursor-pointer ${isEditing[field] ? "hover:bg-teal-700" : "hover:bg-teal-700"} ${isEditing[field] ? "hover:text-teal-200" : "hover:text-teal-200"}`}
              onClick={() => {
                if (isEditing[field]) {
                  handleSaveClick(field);
                } else {
                  handleEditClick(field);
                }
              }}
            >
              {isEditing[field] ? (
                // Save icon when editing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                // Edit icon when not editing
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              )}
            </div>
          </div>
        ) 
        )}

<div className="w-full py-3 px-4 border border-transparent rounded-full bg-teal-700/40 flex flex-row gap-2 items-center justify-between hover:shadow-lg hover:shadow-teal-600/80" >
        
        <Label
          htmlFor="file"
          value="Upload Profile Picture" 
          className="font-bold text-md"
        />
      
        <FileInput onChange={handleFileChange}
          id="file"
        />

        </div>

        <div className="w-full flex place-items-center place-content-center" >
        

        

        <Button onClick={() => props.setOpenModal('form-elements')}>Reset Password</Button>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Update Password</h3>
            <div>
              <div className="mb-2 block">
                <Label value="New password" />
              </div>
              <TextInput id="newPassword" type="password" placeholder="********" value={pw1} onChange={(e) => setPw1(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Re-enter New Password" />
              </div>
              <TextInput id="verifyNewPassword" type="password" placeholder="********" value={pw2} onChange={(e) => setPw2(e.target.value)} required />
            </div>
            
            <div className="w-full">
              <Button onClick={handlePwChange}>Confirm Reset</Button>
            </div>            
            
          </div>
        </Modal.Body>
      </Modal>
        </div>

        

      </div>
    </div>
  );
}
