"use client";

import React, { useState } from "react";
import { Alata } from "next/font/google";
import { fetchData, updateWorkshops } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddWorkshops from "@/app/(generic)/input-forms/AddWorkshops";
import NoData from "@/components/categories/NoData";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const tableFont = Alata({weight: "400", subsets: ['latin'], });

const MyWorkshops = (props:any) => {

  const columns = ['Title', 'Organizer', 'Date', 'Duration', 'Approval', ''];

  return (
  <div>
    <CategoryHeader name="My Workshops"/>
    <section id="table-section" className="bg-[#cbfef8] m-3 p-5 sm:rounded min-h-[25rem]">
      {props.data.length==0? <NoData columns={columns}/>:<WorkshopTable data={props.data} columns={columns}/> }
    </section>
    <AddNewSec name="Workshop"><AddWorkshops/></AddNewSec>
  </div>
  );
};

const WorkshopTable = (props:any)=>{
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
                        {item.title}
                    </th>
                    <td className="px-6 py-4">
                      {item.organized_by}
                    </td>
                    <td className="px-6 py-4">
                        {item.date}
                    </td>
                    <td className="px-6 py-4">
                        {item.number_of_days}
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
  const [date, setDate] = useState(props.data.date);
  const [type, setType] = useState(props.data.type);
  const [title, setTitle] = useState(props.data.title);
  const [noDays, setNoDays] = useState(props.data.number_of_days);
  // const [heldOrAttended, setHeldorAttended] = useState("Attended");
  // const [organisedBy, setOrganisedBy] = useState("");
  const propsModal = { openModal, setOpenModal};

  const handleConfUpdate = async ()=>{
    await updateWorkshops(date,type, title, noDays, props.data.is_verified, props.data.id);
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
                <Label htmlFor="paper_title" value="Title" />
              </div>
              <TextInput id="paper_title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_date" value="Date" />
              </div>
              <TextInput id="conf_date" type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="conf_type" value="Workshop Type" />
              </div>
              <TextInput id="conf_type" type="text" onChange={(e) => setType(e.target.value)} value={type} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label  value="Number of days" />
              </div>
              <input type="text" onChange={(e) => setNoDays(e.target.value)} value={noDays} required />
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

export default MyWorkshops;