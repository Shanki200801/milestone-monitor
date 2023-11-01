"use client";
import React from "react";
import Filters from "./Filters";
import GeneralTable from "./GeneralTable";
import { useState, useEffect, useRef } from "react";
import { getDataForReport } from "@/app/api/dbfunctions";
import { CSVLink, CSVDownload } from "react-csv";
import { saveAs } from "file-saver";
import { smolDataHeadersCSV } from "./CSVHeaders";

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
    console.log("Loggin full data from download csv fn ", data);
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

  const handleFirstLinkClick = () => {
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

  // const handleFullDownloadClick = () => {
  //   console.log("full download is being sent", filterState);
  //   fullDownload(filterState);
  // };

  return (
    <div className="flex bg-[#cbfef8] ">
      <div className="w-4/5">
        <h1 className="text-3xl font-semibold my-4 text-center">
          Report Geneartion
        </h1>
        <GeneralTable data={data} staffDetails={staff_details} />

        <div className="flex place-content-evenly ">
          <button
            onClick={handleFirstLinkClick}
            className="text-white px-4 py-2 rounded bg-lime-700"
          >
            Download full report
          </button>

          <CSVLink
            data={data}
            headers={smolDataHeadersCSV}
            filename="light-report.csv"
            className="text-white px-4 py-2 rounded bg-lime-700"
          >
            Download light report
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
