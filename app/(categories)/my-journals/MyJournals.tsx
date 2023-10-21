"use client";

import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import { fetchData, updateJournals } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddJournals from "@/app/(generic)/input-forms/AddJournals";
import NoData from "@/components/categories/NoData";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const tableFont = Montserrat({ weight: "400", subsets: ["latin"] });
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
    <div>
      <CategoryHeader name="My Journals" />
      <section
        id="table-section"
        className="bg-[#cbfef8] m-3 p-5 sm:rounded min-h-[25rem]"
      >
        {props.data.length == 0 ? (
          <NoData columns={columns} />
        ) : (
          <JournalTable data={props.data} columns={columns} />
        )}
      </section>
      <AddNewSec name="Journal">
        <AddJournals />
      </AddNewSec>
    </div>
  );
};

const JournalTable = (props: any) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded">
      <table
        className={`${tableFont.className} w-full text-sm text-left text-black`}
      >
        <thead className="text-lg text-black uppercase bg-[#60fbdf] tracking-wider">
          <tr>
            {props.columns.map((items: any, index: any) => {
              return (
                <th scope="col" className="px-6 py-3">
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
