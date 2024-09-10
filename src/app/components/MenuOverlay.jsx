import React from "react";
import NavItem from "./NavItem";

import { motion } from "framer-motion";

export default function MenuOverlay({ link, fun }) {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      className=" flex flex-col py-4 items-center"
    >
      {link.map((link) => (
        <NavItem fun={fun} key={link.name} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </motion.ul>
  );
}
