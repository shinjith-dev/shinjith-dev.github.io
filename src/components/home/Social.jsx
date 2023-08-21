import React from "react";
import {
  PiDevToLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";

function Social() {
  return (
    <div className="fixed right-0 md:right-[calc(50vw-384px)] lg:right-[calc(50vw-512px)] xl:right-[calc(50vw-640px)] 2xl:right-[calc(50vw-768px)] mr-4 bottom-0 z-50 hidden sm:flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2.5 sm:gap-3 text-lg sm:text-xl md:text-2xl text-light-darker">
        <a
          href="https://github.com/shinjith-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest"
        >
          <PiGithubLogo />
        </a>
        <a
          href="https://www.instagram.com/shinjith_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest"
        >
          <PiInstagramLogo />
        </a>
        <a
          href="https://dev.to/shinjithdev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest"
        >
          <PiDevToLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/shinjithkanhangad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest"
        >
          <PiLinkedinLogo />
        </a>
        <a
          href="https://twitter.com/ShinjithR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-darkest"
        >
          <PiTwitterLogo />
        </a>
      </div>
      <div className="h-[5vh] w-0.5 rounded-t-md bg-light-darker" />
    </div>
  );
}

export default Social;
