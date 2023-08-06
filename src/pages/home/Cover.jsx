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
        className="absolute flex gap-2 h-[100px] flex-col w-[550px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        // style={{ margin: "0 max(30vw,1rem)" }}
      >
        <div className="text-lg text-light-800 font-medium transition-all">
          Hey, I&apos;m
        </div>
        <div className="text-4xl font-display text-brand font-bold transition-all">
          Shinjith P R
        </div>
        <div>
          <div
            className="text-3xl inline font-medium text-light transition-all"
            ref={textRef}
          />
          <div className="text-3xl inline font-medium text-light transition-all">
            <span className="blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cover;
