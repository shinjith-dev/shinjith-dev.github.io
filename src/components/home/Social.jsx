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
    <div className="fixed right-0 md:right-[calc(50vw-384px)] lg:right-[calc(50vw-512px)] xl:right-[calc(50vw-640px)] 2xl:right-[calc(50vw-768px)] mr-4 bottom-0 z-50 flex flex-col items-center gap-4">
      <div className="flex flex-col gap-3 text-2xl text-light-dark">
        <PiGithubLogo />
        <PiInstagramLogo />
        <PiDevToLogo />
        <PiLinkedinLogo />
        <PiTwitterLogo />
      </div>
      <div className="h-[5vh] w-0.5 rounded-t-md bg-light-dark" />
    </div>
  );
}

export default Social;
