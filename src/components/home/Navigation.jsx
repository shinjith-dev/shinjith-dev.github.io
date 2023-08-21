/* eslint-disable no-nested-ternary */
import React from "react";
import stringFns from "../../utils/stringFns";

const navs = ["About", "Experience", "Projects", "Notes", "Contact"];

const opacityFactor = 0.5 / navs.length;

function NavigationItem({ nav, active, activeIndex, index }) {
  const path = stringFns.toKebabCase(nav);
  const opacity =
    activeIndex === index ? 1 : 1 - (index + 1 - activeIndex) * opacityFactor;

  return (
    <li className="transition-all group my-1" style={{ opacity }}>
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
          className={`transition-all h-0.5 bg-light-darkest rounded-md ${
            active ? "w-6" : "w-2 group-hover:w-6"
          }`}
        />
        <div className="transition-all text-sm text-light-darkest">{nav}</div>
      </a>
    </li>
  );
}

function Navigation({ active }) {
  return (
    <nav className="fixed left-0 lg:left-[calc(50vw-512px)] xl:left-[calc(50vw-640px)] 2xl:left-[calc(50vw-768px)] top-0 pt-4 ml-4 z-[999]">
      <div className="mb-4">
        <a
          href="/"
          className="text-base sm:text-lg md:text-2xl font-semibold text-brand flex items-baseline font-mono leading-none"
        >
          /shinjith-dev<span className="blink">_</span>
        </a>
      </div>

      <ul className="transition-all hidden lg:block">
        {navs.map((nav, index) => (
          <NavigationItem
            key={nav}
            nav={nav}
            active={active === nav}
            activeIndex={navs.indexOf(active)}
            index={index}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
