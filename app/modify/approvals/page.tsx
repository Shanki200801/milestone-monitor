import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import React from "react";
import Approval from "./Approval";

const page = () => {
  unauthenticatedRedirector();

  return <Approval />;
};

export default page;
