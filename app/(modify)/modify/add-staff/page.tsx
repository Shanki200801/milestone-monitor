import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddStaff from "./AddStaff";
import { fetchRole } from "@/app/api/dbfunctions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Add Staff | Milestone Monitor',
}

const AddStaffContainer = async () => {
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

  return <AddStaff />;
};

export default AddStaffContainer;
