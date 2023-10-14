import React from "react";
import { Alata } from "next/font/google";

const tableFont = Alata({weight: "400", subsets: ['latin'], })

const MyWorkshops = () => {
  return (
  <div>
    <section className="bg-[#cbfef8] m-3 p-5 sm:rounded min-h-[25rem]">
      <div className="overflow-x-auto shadow-md sm:rounded">
          <table className={`${tableFont.className} w-full text-sm text-left text-black`}>
              <thead className="text-lg text-black uppercase bg-[#60fbdf]">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Item Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                          College
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Approval
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-[#29b7a6] border-b hover:bg-gray-50">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          
                      </th>
                      <td className="px-6 py-4">

                      </td>
                      <td className="px-6 py-4">
                          
                      </td>
                      <td className="px-6 py-4">
                          
                      </td>
                      <td className="px-6 py-4">
                          
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </section>
    <section className={`${tableFont.className} bg-[#cbfef8] m-3 p-5 sm:rounded flex flex-col items-center justify-center`}>
      <p className="text-2xl">Add a new Workshop</p>
      <div className="flex justify-self-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-28 h-28">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </section>
  </div>
  );
};

export default MyWorkshops;
