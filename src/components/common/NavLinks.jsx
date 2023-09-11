import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex text-light-dark dark:text-dark-300 gap-1 sm:gap-1.5 md:gap-2 leading-none transition-all">
      <a
        href="https://res.cloudinary.com/dqts6qgre/image/upload/v1692633804/sdev/resumesdev_s1sz0f.pdf"
        download="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline transition-all hidden sm:block"
      >
        Resume
      </a>
      <span className="hidden sm:block">&middot;</span>
      <Link
        to="/projects"
        className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline transition-all"
      >
        Projects
      </Link>
      {/* &middot;
      <a
        href="/notes"
        className="hover:text-light-darkest dark:hover:text-dark-50 hover:underline transition-all"
      >
        Notes
      </a> */}
    </div>
  );
}

export default NavLinks;
