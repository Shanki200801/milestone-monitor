import React, { useState, useEffect } from "react";
import { getMilestoneNumbers } from "@/app/api/dbfunctions";
import { Doughnut } from "react-chartjs-2";

const DoughNutWrapper = () => {
  const [statArr, setStatArr] = useState<any[]>([0, 0, 0, 0]);
  useEffect(() => {
    getMilestoneNumbers().then((data) => {
      setStatArr(data);
    });
  }, []);

  const statsData = {
    labels: ["Conferences", "Workshops", "Journals", "Patents"],
    datasets: [
      {
        label: "Attended/Published",
        data: statArr,
        backgroundColor: ["#00838f81", "#689f3861", "#880e4f6e", "#691b9a7e"],
        borderColor: ["#00838fb2", "#689f38ca", "#880e4f91", "#691b9aa7"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={statsData} />;
};

export default DoughNutWrapper;
