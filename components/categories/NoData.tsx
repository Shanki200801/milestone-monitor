import React from "react";
import { Montserrat } from "next/font/google";

const tableFont = Montserrat({weight: "400", subsets: ['latin'], });

export default function NoData(props:any){
    return(
      <div>
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
        </table>
        <div className={`${tableFont.className} min-h-full w-full text-center text-4xl p-28 `}>No entries found</div>  
      </div>
    )
  }