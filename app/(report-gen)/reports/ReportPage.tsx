"use client";
import React from "react";
import Filters from "./Filters";
import GeneralTable from "./GeneralTable";
import { useState } from "react";
import { getDataForReport } from "@/app/api/dbfunctions";
import { CSVLink } from "react-csv";
import { saveAs } from "file-saver";
import { smolDataHeadersCSV } from "./CSVHeaders";
import { Urbanist } from "next/font/google";

const generalFont = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

const ReportPage = ({ staff_details }: any) => {
  const [filterState, setFilterState] = useState({
    searchQuery: "",
    startDate: undefined,
    endDate: new Date().toJSON().slice(0, 10),
    selectedStaff: "",
    selectedType: "all",
    selectedStatus: "PENDING",
  });
  const [data, setData] = useState<any[]>([]);
  // console.log("logging from reportpage ", staff_details);
  const [fullData, setFullData] = useState<any[]>([]);

  const convertToCSV = (data: any[]) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        const fieldValue = row[header];
        const csvValue =
          typeof fieldValue === "string" ? `"${fieldValue}"` : fieldValue;
        return csvValue;
      });
      csvRows.push(values.join(","));
    }

    return csvRows.join("\n");
  };
  const downloadCSV = (data: any[], filename: string) => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

  const handleFirstLinkClick = () => {
    if (fullData.length <= 0) {
      alert("No data to download");
      return;
    }
    const conferenceData = fullData.filter(
      (d: any) => d.entry_type === "conference"
    );
    const journalData = fullData.filter((d: any) => d.entry_type === "journal");
    const workshopData = fullData.filter(
      (d: any) => d.entry_type === "workshop"
    );
    const patentData = fullData.filter((d: any) => d.entry_type === "patent");

    if (filterState.selectedType === "Conferences") {
      downloadCSV(conferenceData, "confdata.csv");
    } else if (filterState.selectedType === "Patents") {
      downloadCSV(patentData, "patentdata.csv");
    } else if (filterState.selectedType === "Workshops") {
      downloadCSV(workshopData, "workshopdata.csv");
    } else if (filterState.selectedType === "Journals") {
      downloadCSV(journalData, "journaldata.csv");
    } else {
      downloadCSV(conferenceData, "confdata.csv");
      downloadCSV(journalData, "journaldata.csv");
      downloadCSV(workshopData, "workshopdata.csv");
      downloadCSV(patentData, "patentdata.csv");
    }
  };

  return (
    <div
      className={`${generalFont.className} h-[90vh] grid grid-cols-6 bg-[#cbfef8]`}
    >
      <div className="col-start-1 col-end-5">
        <GeneralTable data={data} staffDetails={staff_details} />

        <div className={`${generalFont.className} flex place-content-evenly`}>
          <button
            onClick={handleFirstLinkClick}
            className="tracking-wide text-white px-4 py-2 rounded bg-teal-700 hover:bg-teal-500 hover:font-bold shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70"
          >
            Download Full Report
          </button>

          <CSVLink
            data={data}
            headers={smolDataHeadersCSV}
            filename="light-report.csv"
            className="tracking-wide text-white px-4 py-2 rounded bg-teal-700 hover:bg-teal-500 hover:font-bold shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70"
          >
            Download Light Report
          </CSVLink>
        </div>
      </div>
      <Filters
        staffDetails={staff_details}
        onFiltersChange={(filters: typeof filterState) => {
          // console.log("filters before state update", filters);
          setFilterState(filters);
          // console.log("data passed from filters to report page ", filters);

          getDataForReport(
            filters.startDate,
            filters.endDate,
            filters.selectedType,
            filters.searchQuery,
            filters.selectedStatus,
            filters.selectedStaff
          ).then((data) => {
            setData(data.disp_data || []);
            setFullData(data.full_data || []);
            console.log("data being sent to table ie data in report ", data);
          });
        }}
      />
    </div>
  );
};

export default ReportPage;
