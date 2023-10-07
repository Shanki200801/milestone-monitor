import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import MyWorkshops from "./MyWorkshops";

const page = () => {
  unauthenticatedRedirector();
  return <MyWorkshops />;
};

export default page;
