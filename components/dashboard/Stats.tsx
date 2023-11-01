"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Urbanist } from "next/font/google";
import DoughNutWrapper from "./DoughNutWrapper";

ChartJS.register(ArcElement, Tooltip, Legend);

const headerText = Urbanist({
  weight: "500",
  subsets: ["latin"],
});

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

export default function Stats() {
  // getMilestoneNumbers();
  return (
    <div className="w-[40vw] h-[45vh] p-4 -mt-[1%] text-teal-950 bg-teal-500/20 justify-self-end flex items-center justify-around row-start-1 col-start-2 border border-transparent rounded">
      <h2
        className={`${headerText.className} tracking-wide text-center font-bold uppercase lg:text-2xl`}
      >
        Your Stats
      </h2>
      <div className={`border border-transparent rounded p-4`}>
        <DoughNutWrapper />
      </div>
    </div>
  );
}
