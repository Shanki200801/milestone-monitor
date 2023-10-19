'use client'

import React, { useState } from "react";

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
  const [settings, setSettings] = useState<Settings>({
    phone_number: "[empty]",
    google_scholar: "[empty]",
    linkedin_link: "[empty]",
    // Add more fields/values here in the same format (formatter will change appearance in UI)
    setting_4: "[empty]",
    setting_5: "[empty]",
    setting_6: "[empty]",
    setting_7: "[empty]",
  });

  const [isEditing, setIsEditing] = useState<Record<string, boolean>>({
    phone_number: false,
    google_scholar: false,
    linkedin_link: false,
  });

  // Handles changes in input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    setSettings({ ...settings, [field]: value });
  };

  const handleEditClick = (field: string) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

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
      className="text-teal-950 flex flex-col justify-center p-4 bg-teal-500/20 col-start-1 row-start-1 row-span-2 border border-transparent rounded h-[85vh]"
    >
      <h2 className="text-center font-bold uppercase lg:text-2xl">SETTINGS</h2>

      <div
        id="settings-items-wrapper"
        className="flex flex-col justify-center gap-6 p-4 w-full border border-transparent rounded"
      >
        {Object.keys(settings).map((field) => (
          <div
            key={field}
            className="w-full py-2 px-4 border border-transparent rounded-full bg-teal-700/40 flex flex-row gap-2 items-center justify-between hover:shadow-lg hover:shadow-teal-600/80"
          >
            <span className="flex gap-2 items-center">
              <p className="font-bold">{formatFieldName(field)}:</p>
              {isEditing[field] ? (
                <input
                  name={field}
                  className="w-[15vw] h-fit border-2 border-teal-900 rounded bg-teal-200 py-1 px-2"
                  value={settings[field]}
                  onChange={(e) => handleInputChange(e, field)}
                />
              ) : (
                <span className="w-[15vw] h-fit border border-transparent rounded">
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
        ))}
      </div>
    </div>
  );
}
