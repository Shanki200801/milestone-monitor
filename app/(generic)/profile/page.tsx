import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Poppins } from "next/font/google";
import Account from "@/components/profile/Account";

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
    <section
      id="profile-wrapper"
      className={`md:p-10 ${bodyText.className} grid grid-cols-2 grid-rows-2 gap-8 md:h-[85vh] bg-teal-500/40`}
    >
        <h2 className="col-start-1 row-start-1 text-center pt-2 font-bold uppercase">
          Profile Details
        </h2>
        <Account />

      <div
        id="socials-wrapper"
        className="bg-teal-500/20 col-start-1 row-start-2 border border-transparent rounded md:mt-[15%]"
      >
        <ul className="flex flex-col justify-center gap-8 p-4 h-full w-full bg-teal-600/40 border border-transparent rounded">
          <li>Socials</li>
          <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
            <li>Name:</li>
            <li>[user.name]</li>
          </ul>
          <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
            <li>Department:</li>
            <li>[user.dept]</li>
          </ul>
          <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
            <li>Faculty:</li>
            <li>[user.Faculty]</li>
          </ul>
        </ul>
      </div>
      <div
        id="settings-wrapper"
        className="bg-teal-500/20 col-start-2 row-span-2 border border-transparent rounded"
      ></div>
    </section>
  );
};

export default page;
