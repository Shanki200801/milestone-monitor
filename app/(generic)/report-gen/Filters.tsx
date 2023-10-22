"use client";
import React from "react";
import { useState, useEffect } from "react";

const Filters = ({ onFiltersChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("PENDING");

  useEffect(() => {
    onFiltersChange({
      searchQuery,
      startDate,
      endDate,
      selectedStaff,
      selectedType,
      selectedStatus,
    });
    console.log("onFiltersChange", {
      searchQuery,
      startDate,
      endDate,
      selectedStaff,
      selectedType,
      selectedStatus,
    });
  }, [
    searchQuery,
    startDate,
    endDate,
    selectedStaff,
    selectedType,
    selectedStatus,
  ]);

  return (
    <div className="bg-light-green-100 min-h-screen flex items-center justify-center bg-white">
      <div className=" p-4 rounded-lg shadow-lg w-full bg-[#cbfef8] mx-2  max-w-xs">
        <h1 className="text-xl font-semibold my-2 text-center  ">Filters</h1>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-light-green-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute right-3 top-2 text-gray-500">🔍</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Start Date
            </label>
            <input
              type="date"
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-light-green-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              End Date
            </label>
            <input
              type="date"
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-light-green-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Select Staff
          </label>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-light-green-500"
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
          >
            <option value="">Select Staff</option>
            {/* Populate employee options dynamically */}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Select Type
          </label>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-light-green-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="Conferences">Conferences</option>
            <option value="Patents">Patents</option>
            <option value="Workshops">Workshops</option>
            <option value="Journals">Journals</option>
            <option value="all" selected>
              All
            </option>
            {/* Populate entry type options dynamically */}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Select Verification status
          </label>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-light-green-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="PENDING" selected>
              Pending
            </option>
            <option value="VERIFIED">Verified</option>
            <option value="UNVERIFIED">Unverfied</option>

            {/* Populate entry type options dynamically */}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filters;
