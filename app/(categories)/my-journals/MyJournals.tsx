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

  const columns = ['Title', 'Journal', 'Publication Date', 'Indexed In', 'Approval'];

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
                  </tr>
                  );
                  
                })}
                  
              </tbody>
          </table>
      </div>
  );
}

export default MyJournals;
