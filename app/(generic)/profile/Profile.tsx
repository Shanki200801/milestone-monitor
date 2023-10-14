"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Account from "@/components/profile/Account";
import { updateUserWhenLoggedIn } from "@/app/api/dbfunctions";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Profile = async (user: any) => {
  return (
    <section
      id="profile-wrapper"
      className={`md:p-10 ${bodyText.className} grid grid-cols-2 grid-rows-2 gap-8 md:h-[85vh] bg-teal-500/40`}
    >
      <h2 className="col-start-1 row-start-1 text-center pt-2 font-bold uppercase">
        Profile Details
      </h2>
      <Account />

      <div
        id="socials-wrapper"
        className="bg-teal-500/20 col-start-1 row-start-2 border border-transparent rounded md:mt-[15%]"
      >
        {/* <button
          onClick={() =>
            updateUserWhenLoggedIn(user.user.email, "new name", "123123")
          }
          className="h-12 w-18 absolute p-8 bg-slate-400"
        >
          Test btn
        </button> */}
        <ul className="flex flex-col justify-center gap-8 p-4 h-full w-full bg-teal-600/40 border border-transparent rounded">
          <li>Socials</li>
          <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
            <li>Name:</li>
            <li>[user.name]</li>
          </ul>
          <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
            <li>Department:</li>
            <li>[user.dept]</li>
          </ul>
          <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
            <li>Faculty:</li>
            <li>[user.Faculty]</li>
          </ul>
        </ul>
      </div>
      <div
        id="settings-wrapper"
        className="bg-teal-500/20 col-start-2 row-span-2 border border-transparent rounded"
      ></div>
    </section>
  );
};

export default Profile;
