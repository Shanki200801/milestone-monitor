import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import React from "react";
import { MyPatents } from "./MyPatents";

const page = () => {
  unauthenticatedRedirector();
  return <MyPatents />;
};

export default page;
