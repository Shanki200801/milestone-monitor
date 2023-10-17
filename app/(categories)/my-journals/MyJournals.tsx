"use client";

import React from "react";
import { Alata } from "next/font/google";
import { fetchData } from "@/app/api/dbfunctions";
import CategoryHeader from "@/components/categories/CategoryHeader";
import AddNewSec from "@/components/categories/AddNewSec";
import AddJournals from "@/app/(generic)/input-forms/AddJournals";
import NoData from "@/components/categories/NoData";

const tableFont = Alata({weight: "400", subsets: ['latin'], })

const MyJournals = (props:any) => {

  const columns = ['Title', 'Journal', 'Publication Date', 'Indexed In', 'Approval', ''];

  return(
    <div>
    <CategoryHeader name="My Journals"/>
    <section id="table-section" className="bg-[#cbfef8] m-3 p-5 sm:rounded min-h-[25rem]">
      {props.data.length==0? <NoData columns={columns}/>:<JournalTable data={props.data} columns={columns}/> }
    </section>
    <AddNewSec name="Journal"><AddJournals/></AddNewSec>
  </div>
  );
};

const JournalTable = (props:any)=>{
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
                      {item.journal_name}
                    </td>
                    <td className="px-6 py-4">
                        {item.month_and_year_of_publication}
                    </td>
                    <td className="px-6 py-4">
                        {item.indexed_in}
                    </td>
                    <td className="px-6 py-4">
                        {item.is_verified}
                    </td>
                    <td className="px-6 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </td>
                  </tr>
                  );
                  
                })}
                  
              </tbody>
          </table>
      </div>
  );
}

export default MyJournals;
