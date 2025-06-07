"use client";
import { counterItems } from "../constants";

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

export default function Achieve() {
  return (
    <div className="py-8 sm:py-16  ">
      <div className="w-full px-4 border-[#33353F] border rounded-md py-8 max-sm:px-0 gap-y-10 flex flex-col md:flex-row items-center justify-between">
        {counterItems.map((achieve, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center max-sm:mx-1"
          >
            <h2 className="text-white flex md:text-4xl text-2xl  font-bold">
              {achieve.suffix}
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(achieve.value)}
              />
            </h2>
            <p className="text-[#ADB7BE] text-base">{achieve.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
