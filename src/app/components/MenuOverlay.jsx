import React from "react";
import NavItem from "./NavItem";

export default function MenuOverlay({ link }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {link.map((link) => (
        <NavItem key={link.name} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </ul>
  );
}
