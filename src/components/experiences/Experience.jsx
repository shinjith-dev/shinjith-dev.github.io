import React from "react";
import { BiArrowBack } from "react-icons/bi";

const techs = [
  "React",
  "Next",
  "TypeScript",
  "JavaScript",
  "Node",
  "MaterialUI",
  "Tailwind",
];

function Experience() {
  return (
    <div className="p-5 relative z-10">
      <a
        href="https://www.tghtech.com/"
        target="_blank"
        rel="noreferrer"
        className="flex group p-5 md:p-6 gap-5 hover:bg-glass hover:shadow-spread-xs rounded-xl experience-card"
      >
        <div className="text-xs leading-1 text-light font-medium">
          2022 - PRESENT
        </div>
        <div
          style={{ flex: "1 0 75%" }}
          className="gap-1.5 md:gap-2 flex flex-col"
        >
          <div className="text-base leading-none text-light-darkest flex items-center pb-1 gap-2 font-semibold">
            Frotend Developer &#183; TGH Tech
            <div>
              <BiArrowBack className="rotate-[140deg] -translate-x-[1px] group-hover:translate-x-1 group-hover:-translate-y-[2px] translate-y-[1px] transition-all" />
            </div>
          </div>

          <div className="text-xs md:text-sm text-light leading-none font-medium">
            Junior Developer
          </div>

          <div className="text-light-dark text-xs sm:text-sm my-1">
            I spent over 6 months at TGH Tech as a Frontend Web Developer,
            crafting web interfaces for startups and mid-sized businesses. This
            role allowed me to master coding techniques and strategic approaches
            to web development. It was my first real-world work experience,
            providing a strong foundation and igniting my career in a dynamic
            and hands-on manner.
          </div>

          <div className="flex gap-1.5 md:gap-2 flex-wrap text-xs md:text-sm text-brand">
            {techs.map((tech) => (
              <div
                key={tech}
                className="py-1 px-3 font-mono font-medium rounded-2xl bg-glass-lighter border-brand-light border"
                style={{
                  backdropFilter: "blur(16px) saturate(180%)",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Experience;
