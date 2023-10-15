import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MyPatents } from "./MyPatents";
import { fetchData } from "@/app/api/dbfunctions";

const PagePatent = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }

  let tableData= await fetchData("patents", user.email as string);

  return <MyPatents data={tableData}/>;
};

export default PagePatent;
