import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "user",
    value: "1M+",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "5+",
  },
];

export default function Achieve() {
  return (
    <div className=" py-8 px-4 xl:gap-16 sm:py-16 xl:px-10">
      <div className=" border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achieve, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold">{achieve.metric}</h2>
            <p className="text-[#ADB7BE] text-base">{achieve.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
