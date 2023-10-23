import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Urbanist } from "next/font/google";
import Settings from "@/components/settings/Settings";

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

const headerText = Urbanist({
  weight: "600",
  subsets: ["latin"],
})

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
        className={`invisible lg:visible lg:p-4 ${bodyText.className} grid grid-cols-4 justify-center items-center lg:h-[90vh] bg-teal-500/40`}
      >
        <Settings />
      </section>
    </section>
  );
};

export default page;
