import React, { useEffect, useRef } from "react";
import run from "../../utils/coverText";

function Cover() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) run(textRef.current);
  }, [textRef.current]);

  return (
    <section className="relative w-full h-screen">
      <div
        className="absolute flex gap-2 tracking-widest flex-col w-[550px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        // style={{ margin: "0 max(30vw,1rem)" }}
      >
        <div className="text-xl text-light-dark font-medium transition-all text-gradient-light">
          HEY! I&apos;M
        </div>
        <div className="text-6xl text-brand font-bold tracking-widest">
          SHINJITH P R
        </div>
        <div>
          <div
            className="text-2xl inline font-medium text-light transition-all uppercase text-gradient-light gradient-animation"
            ref={textRef}
          />
          <div className="text-2xl inline font-medium text-light transition-all">
            <span className="blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cover;
