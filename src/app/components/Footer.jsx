import React from "react";

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container py-12 flex justify-between">
        <p className="text-white font-semibold tracking-tight">
          Anas<span className="text-primary">Osta</span>
        </p>
        <p className="text-slate-400">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
