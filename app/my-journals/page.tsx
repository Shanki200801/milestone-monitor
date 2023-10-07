import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import React from "react";
import MyJournals from "./MyJournals";

const page = () => {
  unauthenticatedRedirector();
  return <MyJournals />;
};

export default page;
