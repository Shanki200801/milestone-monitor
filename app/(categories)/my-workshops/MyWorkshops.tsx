import React from "react";
import { Alata } from "next/font/google";

const tableFont = Alata({weight: "400", subsets: ['latin'], })

const MyWorkshops = () => {
  return (
  <div>
    <div className="bg-[#cbfef8] m-3 p-5 sm:rounded">
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
    </div>
  </div>
  );
};

export default MyWorkshops;
