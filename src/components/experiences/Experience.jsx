import React from "react";

function Experience() {
  return (
    <div className="p-5">
      <div
        className="flex p-6 gap-1 hover:bg-light-lighter rounded-lg border border-light-lightest hover:border-glass-light box-content experience-card"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
        }}
      >
        <div
          style={{ flex: "0 1 25%" }}
          className="text-sm leading-1 text-light"
        >
          2022 - PRESENT
        </div>
        <div style={{ flex: "1 0 75%" }} className="gap-2 flex flex-col">
          <div className="text-base leading-none">
            Frotend Developer &#183; TGH Tech
          </div>

          <div className="text-sm text-light leading-none">
            Junior Developer
          </div>

          <div className="text-light-dark text-sm">
            I spent over 6 months at TGH Tech as a Frontend Web Developer,
            crafting web interfaces for startups and mid-sized businesses. This
            role allowed me to master coding techniques and strategic approaches
            to web development. It was my first real-world work experience,
            providing a strong foundation and igniting my career in a dynamic
            and hands-on manner.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
