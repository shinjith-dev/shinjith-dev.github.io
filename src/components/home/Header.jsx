import React from "react";
import NavLinks from "../common/NavLinks";

function Header() {
  return (
    <div
      className="fixed top-0 right-0 left-0 w-screen flex justify-end py-5 md:py-6 pr-4 sm:pr-10 md:pr-16 text-xs sm:text-sm z-50 bg-[rgba(255,255,255,0.25)]"
      style={{ backdropFilter: "blur(16px) saturate(180%)" }}
    >
      <NavLinks />
    </div>
  );
}

export default Header;
