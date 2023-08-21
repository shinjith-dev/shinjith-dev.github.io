import React, { useEffect, useRef } from "react";
import { TbMailShare } from "react-icons/tb";
import {
  PiDevToLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";

function Contact({ makeActive }) {
  const sectionRef = useRef(null);
  const thisSection = "Contact";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        if (
          window.scrollY > window.scrollY + top - 400 &&
          window.scrollY < window.scrollY + bottom - 400
        )
          makeActive(thisSection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionRef.current]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full items-center relative md:pt-16"
    >
      <div className="w-full h-0.5 bg-light-lighter rounded" />
      <div className="py-40 md:py-52 flex flex-col gap-8 items-center justify-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-light text-center">
          Tell me about your
          <br />
          next project
        </div>

        <a
          href="mailto:shinjithkanhangad@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm sm:text-base px-5 flex gap-2 items-center py-3 font-medium text-light-lightest bg-light hover:shadow-spread-sm hover:scale-[1.03] hover:bg-light-dark transition-all rounded-xl"
        >
          Get In Touch <TbMailShare className="text-base sm:text-lg" />
        </a>

        <div className="flex sm:hidden gap-5 text-xl md:text-2xl text-light-darker">
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
      </div>
      <div className="w-full h-0.5 bg-light-lighter rounded" />

      <div className="text-6xl sm:text-7xl md:text-9xl font-bold text-center tracking-widest text-lglass-lightest absolute left-1/2 top-1/2 z-0 -translate-x-[50%] -translate-y-[50%]">
        CONTACT
      </div>
    </section>
  );
}

export default Contact;
