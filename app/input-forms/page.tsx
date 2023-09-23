"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AddConference from "./AddConference";
import AddWorkshops from "./AddWorkshops";
import AddPatents from "./AddPatents";
import AddJournals from "./AddJournals";
import LogoutButton from "@/components/LogoutButton";

export const page = () => {

  return (
    <div className="flex flex-col justify-center place-content-center">
      <Popover modal={true}>
        <PopoverTrigger asChild>
          <div className="p-4 bg-lime-600 text-black m-4">Conferences</div>
        </PopoverTrigger>
        <PopoverContent className="w-96 overflow-y-auto ">
          <AddConference />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <div className="p-4 bg-lime-600 text-black m-4">Workshops</div>
        </PopoverTrigger>
        <PopoverContent>
          <AddWorkshops />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <div className="p-4 bg-lime-600 text-black m-4">Patents</div>
        </PopoverTrigger>
        <PopoverContent>
          <AddPatents />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <div className="p-4 bg-lime-600 text-black m-4">Journals</div>
        </PopoverTrigger>
        <PopoverContent>
          <AddJournals />
        </PopoverContent>
      </Popover>
      <LogoutButton/>
    </div>
  );
};

export default page;