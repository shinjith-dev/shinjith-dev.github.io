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
        className="flex group p-6 gap-1 hover:bg-glass hover:shadow-spread-xs rounded-lg experience-card"
      >
        <div
          style={{ flex: "0 1 25%" }}
          className="text-sm leading-1 text-light"
        >
          2022 - PRESENT
        </div>
        <div style={{ flex: "1 0 75%" }} className="gap-2 flex flex-col">
          <div className="text-base leading-none text-light-darkest flex items-center gap-2">
            Frotend Developer &#183; TGH Tech
            <div className="flex gap-4">
              <BiArrowBack className="rotate-[140deg] -translate-x-[1px] group-hover:translate-x-1 group-hover:-translate-y-[2px] translate-y-[1px] transition-all" />
            </div>
          </div>

          <div className="text-sm text-light leading-none">
            Junior Developer
          </div>

          <div className="text-light-dark text-sm my-1">
            I spent over 6 months at TGH Tech as a Frontend Web Developer,
            crafting web interfaces for startups and mid-sized businesses. This
            role allowed me to master coding techniques and strategic approaches
            to web development. It was my first real-world work experience,
            providing a strong foundation and igniting my career in a dynamic
            and hands-on manner.
          </div>

          <div className="flex gap-2 flex-wrap text-sm text-brand">
            {techs.map((tech) => (
              <div
                className="py-1 px-3 rounded-2xl bg-glass-lighter border-brand-light border"
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
