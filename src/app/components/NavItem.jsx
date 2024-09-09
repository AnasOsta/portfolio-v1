import Link from "next/link";
import React from "react";

export default function NavItem({ children, href }) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white "
      >
        {children}
      </Link>
    </li>
  );
}
