import React from "react";
import stringFns from "../../utils/stringFns";

const navs = ["About", "Services", "Experiences", "Projects", "Technologies"];

function NavigationItem({ nav, active }) {
  const path = stringFns.toKebabCase(nav);

  return (
    <li className="about my-1.5 group">
      <a
        href={`#${path}`}
        onClick={(e) => {
          const hero = document.getElementById(path);
          e.preventDefault(); // Stop Page Reloading
          if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="flex items-center gap-2"
      >
        <div
          className={`transition-all h-0.5 rounded-md ${
            active
              ? "w-6 bg-light-950"
              : "w-2 bg-light-600 group-hover:w-6 group-hover:bg-light-950"
          }`}
        />
        <div
          className={`transition-all text-sm font-medium ${
            active
              ? "text-light-900"
              : "text-light-600 group-hover:text-light-900"
          }`}
        >
          {nav}
        </div>
      </a>
    </li>
  );
}

function Navigation({ active }) {
  return (
    <nav className="fixed left-0 lg:left-[calc(50vw-512px)] xl:left-[calc(50vw-640px)] 2xl:left-[calc(50vw-750px)] hidden lg:block top-0 pt-6 ml-4 z-50">
      <div className="mb-3">
        <a
          href="/"
          className="text-2xl font-semibold text-brand flex items-baseline"
        >
          /shinjith-dev<span className="blink">_</span>
        </a>

        <div className="text-xs text-light mt-0.5">Frotend Developer</div>
      </div>

      <ul>
        {navs.map((nav) => (
          <NavigationItem nav={nav} active={active === nav} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
