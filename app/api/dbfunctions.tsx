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
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SERVICE_ROLE as string
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
      {
        faculty_id: faculty_id,
        date: date,
        type: type,
        title: title,
        number_of_days: number_of_days,
        organized_by: organized_by,
      },
    ])
    .select();
  console.log(error);
};

export const addJournals = async (
  faculty_id: string,
  paper_title: string,
  date_of_publication: string,
  journal_name: string,
  issn_number: string,
  indexed_in: string,
  link: string,
  upload_image: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("journal_publications")
    .insert([
      {
        faculty_id: faculty_id,
        paper_title: paper_title,
        journal_name: journal_name,
        issn_number: issn_number,
        month_and_year_of_publication: date_of_publication,
        indexed_in: indexed_in,
        link: link,
        upload_image: upload_image,
      },
    ])
    .select();
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
  console.log("error is " + error?.message);
};

export const fetchData =async (tableName:string, email:string) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();
  
  // fetches the user data of the user in session
  const { data:userData, error:userError } = await supabase.from('faculty').select().eq('faculty_email', user?.email);

  //fetches the data of the user using the faculty id of userData
  const {data:tableData, error:tableError} = await supabase.from(tableName).select().eq('faculty_id', (userData?userData[0].faculty_id: ""));

  return tableData;
}

export const updateConf = async(
  type: string,
  paper_title: string,
  conf_date: string,
  proceedings: boolean,
  conf_name: string,
  proceeding_fp: boolean,
  certificate: string,
  id:number,
  is_verified: string )=>{

  const supabase = createServerComponentClient({ cookies });

  if(is_verified.toLowerCase()=="pending"){
    const {error} = await supabase
  .from('conferences')
  .update(
    {paper_title:paper_title,
    conf_name:conf_name,
    conf_date:conf_date,
    proceedings:proceedings,
    certificate:certificate,
    proceeding_fp:proceeding_fp,})
  .eq('id', id);
  }else{
    const {error} = await supabase
  .from('conferences')
  .update(
    {paper_title:paper_title,
    conf_name:conf_name,
    conf_date:conf_date,
    proceedings:proceedings,
    certificate:certificate,
    proceeding_fp:proceeding_fp,
    is_verified: "Pending"})
  .eq('id', id);
  }

  
}

export const updateJournals = async(
  paper_title: string,
  date_of_publication: string,
  journal_name: string,
  issn_number: string,
  indexed_in: string,
  link: string,
  is_verified: string,
  id:number )=>{

  const supabase = createServerComponentClient({ cookies });

  if(is_verified.toLowerCase()=="pending"){
    const {error} = await supabase
  .from('journal_publications')
  .update(
    {
      paper_title: paper_title,
      journal_name: journal_name,
      issn_number: issn_number,
      month_and_year_of_publication: date_of_publication,
      indexed_in: indexed_in,
      link: link,
    })
  .eq('id', id);
  }else{
    const {error} = await supabase
  .from('journal_publications')
  .update(
    {
      paper_title: paper_title,
      journal_name: journal_name,
      issn_number: issn_number,
      month_and_year_of_publication: date_of_publication,
      indexed_in: indexed_in,
      link: link,
      is_verified: "Pending"})
  .eq('id', id);
  }

  
}

export const updatePatents = async(
  patent_name: string,
  patent_date: string,
  patent_type: string,
  application_no: string,
  status: string,
  patent_link: string,
  is_verified: string,
  id:number )=>{

  const supabase = createServerComponentClient({ cookies });

  if(is_verified.toLowerCase()=="pending"){
    const {error} = await supabase
  .from('patents')
  .update(
    {
      patent_name: patent_name,
      patent_date: patent_date,
      patent_type: patent_type,
      application_no: application_no,
      status: status,
      patent_link: patent_link,
    })
  .eq('id', id);
  }else{
    const {error} = await supabase
  .from('patents')
  .update(
    {
      patent_name: patent_name,
      patent_date: patent_date,
      patent_type: patent_type,
      application_no: application_no,
      status: status,
      patent_link: patent_link,
      is_verified: "Pending"})
  .eq('id', id);
  }

  
}

export const updateWorkshops = async(
  date: string,
  type: string,
  title: string,
  number_of_days: number,
  // organized_by: string,
  is_verified: string,
  id:number )=>{

  const supabase = createServerComponentClient({ cookies });

  if(is_verified.toLowerCase()=="pending"){
    const {error} = await supabase
  .from('fdp_workshop_refresher_course')
  .update(
    {
        date: date,
        type: type,
        title: title,
        number_of_days: number_of_days,
        // organized_by: organized_by,
    })
  .eq('id', id);
  }else{
    const {error} = await supabase
  .from('fdp_workshop_refresher_course')
  .update(
    {
        date: date,
        type: type,
        title: title,
        number_of_days: number_of_days,
        // organized_by: organized_by,
      is_verified: "Pending"})
  .eq('id', id);
  }

  
}
  
//have first argument as primary key ie the email which is not editable. All others update variables can go next add more args as needed
export const updateUserWhenLoggedIn = async (
  email: string | undefined,
  phone: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { error } = await supabase
    .from("faculty")
    .update({faculty_phone: phone })
    .eq("faculty_email", email);
  if (error) {
    console.log("Error from update user: ", error.message);
  }
};
