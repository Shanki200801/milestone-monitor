import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddStaff from "./AddStaff";
import { fetchRole } from "@/app/api/dbfunctions";

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
    if(userData.faculty_role!="hod" && userData.faculty_role!="editor"){
      redirect("/404");
    }
  }

  


  return <AddStaff />;
};

export default AddStaffContainer;
