"use client";

import React, { useState } from "react";
import { Urbanist, Inter } from "next/font/google";
import {
  addJournals,
  updateJournals,
  uploadJournalMedia,
} from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import NoData from "@/components/categories/NoData";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const tableFont = Urbanist({ weight: "400", subsets: ["latin"] });
const tableBodyFont = Inter({ weight: "400", subsets: ["latin"] });

const MyJournals = (props: any) => {
  const columns = [
    "Title",
    "Journal",
    "Publication Date",
    "Indexed In",
    "Approval",
    "",
  ];

  return (
    <section>
      <CategoryHeader name="My Journals" />
      <section className="grid grid-rows-2 lg:h-[80vh] gap-24">
        <section
          id="table-section"
          className="bg-[#cbfef8] m-3 mt-0 p-5 sm:rounded h-[45vh]"
        >
          {props.data.length == 0 ? (
            <NoData columns={columns} />
          ) : (
            <JournalTable data={props.data} columns={columns} />
          )}
        </section>
        <AddNewSec name="Journal">
          <AddJournalModal facultyData={props.facultyData} />
        </AddNewSec>
      </section>
    </section>
  );
};

const JournalTable = (props: any) => {
  return (
    <div className="overflow-x-auto shadow-md shadow-teal-800/50 sm:rounded">
      <table
        className={`${tableFont.className} w-full text-sm text-left`}
      >
        <thead className="text-lg text-teal-800 uppercase bg-teal-400/50 tracking-wider border border-transparent rounded">
          <tr>
            {props.columns.map((items: any, index: any) => {
              return (
                <th
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap"
                  key={index}
                >
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
                className={`${tableBodyFont.className} tracking-normal bg-teal-50/50 text-teal-900`}
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.paper_title}
                </th>
                <td className="px-6 py-4">{item.journal_name}</td>
                <td className="px-6 py-4">
                  {item.month_and_year_of_publication}
                </td>
                <td className="px-6 py-4">{item.indexed_in}</td>
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

const AddJournalModal = ({ facultyData }: { facultyData: any }) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const propsModal = { openModal, setOpenModal };
  const [facultyID, setFacultyID] = useState(facultyData.faculty_id);
  const [date, setDate] = useState("");
  const [paperTitle, setPaperTitle] = useState("");
  const [journalName, setJournalName] = useState("");
  const [issn, setIssn] = useState("");
  const [indexedIn, setIndexedIn] = useState("");
  const [link, setLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = Array.from(e.currentTarget.files ?? []);
    console.log(files);
    if (files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);
      console.log("files are ", formData.get("file"));
      uploadJournalMedia(facultyID, formData, date);
    }
  };

  const handleAddJournals = async () => {
    await addJournals(
      facultyID,
      paperTitle,
      journalName,
      date,
      issn,
      indexedIn,
      link,
      imageLink
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
              Add new journal
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
                readOnly
                disabled
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Paper Title" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setPaperTitle(e.target.value)}
                value={paperTitle}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Journal Name" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setJournalName(e.target.value)}
                value={journalName}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Date published" />
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
                <Label value="ISSN Number" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setIssn(e.target.value)}
                value={issn}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Indexed in" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setIndexedIn(e.target.value)}
                value={indexedIn}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Journal Link" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setLink(e.target.value)}
                value={link}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Journal Image" />
              </div>
              <TextInput
                type="file"
                onChange={handleFileChange}
                id="file"
                name="file"
              />
            </div>

            <div className="flex justify-center">
              <Button onClick={handleAddJournals}>Add Journal</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const FormElements = (props: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [date, setDate] = useState(props.data.month_and_year_of_publication);
  const [paperTitle, setPaperTitle] = useState(props.data.paper_title);
  const [journalName, setJournalName] = useState(props.data.journal_name);
  const [issn, setIssn] = useState(props.data.issn_number);
  const [indexedIn, setIndexedIn] = useState(props.data.indexed_in);
  const [link, setLink] = useState(props.data.link);
  const propsModal = { openModal, setOpenModal };

  const handleConfUpdate = async () => {
    await updateJournals(
      paperTitle,
      date,
      journalName,
      issn,
      indexedIn,
      link,
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
                <Label htmlFor="paper_title" value="Paper Title" />
              </div>
              <TextInput
                id="paper_title"
                type="text"
                onChange={(e) => setPaperTitle(e.target.value)}
                value={paperTitle}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_name" value="Journal Name" />
              </div>
              <TextInput
                id="conf_name"
                type="text"
                onChange={(e) => setJournalName(e.target.value)}
                value={journalName}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_date" value="Date Published" />
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
                <Label htmlFor="conf_type" value="ISSN Number" />
              </div>
              <TextInput
                id="conf_type"
                type="text"
                onChange={(e) => setIssn(e.target.value)}
                value={issn}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Indexed In" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setIndexedIn(e.target.value)}
                value={indexedIn}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cert" value="Link" />
              </div>
              <TextInput
                id="cert"
                type="text"
                onChange={(e) => setLink(e.target.value)}
                value={link}
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

export default MyJournals;
