import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import ReportPage from "./ReportPage";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchRole } from "@/app/api/dbfunctions";

const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //get current user detals
  const { data: curr_user, error: user_err } = await supabase
    .from("faculty")
    .select("*")
    .eq("faculty_email", user?.email);
  if (user_err) {
    console.log("user_err", user_err);
  }
  console.log("curr_user", curr_user);
  // get all staff details who belong to same department as current user
  let staff_details: any[] | null = [];
  if (curr_user) {
    const { data: staff, error: staff_err } = await supabase
      .from("faculty")
      .select("*")
      .eq("faculty_department", curr_user[0].faculty_department);
    staff_details = staff;
    if (staff_err) {
      console.log("staff_err", staff_err);
    }
  }

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }else{
    //only hods and editors can access reports
    let userData = await fetchRole(user.email as string);
    if(userData.faculty_role!="hod" && userData.faculty_role!="editor"){
      redirect("/404");
    }
  }


  return <ReportPage staff_details={staff_details} />;
};

export default page;
