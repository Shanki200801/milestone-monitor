"use server";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

//TODO: Test all the functions in this file

export const addStaff = async (
  name: string,
  staffID: string,
  department: string,
  role: string,
  phone: string,
  email: string,
  password: string
) => {
  //NOTE: sqiggly line can be ignored here, idk how to fix
  const supaAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SERVICE_ROLE
  );
  //pass a default pw in the args for this function
  const { data: d, error: e } = await supaAdmin.auth.admin.createUser({
    email: email,
    password: password,
    email_confirm: true,
  });
  if (e) {
    console.log("Error from create user: ", e.message);
    return null;
  }
  const supabase = createServerComponentClient({ cookies });

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

//the below function should be called on first login of the user by maybe checking if pw is default pw
export const updateStaffPW = async (email: string, password: string) => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    console.log("error from update pw " + error);
  }
};

export const addConference = async (
  type: string,
  paper_title: string,
  conf_date: string,
  proceedings: boolean,
  conf_name: string,
  proceeding_fp: boolean,
  certificate: string,
  faculty_id: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("conferences")
    .insert([
      {
        type: type,
        paper_title: paper_title,
        conf_name: conf_name,
        conf_date: conf_date,
        certificate: certificate,
        proceeding_fp: proceeding_fp,
        faculty_id: faculty_id,
      },
    ])
    .select();
  console.log(error);
};

export const addWorkshops = async (
  faculty_id: string,
  date: string,
  type: string,
  title: string,
  number_of_days: number,
  organized_by: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("fdp_workshop_refresher_course")
    .insert([
    { faculty_id: faculty_id, date: date, type: type, title: title, number_of_days: number_of_days, organized_by: organized_by},
       ])
    .select()
    console.log(error);
}

export const addJournals = async(faculty_id:string, paper_title:string, date_of_publication:string, journal_name:string, issn_number:string, indexed_in:string, link:string, upload_image:string)=>{
    const supabase = createServerComponentClient({cookies})
    const { data, error } = await supabase
    .from('journal_publications')
    .insert([
        {faculty_id: faculty_id, paper_title: paper_title, journal_name: journal_name, issn_number: issn_number, month_and_year_of_publication: date_of_publication, indexed_in: indexed_in, link: link, upload_image: upload_image},
    ])
    .select()
    console.log(error);
    
};

// export const addPatent = async(faculty_id:string, patent_name:string,patent_date:string, patent_type:string, application_no:string, status:string,image:string, patent_link:string)=>{
//     const supabase = createServerComponentClient({cookies})
//     const { data, error } = await supabase
//     .from('patents')
// export const addJournals = async (
//   faculty_id: string,
//   paper_title: string,
//   date_of_publication: string,
//   journal_name: string,
//   issn_number: string,
//   indexed_in: string,
//   link: string,
//   upload_image: string
// ) => {
//   const supabase = createServerComponentClient({ cookies });
//   console.log("add journal called. supabase created");
//   const { data, error } = await supabase
//     .from("journal_publications")
//     .insert([
//         {faculty_id: faculty_id, patent_name:patent_name, patent_date:patent_date, patent_type:patent_type, application_no:application_no, status:status, image:image, patent_link:patent_link},
//       {
//         faculty_id: faculty_id,
//         paper_title: paper_title,
//         journal_name: journal_name,
//         issn_number: issn_number,
//         month_and_year_of_publication: date_of_publication,
//         indexed_in: indexed_in,
//         link: link,
//         upload_image: upload_image,
//       },
//     ])
//     .select()
//     console.log(error);
    
//   console.log("error:" + error?.message);
//   console.log("data " + data);
// };

export const addPatent = async (
  faculty_id: string,
  patent_name: string,
  patent_date: string,
  patent_type: string,
  application_no: string,
  status: string,
  image: string,
  patent_link: string
  
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("patents").insert([
    {
      faculty_id: faculty_id,
      patent_name: patent_name,
      patent_date: patent_date,
      patent_type: patent_type,
      application_no: application_no,
      status: status,
      image: image,
      patent_link: patent_link,
      
    },
  ]);
  console.log("error is "+error?.message)
};
