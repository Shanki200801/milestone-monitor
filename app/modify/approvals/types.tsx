export interface PendingConference {
  id: number;
  created_at: string;
  type: string;
  paper_title: string;
  conf_name: string;
  conf_date: string;
  proceedings: null | any; // You can replace 'any' with the appropriate type for proceedings
  certificate: string;
  proceeding_fp: string;
  faculty_id: string;
  is_verified: string;
  entry_type: string;
  title: string;
}

export interface PendingJournal {
  faculty_id: string;
  created_at: null | string; // This can be null or a string representing the date
  paper_title: string;
  journal_name: string;
  issn_number: string;
  month_and_year_of_publication: string;
  indexed_in: string;
  link: string;
  upload_image: string;
  is_verified: string;
  id: number;
  type: string;
  entry_type: string;
  title: string;
}

export interface PendingWorkshop {
  faculty_id: string;
  created_at: null | string; // This can be null or a string representing the date
  date: string;
  type: string;
  title: string;
  number_of_days: number;
  organized_by: string;
  is_verified: string;
  id: number;
  entry_type: string;
}

export interface PendingPatent {
  id: number;
  created_at: string;
  faculty_id: string;
  patent_name: string;
  patent_type: string;
  application_no: string;
  status: string;
  image: string;
  patent_link: string;
  patent_date: string;
  is_verified: string;
  entry_type: string;
  title: string;
}

export interface PendingData {
  pending_conferences: PendingConference[];
  pending_journal: PendingJournal[];
  pending_workshop: PendingWorkshop[];
  pending_patent: PendingPatent[];
}
