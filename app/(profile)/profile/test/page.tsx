import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Poppins } from "next/font/google";
import Account from "@/components/profile/Account";
import Socials from "@/components/profile/Socials";
// import Settings from "@/components/profile/Settings";
import Settings from "./Settings";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }
  
  return (
    <section>
      <section id="small-profile-wrapper" className="visible lg:hidden">
        <h1 className="break-words">
          Please view this page on a laptop/desktop view.
        </h1>
      </section>
      <section
        id="profile-wrapper"
        className={`lg:p-4 ${bodyText.className} grid grid-cols-2 grid-rows-2 gap-8 lg:h-[90vh] bg-teal-500/40`}
      >
        <Settings/>
      </section>
    </section>
  );
};

export default page;
