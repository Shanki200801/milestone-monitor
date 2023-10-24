"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Urbanist } from "next/font/google";

ChartJS.register(ArcElement, Tooltip, Legend);

export const stats = {
  labels: ["Conferences", "Workshops", "Journals", "Patents"],
  datasets: [
    {
      label: "Attended/Published",
      data: [12, 19, 3, 5,],
      backgroundColor: [
        "#00838f81",
        "#689f3861",
        "#880e4f6e",
        "#691b9a7e",
      ],
      borderColor: [
        "#00838fb2",
        "#689f38ca",
        "#880e4f91",
        "#691b9aa7",
      ],
      borderWidth: 1,
    },
  ],
};

const headerText = Urbanist({
    weight: "500",
    subsets: ["latin"],
  });
  
  const bodyText = Urbanist({
    weight: "400",
    subsets: ["latin"],
  });

export default function Stats() {
  return (
    <div className="w-[40vw] h-[45vh] p-4 -mt-[1%] bg-teal-500/20 justify-self-end flex items-center justify-around row-start-1 col-start-2 border border-transparent rounded">
      <h2
        className={`${headerText.className} tracking-wide text-center font-bold uppercase lg:text-2xl`}
      >
        Your Stats
      </h2>
      <div className={`border border-transparent rounded p-4`}>
      <Doughnut data={stats} />
      </div>
    </div>
  );
}
