import React from "react";

function NavLinks() {
  return (
    <div className="flex text-light-dark gap-1 sm:gap-1.5 md:gap-2 leading-none">
      <a
        href="https://res.cloudinary.com/dqts6qgre/image/upload/v1692633804/sdev/resumesdev_s1sz0f.pdf"
        download="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-darkest hover:underline transition-all"
      >
        Resume
      </a>
      &middot;
      <a
        href="/projects"
        className="hover:text-light-darkest hover:underline transition-all"
      >
        Projects
      </a>
      &middot;
      <a
        href="/notes"
        className="hover:text-light-darkest hover:underline transition-all"
      >
        Notes
      </a>
    </div>
  );
}

export default NavLinks;
