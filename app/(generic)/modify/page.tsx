import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Urbanist } from "next/font/google";
import { fetchRole } from "@/app/api/dbfunctions";

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

const headerText = Urbanist({
  weight: "600",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";
const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }else{
    let userData = await fetchRole(user.email as string);
    if(userData.faculty_role!="hod"){
      redirect("/404");
    }
  }

  return (
    <section>
      <section id="small-settings-wrapper" className="lg:hidden text-center">
        <h1 className="break-words">
          Please view this page on a laptop/desktop view.
        </h1>
      </section>
      <section
        id="settings-wrapper"
        className={`invisible lg:visible lg:p-4 ${bodyText.className} flex flex-col justify-center items-center lg:h-[90vh] bg-teal-500/40`}
      >
        <ul
          className={`${bodyText.className} w-fit text-teal-950 bg-teal-700/20 lg:px-16 lg:py-12 flex flex-row justify-center items-center gap-8 border border-transparent rounded uppercase tracking-wider`}
        >
          <a href="/modify/staff/add-staff">
            <li
              className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
            >
              Add Staff
            </li>
          </a>
          <a href="/modify/approvals">
            <li
              className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
            >
              Approvals
            </li>
          </a>
        </ul>
      </section>
    </section>
  );
};

export default page;
