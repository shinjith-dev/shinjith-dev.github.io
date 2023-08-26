import React from "react";
import NavLinks from "../common/NavLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full items-center relative py-4 md:py-8 flex justify-between text-xs md:text-sm">
      <div className="text-light-dark dark:text-dark-200 transition-all">
        &copy; {year} All rights reserved.
      </div>

      <NavLinks />
    </div>
  );
}

export default Footer;
