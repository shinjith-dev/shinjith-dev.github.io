import React from "react";
import NavLinks from "../common/NavLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full items-center relative py-4 md:py-8 flex justify-between text-xs md:text-sm font-medium">
      <div className="text-light-dark">&copy; {year} All rights reserved.</div>

      <NavLinks />
    </div>
  );
}

export default Footer;
