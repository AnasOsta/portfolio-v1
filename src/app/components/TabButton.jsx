"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TabButton({ active, children, selectTab }) {
  const variants = {
    default: { width: 0 },
    active: { width: "100%" },
  };

  const buttonClasses = active ? " text-white" : " text-[#ADB7BE]";

  return (
    <button
      className={
        "mr-3 font-semibold border-b hover:text-white " + buttonClasses
      }
      onClick={selectTab}
    >
      <p>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary mt-2 mr-3 "
      ></motion.div>
    </button>
  );
}
