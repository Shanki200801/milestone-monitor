"use client";

import React, { use, useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import { fetchData, updateConf, addConference } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddConference from "@/app/(generic)/input-forms/AddConference";
import NoData from "@/components/categories/NoData";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";

const tableFont = Montserrat({ weight: "400", subsets: ["latin"] });
const tableBodyFont = Inter({ weight: "400", subsets: ["latin"] });

const MyConference = (props: any) => {
  const columns = [
    "Title",
    "Conference Name",
    "Date",
    "Conference Type",
    "Approval",
    "",
  ];

  return (
    <section className="lg:h-[90vh]">
      <CategoryHeader name="My Conferences" />
      <section className="grid grid-rows-2 lg:h-[80vh] gap-24">
        <section
          id="table-section"
          className="bg-[#cbfef8] m-3 mt-0 p-5 sm:rounded h-[45vh]"
        >
          {props.data.length == 0 ? (
            <NoData columns={columns} />
          ) : (
            <ConferenceTable data={props.data} columns={columns} />
          )}
        </section>
        <AddNewSec name="Conference">
          <AddConferenceModal />
        </AddNewSec>
      </section>
    </section>
  );
};

const ConferenceTable = (props: any) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded">
      <table
        className={`${tableFont.className} w-full text-sm text-left text-black`}
      >
        <thead className="text-lg text-black uppercase bg-[#60fbdf] tracking-wider ">
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
                  {item.paper_title}
                </th>
                <td className="px-6 py-4">{item.conf_name}</td>
                <td className="px-6 py-4">{item.conf_date}</td>
                <td className="px-6 py-4">{item.type}</td>
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

const AddConferenceModal = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const propsModal = { openModal, setOpenModal };
  const [paperTitle, setPaperTitle] = useState("");
  const [conferenceName, setConferenceName] = useState("");
  const [conferenceDate, setConferenceDate] = useState("");
  const [proceedings, setProceedings] = useState(false);
  const [facultyID, setFacultyID] = useState("");
  const [proceedingsFP, setProceedingsFP] = useState("");
  const [certificate, setCertificate] = useState("");
  const [type, setType] = useState("");


  const handleAddConference = async () => {
    await addConference(
    facultyID,
    paperTitle,
    conferenceName,
    conferenceDate,
    type,
    proceedings,
    proceedingsFP,
    certificate,
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
              Add new conference
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
                <Label value="Conference Name" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setConferenceName(e.target.value)}
                value={conferenceName}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Conference Date" />
              </div>
              <TextInput
                type="date"
                onChange={(e) => setConferenceDate(e.target.value)}
                value={conferenceDate}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Conference Type" />
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
                <Label value="Published as proceedings" />
              </div>
              <input
                type="checkbox"
                onChange={() => setProceedings(!proceedings)}
                checked={proceedings}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Proceedings Front Page" />
              </div>
              <TextInput
                type="text"
                onChange={(e) => setProceedingsFP(e.target.value)}
                value={proceedingsFP}
                required
              />
            </div>

            <div className="flex justify-center">
              <Button onClick={handleAddConference}>Update</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const FormElements = (props: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [title, setTitle] = useState(props.data.paper_title);
  const [confName, setConfName] = useState(props.data.conf_name);
  const [confDate, setConfDate] = useState(props.data.conf_date);
  const [certificate, setCertificate] = useState(props.data.certificate);
  const [proceedingFp, setProceedingFp] = useState(props.data.proceeding_fp);
  const [proceeding, setProceeding] = useState(props.data.proceedings);
  const [type, setType] = useState("");
  const propsModal = { openModal, setOpenModal };
  const router = useRouter();

  const handleConfUpdate = async () => {
    await updateConf(
      type,
      title,
      confDate,
      proceeding,
      confName,
      proceedingFp,
      certificate,
      props.data.id,
      props.data.is_verified
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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_name" value="Conference Name" />
              </div>
              <TextInput
                id="conf_name"
                type="text"
                onChange={(e) => setConfName(e.target.value)}
                value={confName}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_date" value="Conference Date" />
              </div>
              <TextInput
                id="conf_date"
                type="date"
                onChange={(e) => setConfDate(e.target.value)}
                value={confDate}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_type" value="Conference Type" />
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
                <Label value="Published as proceedings" />
              </div>
              <input
                type="checkbox"
                onChange={(e) => setProceeding(e.target.value)}
                value={proceeding}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cert" value="Certificate" />
              </div>
              <TextInput
                id="cert"
                type="text"
                onChange={(e) => setCertificate(e.target.value)}
                value={certificate}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="proceeding_fp" value="Proceeding Front Page" />
              </div>
              <TextInput
                id="proceeding_fp"
                type="text"
                onChange={(e) => setProceedingFp(e.target.value)}
                value={proceedingFp}
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

export default MyConference;
