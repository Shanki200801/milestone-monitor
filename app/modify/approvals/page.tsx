import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Approval from "./Approval";
import {
  PendingData,
  PendingConference,
  PendingJournal,
  PendingWorkshop,
  PendingPatent,
} from "./types";
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

  //get all pending conferences
  const { data: conference } = await supabase
    .from("conferences")
    .select()
    .eq("is_verified", "PENDING");

  //get all pending journals
  const { data: journal } = await supabase
    .from("journal_publications")
    .select()
    .eq("is_verified", "PENDING");

  //get all pending workshops
  const { data: workshop } = await supabase
    .from("fdp_workshop_refresher_course")
    .select()
    .eq("is_verified", "PENDING");

  //get all pending patents
  const { data: patent } = await supabase
    .from("patents")
    .select()
    .eq("is_verified", "PENDING");

  const pending_objects = {
    pending_conferences: conference as PendingConference[],
    pending_journal: journal as PendingJournal[],
    pending_workshop: workshop as PendingWorkshop[],
    pending_patent: patent as PendingPatent[],
  };

  // console.log("printing data from page", pending_objects);

  return <Approval pending_data={pending_objects} />;
};

export default page;
