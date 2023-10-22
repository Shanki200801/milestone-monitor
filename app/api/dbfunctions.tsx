"use server";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import Image from "next/image";
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


export async function conferenceQuery(
  filterByDateRange: null | boolean = null,
  start_date: null | string = "2001-01-01",
  end_date: null | string = new Date().toJSON().slice(0, 10),
  filterByType: null | boolean = null,
  type: null | string = null,
  filterByVerified: null | boolean=null,
  verified: null | string = "PENDING"
) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  if (filterByDateRange) {
    const { data: conferences } = await supabase
      .from("conferences")
      .select()
      .gte("conf_date", start_date)
      .lte("conf_date", end_date);

    return conferences;
  }

  if (filterByType) {
    const { data: conferences } = await supabase
      .from("conferences")
      .select()
      .eq("type", type);

    return conferences;
  }

  if (filterByVerified) {
    const { data: conferences } = await supabase
      .from("conferences")
      .select()
      .eq("is_verified", verified);

    return conferences;
  }
}

export async function fdpQuery(
  filterByDateRange: null | boolean = null,
  start_date: null | string = "2001-01-01",
  end_date: null | string = new Date().toJSON().slice(0, 10),
  filterByType: null | boolean = null,
  type: null | string = null,
  filterByNumberOfDays: null | boolean = null,
  noOfDays: null | number = 0,
  filterByTitle: null | boolean = null,
  title: null | string = "",
  filterByOrganizedBy: null | boolean = null,
  organizedBy: null | string = "",
  filterByVerified: null | boolean = null,
  verified: null | string = "PENDING"
) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  if (filterByDateRange) {
    const { data: fdp_workshop_refresher_courses } = await supabase
      .from("fdp_workshop_refresher_course")
      .select()
      .gte("date", start_date)
      .lte("date", end_date);
    return fdp_workshop_refresher_courses;
  }

  if (filterByType) {
    const { data: fdp_workshop_refresher_courses } = await supabase
      .from("fdp_workshop_refresher_course")
      .select()
      .eq("type", type);
    return fdp_workshop_refresher_courses;
  }

  if (filterByNumberOfDays) {
    const { data: fdp_workshop_refresher_courses } = await supabase
      .from("fdp_workshop_refresher_course")
      .select()
      .eq("number_of_days", noOfDays);
    return fdp_workshop_refresher_courses;
  }

  if (filterByTitle) {
    const { data: fdp_workshop_refresher_courses } = await supabase
      .from("fdp_workshop_refresher_course")
      .select()
      .eq("title", title);
    return fdp_workshop_refresher_courses;
  }

  if (filterByOrganizedBy) {
    const { data: fdp_workshop_refresher_courses } = await supabase
      .from("fdp_workshop_refresher_course")
      .select()
      .eq("organized_by", organizedBy);
    return fdp_workshop_refresher_courses;
  }

  if (filterByVerified) {
    const { data: fdp_workshop_refresher_courses } = await supabase
      .from("fdp_workshop_refresher_course")
      .select()
      .eq("is_verified", verified);
    return fdp_workshop_refresher_courses;
  }
}


export async function journalQuery(
  filterByDateRange: null | boolean = null,
  start_date: null | string = "2001-01-01",
  end_date: null | string = new Date().toJSON().slice(0, 10),
  filterByName: null | boolean = null,  // Journal name
  name: null | string = null,
  filterByIndexedIn: null | boolean = null,
  indexedIn: null | string = "",
  filterByTitle: null | boolean = null, //Paper title
  title: null | string = "",
  filterByVerified: null | boolean = null,
  verified: null | string = "PENDING"
) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  if (filterByDateRange) {
    const { data: journals } = await supabase
      .from("journal_publications")
      .select()
      .gte("date", start_date)
      .lte("date", end_date);
    return journals;
  }

  if (filterByName) {
    const { data: journals } = await supabase
      .from("journal_publications")
      .select()
      .eq("type", name);
    return journals;
  }

  if (filterByIndexedIn) {
    const { data: journals } = await supabase
      .from("journal_publications")
      .select()
      .eq("number_of_days", indexedIn);
    return journals;
  }

  if (filterByTitle) {
    const { data: journals } = await supabase
      .from("journal_publications")
      .select()
      .eq("title", title);
    return journals;
  }

  if (filterByVerified) {
    const { data: journals } = await supabase
      .from("journal_publications")
      .select()
      .eq("is_verified", verified);
    return journals;
  }
}


export async function patentsQuery(
  filterByDateRange: null | boolean = null,
  start_date: null | string = "2001-01-01",
  end_date: null | string = new Date().toJSON().slice(0, 10),
  filterByName: null | boolean = null,  // Patent name
  name: null | string = null,
  filterByType: null | boolean = null,
  type: null | string = null,
  filterByStatus: null | boolean = null,
  status: null | string = "",
  filterByApplicationNo: null | boolean = null,
  applicationNo: null | string = "",	
  filterByIndexedIn: null | boolean = null,
  indexedIn: null | string = "",
  filterByTitle: null | boolean = null, //Paper title
  title: null | string = "",
  filterByVerified: null | boolean = null,
  verified: null | string = "PENDING"
) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  if (filterByDateRange) {
    const { data: patents } = await supabase
      .from("patents")
      .select()
      .gte("date", start_date)
      .lte("date", end_date);
      return patents;

  }

  if (filterByName) {
    const { data: patents } = await supabase
      .from("patents")
      .select()
      .eq("type", name);
    return patents;
  }

  if (filterByType) {
    const { data: patents } = await supabase
    .from("patents")
    .select()
    .eq("patent_type", type);	
    return patents;
  }

  if (filterByStatus) {
    const { data: patents } = await supabase
    .from("patents")
    .select()
    .eq("status", status);	
    return patents;
  }

  if (filterByApplicationNo) {
    const { data: patents } = await supabase
    .from("patents")
    .select()
    .eq("application_no", applicationNo);	
    return patents;
  }

  if (filterByIndexedIn) {
    const { data: patents } = await supabase
      .from("patents")
      .select()
      .eq("number_of_days", indexedIn);
    return patents;
  }

  if (filterByTitle) {
    const { data: patents } = await supabase
      .from("patents")
      .select()
      .eq("title", title);
    return patents;
  }

  if (filterByVerified) {
    const { data: patents } = await supabase
      .from("patents")
      .select()
      .eq("is_verified", verified);
    return patents;
  }
}

