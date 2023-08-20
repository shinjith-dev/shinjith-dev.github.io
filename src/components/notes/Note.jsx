import React from "react";

function Note() {
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div
      className="w-full bg-light relative rounded p-5 transition-all shadow-sm hover:shadow-spread-sm hover:bg-light-dark"
      style={{ transform: `rotate(-${getRandom(-0.2, 1.5)}deg)` }}
    >
      <div
        className="tape-sticker absolute w-20 h-8 bg-glass rotate-45 -top-2 -right-8 border border-light-lighter"
        style={{ backdropFilter: "blur(1px) saturate(110%)" }}
      />
      <div className="text-xl text-[#fff] font-mono font-bold mb-2">
        The War Within You
      </div>
      <div className="text-sm text-light-lightest font-mono mb-1">
        delves into the unseen battles of self-doubt, conflicting emotions, and
        personal growth. Just as external conflicts shape our world, this
        internal struggle molds our identity.
      </div>

      <div className="text-xs text-end text-light-lighter italic">June 2023</div>
    </div>
  );
}

export default Note;
