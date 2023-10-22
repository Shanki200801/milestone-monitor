"use client";

import React, { use, useState } from "react";
import { Alata } from "next/font/google";
import { fetchData, updateConf } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddConference from "@/app/(generic)/input-forms/AddConference";
import NoData from "@/components/categories/NoData";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRouter } from "next/navigation";

const tableFont = Alata({weight: "400", subsets: ['latin'], });

const MyConference = (props:any) => {

  const columns = ['Title', 'Conference Name', 'Date', 'Conference Type', 'Approval', ''];
  

  return(
    <div>
    <CategoryHeader name="My Conferences"/>
    <section id="table-section" className="bg-[#cbfef8] m-3 p-5 sm:rounded min-h-[25rem]">
      {props.data.length==0? <NoData columns={columns}/>:<ConferenceTable data={props.data} columns={columns}/> }
    </section>
    <AddNewSec name="Conference"><AddConference/></AddNewSec>
  </div>
  );
};

const ConferenceTable = (props:any)=>{
  return(
    <div className="overflow-x-auto shadow-md sm:rounded">
          <table className={`${tableFont.className} w-full text-sm text-left text-black`}>
              <thead className="text-lg text-black uppercase bg-[#60fbdf]">
              <tr>
                {props.columns.map((items:any, index:any)=>{
                  return(
                    <th scope="col" className="px-6 py-3">
                          {items  }
                      </th>
                  );
                })}
                  </tr>
              </thead>
              <tbody>
                {props.data.map((item:any, index:any)=>{
                  return(
                    <tr className="bg-[#29b7a6] border-b hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        {item.paper_title}
                    </th>
                    <td className="px-6 py-4">
                      {item.conf_name}
                    </td>
                    <td className="px-6 py-4">
                        {item.conf_date}
                    </td>
                    <td className="px-6 py-4">
                        {item.type}
                    </td>
                    <td className="px-6 py-4">
                        {item.is_verified}
                    </td>
                    <td className="px-6 py-4">
                      <FormElements data={item}/>
                    </td>
                  </tr>
                  );
                  
                })}
                  
              </tbody>
          </table>
      </div>
  );
}

const FormElements=(props:any)=>{
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [title, setTitle] = useState(props.data.paper_title);
  const [confName, setConfName] = useState(props.data.conf_name);
  const [confDate, setConfDate] = useState(props.data.conf_date);
  const [certificate, setCertificate] = useState(props.data.certificate);
  const [proceedingFp, setProceedingFp] = useState(props.data.proceeding_fp);
  const [proceeding, setProceeding] = useState(props.data.proceedings);
  const [type, setType] = useState("");
  const propsModal = { openModal, setOpenModal};
  const router = useRouter();

  const handleConfUpdate = async ()=>{
    await updateConf(type, title, confDate, proceeding, confName, proceedingFp, certificate, props.data.id, props.data.is_verified);
    window.location.reload();
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => propsModal.setOpenModal('form-elements')}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
      <Modal show={propsModal.openModal === 'form-elements'} size="xl" popup onClose={() => propsModal.setOpenModal(undefined)} className={`${tableFont.className}`}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Edit submission</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="paper_title" value="Paper Title" />
              </div>
              <TextInput id="paper_title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_name" value="Conference Name" />
              </div>
              <TextInput id="conf_name" type="text" onChange={(e) => setConfName(e.target.value)} value={confName} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_date" value="Conference Date" />
              </div>
              <TextInput id="conf_date" type="date" onChange={(e) => setConfDate(e.target.value)} value={confDate } required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_type" value="Conference Type" />
              </div>
              <TextInput id="conf_type" type="text" onChange={(e) => setType(e.target.value)} value={type} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label  value="Published as proceedings" />
              </div>
              <input type="checkbox" onChange={(e) => setProceeding(e.target.value)} value={proceeding} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cert" value="Certificate" />
              </div>
              <TextInput id="cert" type="text" onChange={(e) => setCertificate(e.target.value)} value={certificate} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="proceeding_fp" value="Proceeding Front Page" />
              </div>
              <TextInput id="proceeding_fp" type="text" onChange={(e) => setProceedingFp(e.target.value)} value={proceedingFp} required />
            </div>
            <div className="flex justify-center">
              <Button onClick={handleConfUpdate}>Update</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}




export default MyConference;