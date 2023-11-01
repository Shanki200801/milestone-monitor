import React from "react";
import { Urbanist } from "next/font/google";

const headerFont = Urbanist({ weight: "400", subsets: ["latin"] });

export default function NoData(props: any) {
  return (
    <div className="">
      <table
        className={`${headerFont.className} w-full text-sm text-center text-black border border-teal-500/30 rounded`}
      >
        <thead className="text-lg text-teal-800 uppercase bg-teal-400/50 tracking-wide">
          <tr>
            {props.columns.map((items: any, index: any) => {
              return (
                <th scope="col" className="whitespace-nowrap p-4">
                  {items}
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
      <div
        className={`${headerFont.className} min-h-full w-full text-center text-3xl p-28 uppercase text-teal-800`}
      >
        No entries found
      </div>
    </div>
  );
}
