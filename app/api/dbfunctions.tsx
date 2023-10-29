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
export const updateStaffPW = async (password: string) => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    console.log("error from update pw " + error);
  }
};

export const updateStaffName = async (name: string) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("faculty")
    .update({
      faculty_name: name,
    })
    .eq("faculty_email", user?.email);

  if (error) {
    console.log("error" + error);
  }
};

export const updateStaffPhoneNumber = async (phNo: string) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("faculty")
    .update({
      faculty_phone: phNo,
    })
    .eq("faculty_email", user?.email);

  if (error) {
    console.log("error" + error);
  }
};

export const updateStaffLinkedInURL = async (url: string) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("faculty")
    .update({
      faculty_linkedin: url,
    })
    .eq("faculty_email", user?.email);

  if (error) {
    console.log("error" + error);
  }
};

export const updateStaffGoogleScholar = async (google_scholar: string) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("faculty")
    .update({
      faculty_google_scholar: google_scholar,
    })
    .eq("faculty_email", user?.email);

  if (error) {
    console.log("error " + error);
  }
};

export const addConference = async (
  faculty_id: string,
  paper_title: string,
  conf_name: string,
  conf_date: string,
  type: string,
  proceedings: boolean,
  proceeding_fp: string,
  certificate: string,
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("conferences")
    .insert([
      {
        faculty_id: faculty_id,
        paper_title: paper_title,
        conf_name: conf_name,
        conf_date: conf_date,
        type: type,
        proceedings: proceedings,
        proceeding_fp: proceeding_fp,
        certificate: certificate,
      },
    ])
    .select();
  console.log(error);
};

export const addWorkshops = async (
  faculty_id: string,
  title: string,
  date: string,
  type: string,
  number_of_days: number,
  organized_by: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("fdp_workshop_refresher_course")
    .insert([
      {
        faculty_id: faculty_id,
        title: title,
        date: date,
        type: type,
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
  journal_name: string,
  date_of_publication: string,
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
        month_and_year_of_publication: date_of_publication,
        issn_number: issn_number,
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
  patent_link: string,
  image: string,
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
      patent_link: patent_link,
      image: image,
    },
  ]);
  console.log("error is " + error?.message);
};

//have first argument as primary key ie the email which is not editable. All others update variables can go next add more args as needed
export const updateUserWhenLoggedIn = async (
  email: string | undefined,
  name: string,
  phone: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { error } = await supabase
    .from("faculty")
    .update({ faculty_name: name, faculty_phone: phone })
    .eq("faculty_email", email);
  if (error) {
    console.log("Error from update user: ", error.message);
  }
};

export const updateUserPhone = async (
  email: string | undefined,
  phone: string
) => {
  const supabase = createServerComponentClient({ cookies });
  const { error } = await supabase
    .from("faculty")
    .update({ faculty_phone: phone })
    .eq("faculty_email", email);
  if (error) {
    console.log("Error from update user: ", error.message);
  }
};

export const getDataForReport = async (
  start_date: string = "2001-01-01",
  end_date: string = new Date().toJSON().slice(0, 10),
  filterType: string = "all",
  title: string = "",
  status: string = "PENDING",
  faculty_id: string | null = "",
  faculty_name: string | null = ""
) => {
  interface TableName {
    [key: string]: string;
    Conferences: string;
    Patents: string;
    Workshops: string;
    Journals: string;
  }
  const table_name: TableName = {
    Conferences: "conferences",
    Patents: "patents",
    Workshops: "fdp_workshop_refresher_course",
    Journals: "journal_publications",
  };
  const supabase = createServerComponentClient({ cookies });
  // console.log("Control inside getDataForReport");
  const { data: conference, error: e_conf } = await supabase
    .from("conferences")
    .select(`*`)
    .filter("conf_date", "gte", start_date)
    .filter("conf_date", "lte", end_date)
    .filter("paper_title", "ilike", `%${title}%`)
    .filter("is_verified", "ilike", `%${status}%`)
    .filter("faculty_id", "ilike", `%${faculty_id}%`);

  if (e_conf) {
    console.log("Error from conferences: ", e_conf.message);
  }

  const { data: patents, error: e_pat } = await supabase
    .from("patents")
    .select(`*`)
    .filter("patent_date", "gte", start_date)
    .filter("patent_date", "lte", end_date)
    .filter("patent_name", "ilike", `%${title}%`)
    .filter("is_verified", "ilike", `%${status}%`)
    .filter("faculty_id", "ilike", `%${faculty_id}%`);
  if (e_pat) {
    console.log("Pat error ", e_pat);
  }

  const { data: workshops, error: e_work } = await supabase
    .from("fdp_workshop_refresher_course")
    .select(`*`)
    .filter("date", "gte", start_date)
    .filter("date", "lte", end_date)
    .filter("title", "ilike", `%${title}%`)
    .filter("is_verified", "ilike", `%${status}%`)
    .filter("faculty_id", "ilike", `%${faculty_id}%`);
  if (e_work) {
    console.log("Work error ", e_work);
  }

  const { data: journals, error: e_journal } = await supabase
    .from("journal_publications")
    .select(`*`)
    .filter("month_and_year_of_publication", "gte", start_date)
    .filter("month_and_year_of_publication", "lte", end_date)
    .filter("paper_title", "ilike", `%${title}%`)
    .filter("is_verified", "ilike", `%${status}%`)
    .filter("faculty_id", "ilike", `%${faculty_id}%`);

  if (e_journal) {
    console.log("Journal error ", e_journal);
  }

  //adding entry types to each objects
  if (conference) {
    for (let i = 0; i < conference.length; i++) {
      conference[i]["entry_type"] = "conference";
    }
  }
  if (patents) {
    for (let i = 0; i < patents.length; i++) {
      patents[i]["entry_type"] = "patent";
    }
  }
  if (workshops) {
    for (let i = 0; i < workshops.length; i++) {
      workshops[i]["entry_type"] = "workshop";
    }
  }
  if (journals) {
    for (let i = 0; i < journals.length; i++) {
      journals[i]["entry_type"] = "journal";
    }
  }
  let conference_smolData: any[] | undefined = [];
  let patents_smolData: any[] | undefined = [];
  let workshops_smolData: any[] | undefined = [];
  let journals_smolData: any[] | undefined = [];

  conference_smolData = conference?.map((obj) => {
    return {
      title: obj["paper_title"],
      faculty_id: obj["faculty_id"],
      faculty_name: obj["faculty_name"],
      entry_type: "conference",
      date: obj["conf_date"],
      status: obj["is_verified"],
    };
  });
  patents_smolData = patents?.map((obj) => {
    return {
      title: obj["patent_name"],
      faculty_id: obj["faculty_id"],
      faculty_name: obj["faculty_name"],
      entry_type: "patent",
      date: obj["patent_date"],
      status: obj["is_verified"],
    };
  });
  workshops_smolData = workshops?.map((obj) => {
    return {
      title: obj["title"],
      faculty_id: obj["faculty_id"],
      faculty_name: obj["faculty_name"],
      entry_type: "workshop",
      date: obj["date"],
      status: obj["is_verified"],
    };
  });
  journals_smolData = journals?.map((obj) => {
    return {
      title: obj["paper_title"],
      faculty_id: obj["faculty_id"],
      faculty_name: obj["faculty_name"],
      entry_type: "journal",
      date: obj["month_and_year_of_publication"],
      status: obj["is_verified"],
    };
  });

  if (filterType == "Conferences") {
    return { full_data: conference, disp_data: conference_smolData };
  } else if (filterType == "Patents") {
    return { full_data: patents, disp_data: patents_smolData };
  } else if (filterType == "Workshops") {
    return { full_data: workshops, disp_data: workshops_smolData };
  } else if (filterType == "Journals") {
    return { full_data: journals, disp_data: journals_smolData };
  } else {
    // console.log("conference", conference);
    // console.log("papents", patents);
    // console.log("workshops", workshops);
    // console.log("journals", journals);
    console.log(conference_smolData, "this is conference_smolData");
    const smolData = [
      ...(conference_smolData || []),
      ...(patents_smolData || []),
      ...(workshops_smolData || []),
      ...(journals_smolData || []),
    ];

    const fullDisplayData = [
      ...(conference || []),
      ...(patents || []),
      ...(workshops || []),
      ...(journals || []),
    ];

    // console.log(
    //   smolData + " is small data",
    //   "and it's type is ",
    //   typeof smolData
    // );

    // console.log("fullDisplayData", fullDisplayData);
    // console.log("smolData for all", smolData);
    return {
      full_data: fullDisplayData,
      disp_data: smolData,
    };
  }
};

export const fetchData = async (tableName: string, email: string) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // fetches the user data of the user in session
  const { data: userData, error: userError } = await supabase
    .from("faculty")
    .select()
    .eq("faculty_email", user?.email);

  //fetches the data of the user using the faculty id of userData
  const { data: tableData, error: tableError } = await supabase
    .from(tableName)
    .select()
    .eq("faculty_id", userData ? userData[0].faculty_id : "");

  return tableData;
};

export const updateConf = async (
  type: string,
  paper_title: string,
  conf_date: string,
  proceedings: boolean,
  conf_name: string,
  proceeding_fp: boolean,
  certificate: string,
  id: number,
  is_verified: string
) => {
  const supabase = createServerComponentClient({ cookies });

  if (is_verified.toLowerCase() == "pending") {
    const { error } = await supabase
      .from("conferences")
      .update({
        paper_title: paper_title,
        conf_name: conf_name,
        conf_date: conf_date,
        proceedings: proceedings,
        certificate: certificate,
        proceeding_fp: proceeding_fp,
      })
      .eq("id", id);
  } else {
    const { error } = await supabase
      .from("conferences")
      .update({
        paper_title: paper_title,
        conf_name: conf_name,
        conf_date: conf_date,
        proceedings: proceedings,
        certificate: certificate,
        proceeding_fp: proceeding_fp,
        is_verified: "Pending",
      })
      .eq("id", id);
  }
};

export const updateJournals = async (
  paper_title: string,
  date_of_publication: string,
  journal_name: string,
  issn_number: string,
  indexed_in: string,
  link: string,
  is_verified: string,
  id: number
) => {
  const supabase = createServerComponentClient({ cookies });

  if (is_verified.toLowerCase() == "pending") {
    const { error } = await supabase
      .from("journal_publications")
      .update({
        paper_title: paper_title,
        journal_name: journal_name,
        issn_number: issn_number,
        month_and_year_of_publication: date_of_publication,
        indexed_in: indexed_in,
        link: link,
      })
      .eq("id", id);
  } else {
    const { error } = await supabase
      .from("journal_publications")
      .update({
        paper_title: paper_title,
        journal_name: journal_name,
        issn_number: issn_number,
        month_and_year_of_publication: date_of_publication,
        indexed_in: indexed_in,
        link: link,
        is_verified: "Pending",
      })
      .eq("id", id);
  }
};

export const updatePatents = async (
  patent_name: string,
  patent_date: string,
  patent_type: string,
  application_no: string,
  status: string,
  patent_link: string,
  is_verified: string,
  id: number
) => {
  const supabase = createServerComponentClient({ cookies });

  if (is_verified.toLowerCase() == "pending") {
    const { error } = await supabase
      .from("patents")
      .update({
        patent_name: patent_name,
        patent_date: patent_date,
        patent_type: patent_type,
        application_no: application_no,
        status: status,
        patent_link: patent_link,
      })
      .eq("id", id);
  } else {
    const { error } = await supabase
      .from("patents")
      .update({
        patent_name: patent_name,
        patent_date: patent_date,
        patent_type: patent_type,
        application_no: application_no,
        status: status,
        patent_link: patent_link,
        is_verified: "Pending",
      })
      .eq("id", id);
  }
};

export const updateWorkshops = async (
  date: string,
  type: string,
  title: string,
  number_of_days: number,
  // organized_by: string,
  is_verified: string,
  id: number
) => {
  const supabase = createServerComponentClient({ cookies });

  if (is_verified.toLowerCase() == "pending") {
    const { error } = await supabase
      .from("fdp_workshop_refresher_course")
      .update({
        date: date,
        type: type,
        title: title,
        number_of_days: number_of_days,
        // organized_by: organized_by,
      })
      .eq("id", id);
  } else {
    const { error } = await supabase
      .from("fdp_workshop_refresher_course")
      .update({
        date: date,
        type: type,
        title: title,
        number_of_days: number_of_days,
        // organized_by: organized_by,
        is_verified: "Pending",
      })
      .eq("id", id);
  }
};

export async function conferenceQuery(
  filterByDateRange: null | boolean = null,
  start_date: null | string = "2001-01-01",
  end_date: null | string = new Date().toJSON().slice(0, 10),
  filterByType: null | boolean = null,
  type: null | string = null,
  filterByVerified: null | boolean = null,
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
  filterByName: null | boolean = null, // Journal name
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
  filterByName: null | boolean = null, // Patent name
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

export const approveEntry = async (data: any) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  if (data.entry_type === "Journal") {
    const { error } = await supabase
      .from("journal_publications")
      .update({ is_verified: "APPROVED" })
      .eq("id", data.id);
  }
  if (data.entry_type === "Conference") {
    const { error } = await supabase
      .from("conferences")
      .update({ is_verified: "APPROVED" })
      .eq("id", data.id);
  }
  if (data.entry_type === "Patent") {
    const { error } = await supabase
      .from("patents")
      .update({ is_verified: "APPROVED" })
      .eq("id", data.id);
  }
  if (data.entry_type === "Workshop") {
    const { error } = await supabase
      .from("fdp_workshop_refresher_course")
      .update({ is_verified: "APPROVED" })
      .eq("id", data.id);
  }
};

export const rejectEntry = async (data: any) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  if (data.entry_type === "Journal") {
    const { error } = await supabase
      .from("journal_publications")
      .update({ is_verified: "REJECTED" })
      .eq("id", data.id);
  }
  if (data.entry_type === "Conference") {
    const { error } = await supabase
      .from("conferences")
      .update({ is_verified: "REJECTED" })
      .eq("id", data.id);
  }
  if (data.entry_type === "Patent") {
    const { error } = await supabase
      .from("patents")
      .update({ is_verified: "REJECTED" })
      .eq("id", data.id);
  }
  if (data.entry_type === "Workshop") {
    const { error } = await supabase
      .from("fdp_workshop_refresher_course")
      .update({ is_verified: "REJECTED" })
      .eq("id", data.id);
  }
};

export const fetchRole = async (email: string) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // fetches the user data of the user in session
  const { data: userData, error: userError } = await supabase
    .from("faculty")
    .select()
    .eq("faculty_email", user?.email);

  return userData ? userData[0] : "null";
};

export const getMilestoneNumbers = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // fetches the user data of the user in session
  const { data: userData, error: userError } = await supabase
    .from("faculty")
    .select()
    .eq("faculty_email", user?.email);

  const {
    data: d_conf,
    count: n_conf,
    error: e_conf,
  } = await supabase
    .from("conferences")
    .select("*", { count: "exact", head: true })
    .eq("faculty_id", userData?.[0]?.faculty_id);
  const {
    data: d_jpub,
    count: n_jpub,
    error: e_jpub,
  } = await supabase
    .from("journal_publications")
    .select("*", { count: "exact", head: true })
    .eq("faculty_id", userData?.[0]?.faculty_id);
  const {
    data: d_workshop,
    count: n_workshop,
    error: e_workshop,
  } = await supabase
    .from("fdp_workshop_refresher_course")
    .select("*", { count: "exact", head: true })
    .eq("faculty_id", userData?.[0]?.faculty_id);
  const {
    data: d_patent,
    count: n_patent,
    error: e_patent,
  } = await supabase
    .from("patents")
    .select("*", { count: "exact", head: true })
    .eq("faculty_id", userData?.[0]?.faculty_id);

  if (e_conf || e_jpub || e_workshop || e_patent) {
    console.log("error");
    console.log(e_conf);
    console.log(e_jpub);
    console.log(e_workshop);
    console.log(e_patent);
  }
  return [n_conf, n_jpub, n_workshop, n_patent];
};

async function uploadFile(path: string, file: File): Promise<string> {
  const supabase = createClientComponentClient();
  const { error } = await supabase.storage
    .from("staff-media")
    .upload(path, file, { upsert: true, cacheControl: "3600" });
  if (error) {
    console.error("Error uploading file: ", error);
    return "";
  } else {
    console.log("File uploaded successfully");
    return path;
  }
}

export async function uploadConferenceMedia(
  facultyNo: string,
  Formdata: FormData,
  event_date: string
): Promise<string> {
  const file = Formdata.get("file");
  const path = `conferenceMedia/${facultyNo}/${facultyNo}_${event_date}.${
    (file as File).type.split("/")[1]
  }`;
  return await uploadFile(path, file as File);
}

export async function uploadWorkshopMedia(
  facultyNo: string,
  formData: FormData,
  event_date: string
): Promise<string> {
  const file = formData.get("file");
  const path = `workshopMedia/${facultyNo}/${facultyNo}_${event_date}.${
    (file as File).type.split("/")[1]
  }`;
  return await uploadFile(path, file as File);
}

export async function uploadPatentMedia(
  facultyNo: string,
  formData: FormData,
  event_date: string
): Promise<string> {
  const file = formData.get("file");
  const path = `patentMedia/${facultyNo}/${facultyNo}_${event_date}.${
    (file as File).type.split("/")[1]
  }`;
  return await uploadFile(path, file as File);
}

export async function uploadJournalMedia(
  facultyNo: string,
  formData: FormData,
  event_date: string
): Promise<string> {
  const file = formData.get("file");

  const path = `journalMedia/${facultyNo}/${facultyNo}_${event_date}.${
    (file as File).type.split("/")[1]
  }`;
  return await uploadFile(path, file as File);
}

export const uploadProfilePicture = async (
  facultyId: string,
  formData: FormData
): Promise<string> => {
  const file = formData.get("file");
  console.log("This is from upload pics: " + formData);

  if (file !== null) {
    const path = `profilePictures/${facultyId}.${
      (file as File).type.split("/")[1]
    }`;
    return await uploadFile(path, file as File);
  }
  return "";
};
