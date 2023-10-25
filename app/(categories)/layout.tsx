import { redirect } from "next/navigation";
import "../globals.css";
import NavTwo from "@/components/nav/NavTwo";
import { fetchRole } from "../api/dbfunctions";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const RootLayout= async({
  children,
}: {
  children: React.ReactNode;
}) => {

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let hodBool =true
  let editorBool = true;
  let userData;
  
  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }else{
    //only hods and editors can access reports
    userData = await fetchRole(user.email as string);

    //conditions to check if the user is an hod, editor or regular faculty
    if(userData.faculty_role!="hod"){
      hodBool = false;
      
    }
    if(userData.faculty_role!="editor"){
      editorBool = false;
    }

  }


  return (
    <html lang="en">
      <body>
        {/* Navigation Bar (vertical) */}
        <NavTwo is_hod={hodBool} is_editor={editorBool}/>
        <main className="absolute top-1/2 inset-x-[2%] sm:right-0 sm:top-[20%] sm:left-[10%] md:top-[15%] lg:top-[10%] ">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;

