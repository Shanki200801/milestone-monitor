import "../globals.css";
import Image from "next/image";
import logoImg from "../../public/logo.webp";
import sjuLogo from "../../public/sju-logo.webp";
import { Poppins } from "next/font/google";
import Navbar from "@/components/nav/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchRole } from "../api/dbfunctions";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Milestone Monitor",
  description: "A cataloguing app",
};

const RootLayout = async ({
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
  
  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }else{
    //only hods and editors can access reports
    let userData = await fetchRole(user.email as string);
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
        {/* Navigation Bars (horizontal and vertical) */}
        <Navbar is_hod={hodBool} is_editor={editorBool}/>
        <main className="absolute top-1/2 inset-x-[2%] sm:right-0 sm:top-[20%] sm:left-[10%] md:top-[15%] lg:top-[10%] ">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
