"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Account from "@/components/dashboard/Account";
import { updateUserWhenLoggedIn } from "@/app/api/dbfunctions";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Test = async (user: any) => {
  return (
    <section
      id="profile-wrapper"
      className={`md:p-10 ${bodyText.className} md:h-[85vh] bg-teal-500/40`}
    >
      {/* <Account /> */}

      {/* 
      - Below function needs to take in variety of arguments 
      - Also this component throws errors: 
        " async/await functions not supported by Client components "
         So do not use them in client components thenks (will cause production/deployment headaches later)
         
      */}

      <div>Test button to update faculty details (email, name, phone_no):</div>
      <div>Email is derived from login (primary key)</div>
      <button
        onClick={() =>
          // updateUserWhenLoggedIn(user.user.email, "new name", "123123")
          updateUserWhenLoggedIn(user.user.email, "Shashank", "4206969")
        }
        className="h-fit w-fit p-4 bg-teal-400"
      >
        Update Details
      </button>
      <div>Go check the Supabase db: faculty (dev@gmail.com) </div>
    </section>
  );
};

export default Test;
