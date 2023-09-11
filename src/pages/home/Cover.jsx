import React, { useEffect, useRef } from "react";
import run from "../../utils/coverText";

function Cover() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) run(textRef.current);
  }, [textRef.current]);

  return (
    <section className="relative w-full min-h-screen">
      <div
        className="absolute flex tracking-widest flex-col w-[min(550px,90vw)] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        // style={{ margin: "0 max(30vw,1rem)" }}
      >
        <div className="text-[min(20px,6vw)] leading-none text-light-dark dark:text-dark-600 font-medium transition-all text-gradient-light dark:text-gradient-dark">
          Hey! I&apos;m
        </div>
        <div className="text-[min(60px,11vw)] leading-tight text-brand dark:text-brand/90 font-bold tracking-widest transition-all">
          SHINJITH P R
        </div>
        <div>
          <div
            className="text-[min(20px,6vw)] inline font-medium text-light transition-all text-gradient-light gradient-animation"
            ref={textRef}
          />
          <div className="inline font-medium transition-all text-gradient-light gradient-animation">
            <span className="blink">_</span>
          </div>
        </div>
        <div className="text-[min(16px,5vw)] text-light dark:text-dark-700 font-medium transition-all text-gradient-light dark:text-gradient-dark opacity-90">
          and I design accessible, inclusive digital experiences for the web.
        </div>
      </div>
    </section>
  );
}

export default Cover;
