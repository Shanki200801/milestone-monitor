import React from "react";
import { unauthenticatedRedirector } from "@/lib/unauthRedirect";
import Profile from "./Profile";

const page = () => {
  unauthenticatedRedirector();
  return <Profile />;
};

export default page;
