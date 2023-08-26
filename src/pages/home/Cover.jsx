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
        className="absolute flex gap-2 tracking-widest flex-col w-[min(550px,90vw)] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        // style={{ margin: "0 max(30vw,1rem)" }}
      >
        <div className="text-sm sm:text-lg md:text-xl text-light-dark dark:text-dark-600 font-medium transition-all text-gradient-light dark:text-gradient-dark">
          HEY! I&apos;M
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl text-brand dark:text-brand/90 font-bold tracking-widest transition-all">
          SHINJITH P R
        </div>
        <div>
          <div
            className="text-sm sm:text-lg md:text-2xl inline font-medium text-light transition-all uppercase text-gradient-light gradient-animation"
            ref={textRef}
          />
          <div className="text-sm sm:text-lg md:text-2xl inline font-medium text-light transition-all">
            <span className="blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cover;
