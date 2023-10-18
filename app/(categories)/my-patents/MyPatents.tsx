"use client";

import React from "react";
import { Alata } from "next/font/google";
import { fetchData } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddPatents from "@/app/(generic)/input-forms/AddPatents";
import NoData from "@/components/categories/NoData"

const tableFont = Alata({weight: "400", subsets: ['latin'], });

export const MyPatents = (props:any) => {

  const columns = ['Patent Name', 'Patent Type', 'Application Number', 'Status', 'Approval'];

  return(
    <div>
    <CategoryHeader name="My Patents"/>
    <section id="table-section" className="bg-[#cbfef8] m-3 p-5 sm:rounded min-h-[25rem]">
      {props.data.length==0? <NoData columns={columns}/>:<PatentTable data={props.data} columns={columns}/> }      
    </section>
    <AddNewSec name="Patent"><AddPatents/></AddNewSec>
  </div>
  );
};

const PatentTable = (props:any)=>{
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
                        {item.patent_name}
                    </th>
                    <td className="px-6 py-4">
                      {item.patent_type}
                    </td>
                    <td className="px-6 py-4">
                        {item.application_no}
                    </td>
                    <td className="px-6 py-4">
                        {item.status}
                    </td>
                    <td className="px-6 py-4">
                        {item.is_verified}
                    </td>
                  </tr>
                  );
                  
                })}
                  
              </tbody>
          </table>
      </div>
  );
}


