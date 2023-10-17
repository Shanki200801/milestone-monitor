"use client";

import React, { useState } from "react";
import { Alata } from "next/font/google";
import { fetchData } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddConference from "@/app/(generic)/input-forms/AddConference";
import NoData from "@/components/categories/NoData";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const tableFont = Alata({weight: "400", subsets: ['latin'], });

const MyConference = (props:any) => {

  const columns = ['Title', 'Conference Name', 'Date', 'Proceedings', 'Approval', ''];

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
                        {item.proceedings}
                    </td>
                    <td className="px-6 py-4">
                        {item.is_verified}
                    </td>
                    <td className="px-6 py-4">
                      <FormElements/>
                    </td>
                  </tr>
                  );
                  
                })}
                  
              </tbody>
          </table>
      </div>
  );
}

const FormElements=()=>{
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => props.setOpenModal('form-elements')}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}




export default MyConference;
