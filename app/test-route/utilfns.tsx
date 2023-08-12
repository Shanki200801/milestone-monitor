"use server";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

//NOTE: This file can be removed

export const create = async (email: string) => {
  const supabase = createServerComponentClient({ cookies });
  const supaAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SERVICE_ROLE
  );

  const { data, error } = await supaAdmin.auth.admin.createUser({
    email: email,
    password: "magis123", //default password
    email_confirm: true,
  });

  if (error) {
    console.log("Error from create user: ", error.message);
    return null;
  }
  console.log(data);
  return data;
};
export const addStaffData = async (
  name: string,
  staffID: string,
  department: string,
  role: string,
  phone: string,
  email: string,
  password: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: d, error: e } = await supabase.auth.admin.createUser({
    email: email,
    email_confirm: true,
  });

  const { data, error } = await supabase
    .from("faculty")
    .insert([
      {
        faculty_id: staffID,
        faculty_name: name,
        faculty_department: department,
        faculty_role: role,
        faculty_phone: phone,
        faculty_email: email,
      },
    ])
    .select();

  console.log("faculty res " + data);
};
