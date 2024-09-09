"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumber = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  {
    ssr: false,
  }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    metric: "user",
    value: "100,000",
    prefix: "~",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export default function Achieve() {
  return (
    <div className=" py-8 px-4 xl:gap-16 sm:py-16 xl:px-10">
      <div className=" border-[#33353F] border rounded-md py-8 max-sm:px-0 flex flex-row items-center justify-between">
        {achievementsList.map((achieve, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center max-sm:mx-1 mx-4"
          >
            <h2 className="text-white flex md:text-4xl text-2xl max-sm:text-sm font-bold">
              {achieve.prefix}
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(achieve.value)}
              />
              {achieve.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achieve.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
