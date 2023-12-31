import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchData, fetchRole } from "@/app/api/dbfunctions";
import MyConference from "./MyConference";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Conferences | Milestone Monitor',
}

const PageConference = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }
  let tableData= await fetchData("conferences", user.email as string);
  const facultyData = await fetchRole(user.email as string);

  return <MyConference data={tableData} facultyData={facultyData}/>;
};

export default PageConference;
