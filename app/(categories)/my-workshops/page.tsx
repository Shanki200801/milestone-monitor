import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import MyWorkshops from "./MyWorkshops";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchData, fetchRole } from "@/app/api/dbfunctions";

const PageWorkshop = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }
  let tableData= await fetchData("fdp_workshop_refresher_course", user.email as string);
  const facultyData = await fetchRole(user.email as string);

  return <MyWorkshops data={tableData} facultyData={facultyData}/>;
};

export default PageWorkshop;
