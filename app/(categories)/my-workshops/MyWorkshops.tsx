"use client";

import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import {
  fetchData,
  updateWorkshops,
  addWorkshops,
} from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddWorkshops from "@/app/(generic)/input-forms/AddWorkshops";
import NoData from "@/components/categories/NoData";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const tableFont = Montserrat({ weight: "400", subsets: ["latin"] });
const tableBodyFont = Inter({ weight: "400", subsets: ["latin"] });

const MyWorkshops = (props: any) => {
  const columns = ["Title", "Organizer", "Date", "Duration", "Approval", ""];

  return (
    <section>
      <CategoryHeader name="My Workshops" />
      <section className="grid grid-rows-2 lg:h-[80vh] gap-24">
        <section
          id="table-section"
          className="bg-[#cbfef8] m-3 mt-0 p-5 sm:rounded h-[45vh]"
        >
          {props.data.length == 0 ? (
            <NoData columns={columns} />
          ) : (
            <WorkshopTable data={props.data} columns={columns} />
          )}
        </section>
        <AddNewSec name="Workshop">
          <AddWorkshopModal />
        </AddNewSec>
      </section>
    </section>
  );
};

const WorkshopTable = (props: any) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded">
      <table
        className={`${tableFont.className} w-full text-sm text-left text-black`}
      >
        <thead className="text-lg text-black uppercase bg-[#60fbdf] tracking-wider">
          <tr>
            {props.columns.map((items: any, index: any) => {
              return (
                <th scope="col" className="px-6 py-3" key={index}>
                  {items}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item: any, index: any) => {
            return (
              <tr
                className={`${tableBodyFont.className} bg-[#29b7a6] border-b hover:bg-gray-50 tracking-normal`}
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.organized_by}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.number_of_days}</td>
                <td className="px-6 py-4">{item.is_verified}</td>
                <td className="px-6 py-4">
                  <FormElements data={item} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const AddWorkshopModal = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const propsModal = { openModal, setOpenModal };
  const [facultyID, setFacultyID] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [noDays, setNoDays] = useState(0);
  const [heldOrAttended, setHeldorAttended] = useState("Attended");
  const [organisedBy, setOrganisedBy] = useState("");

  const handleAddWorkshops = async () => {
    await addWorkshops(facultyID, title, date, type, noDays, organisedBy);
    window.location.reload();
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-28 h-28 cursor-pointer hover:w-[6.8rem] hover:h-[6.8rem]"
        onClick={() => propsModal.setOpenModal("form-elements")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <Modal
        show={propsModal.openModal === "form-elements"}
        size="xl"
        popup
        onClose={() => propsModal.setOpenModal(undefined)}
        className={`${tableFont.className}`}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Add new workshop
            </h3>

            <div>
              <div className="mb-2 block">
                <Label value="Faculty ID" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setFacultyID(e.target.value)}
                value={facultyID}
                required
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <Label value="Title" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Workshop Date" />
              </div>
              <TextInput
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Workshop Type" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Number of Days" />
              </div>
              <TextInput
                type="number"
                onChange={(e) => setNoDays(parseInt(e.target.value))}
                value={noDays}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Select if you held or attended the workshop" />
              </div>
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

            <div>
              <div className="mb-2 block">
                <Label value="Workshop organized by" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setOrganisedBy(e.target.value)}
                value={organisedBy}
                required
              />
            </div>

            <div className="flex justify-center">
              <Button onClick={handleAddWorkshops}>Update</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const FormElements = (props: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [date, setDate] = useState(props.data.date);
  const [type, setType] = useState(props.data.type);
  const [title, setTitle] = useState(props.data.title);
  const [noDays, setNoDays] = useState(props.data.number_of_days);
  // const [heldOrAttended, setHeldorAttended] = useState("Attended");
  // const [organisedBy, setOrganisedBy] = useState("");
  const propsModal = { openModal, setOpenModal };

  const handleConfUpdate = async () => {
    await updateWorkshops(
      date,
      type,
      title,
      noDays,
      props.data.is_verified,
      props.data.id
    );
    window.location.reload();
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => propsModal.setOpenModal("form-elements")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
      <Modal
        show={propsModal.openModal === "form-elements"}
        size="xl"
        popup
        onClose={() => propsModal.setOpenModal(undefined)}
        className={`${tableFont.className}`}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Edit submission
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="paper_title" value="Title" />
              </div>
              <TextInput
                id="paper_title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_date" value="Date" />
              </div>
              <TextInput
                id="conf_date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_type" value="Workshop Type" />
              </div>
              <TextInput
                id="conf_type"
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Number of days" />
              </div>
              <input
                type="text"
                onChange={(e) => setNoDays(e.target.value)}
                value={noDays}
                required
              />
            </div>
            <div className="flex justify-center">
              <Button onClick={handleConfUpdate}>Update</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyWorkshops;
