import React from "react";

const MyConference = () => {
  return  <div className="flex flex-col gap-8">
  {/* ... Your existing content ... */}

  <div className="flex flex-col gap-8">
    <div className="flex flex-row gap-10 justify-evenly">
      {/* Scrollable columns */}
      <div className="overflow-x-auto w-2/3">
        <table className="bg-emerald-200 p-4 border border-emerald-300 rounded">
          <thead className="bg-emerald-600 text-emerald-100 font-semibold">
            <tr>
              <th className="p-2">Faculty ID</th>
              <th className="p-2">Created At</th>
              <th className="p-2">Paper Title</th>
              <th className="p-2">Journal Name</th>
              <th className="p-2">Month and Year of Publication</th>
              <th className="p-2">ISSN Number</th>
              <th className="p-2">Indexed In</th>
              <th className="p-2">Link</th>
              <th className="p-2">Upload Image</th>
            </tr>
          </thead>
          <tbody className="text-emerald-900">
            {/* Sample row */}
            <tr>
              <td className="border border-emerald-300 p-2">12345</td>
              <td className="border border-emerald-300 p-2">2023-09-23</td>
              <td className="border border-emerald-300 p-2">Sample Paper</td>
              <td className="border border-emerald-300 p-2">Sample Journal</td>
              <td className="border border-emerald-300 p-2">September 2023</td>
              <td className="border border-emerald-300 p-2">12345678</td>
              <td className="border border-emerald-300 p-2">Indexed In Something</td>
              <td className="border border-emerald-300 p-2"><a href="#">Link</a></td>
              <td className="border border-emerald-300 p-2">Upload Image</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Static columns */}
      <div className="w-1/3">
        <table className="bg-emerald-200 p-4 border border-emerald-300 rounded">
          <thead className="bg-emerald-600 text-emerald-100 font-semibold">
            <tr>
              <th className="p-2">Approval</th>
              <th className="p-2">Is Verified</th>
            </tr>
          </thead>
          <tbody className="text-emerald-900">
            {/* Sample row */}
            <tr>
              <td className="border border-emerald-300 p-2">Approved</td>
              <td className="border border-emerald-300 p-2">Verified</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>;
};

export default MyConference;
