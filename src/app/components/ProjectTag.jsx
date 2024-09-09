import React from "react";

export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  const handleClick = () => {
    onClick(name);
  };

  return (
    <>
      <button
        className={"rounded-full border-2 px-6 py-3 text-xl " + buttonStyles}
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
}
