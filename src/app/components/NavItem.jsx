import Link from "next/link";
import React from "react";

export default function NavItem({ children, href, fun }) {
  return (
    <li>
      <Link
        onClick={fun}
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white "
      >
        {children}
      </Link>
    </li>
  );
}
