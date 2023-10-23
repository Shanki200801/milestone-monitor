"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { updateUserWhenLoggedIn } from "@/app/api/dbfunctions";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// NOTE: Separate async functions like done below.
// DO NOT USE async when creating client components.

const Test = (user: any) => {

  // async function handled here, separated from component
  const handleUpdateUser = () => {
    updateUserWhenLoggedIn(user.user.email, "Ady", "4206969");
    // updateUserWhenLoggedIn(user.user.email, "Shashank", "4206969"); // uncomment and test
  };

  return (
    <section
      id="profile-wrapper"
      className={`md:p-10 ${bodyText.className} md:h-[85vh] bg-teal-500/40`}
    >

      <div>Test button to update faculty details (email, name, phone_no):</div>
      <div>Email is derived from login (primary key)</div>
      <button
        // pass function w ease and no errors 😼
        onClick={handleUpdateUser}
        className="h-fit w-fit p-4 bg-teal-400"
      >
        Update Details
      </button>
      <div>Go check the Supabase db: faculty (dev@gmail.com) </div>
    </section>
  );
};

export default Test;
