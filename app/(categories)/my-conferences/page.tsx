import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import React from "react";
import MyConference from "./MyConference";

const page = () => {
  unauthenticatedRedirector();
  return <MyConference />;
};

export default page;
