"use client";
import React from "react";

export default function TabButton({ active, children, selectTab }) {
  const buttonClasses = active
    ? " text-white border-purple-500"
    : " text-[#ADB7BE]";

  return (
    <button
      className={
        "mr-3 font-semibold border-b hover:text-white " + buttonClasses
      }
      onClick={selectTab}
    >
      {children}
    </button>
  );
}
