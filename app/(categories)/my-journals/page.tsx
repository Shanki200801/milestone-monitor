import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import React from "react";
import MyJournals from "./MyJournals";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchData, fetchRole } from "@/app/api/dbfunctions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Journals | Milestone Monitor',
}

const PageJournal = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }

  let tableData= await fetchData("journal_publications", user.email as string);
  const facultyData = await fetchRole(user.email as string);

  return <MyJournals  data={tableData} facultyData={facultyData}/>;
};

export default PageJournal;
