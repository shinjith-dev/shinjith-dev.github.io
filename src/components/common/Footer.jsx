import React from "react";
import NavLinks from "./NavLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full absolute bottom-0 left-0 right-0 items-center h-10 py-4 md:py-8 flex justify-between text-xs md:text-sm px-4 sm:px-10 md:px-16">
      <div className="text-light-dark dark:text-dark-200 transition-all">
        &copy; {year} All rights reserved.
      </div>

      <NavLinks />
    </div>
  );
}

export default Footer;
