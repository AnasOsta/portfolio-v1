import React from "react";

export default function Input({ name, type, placeholder }) {
  return (
    <div className="mb-6">
      <label
        className="text-white block text-sm mb-2 font-medium"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
