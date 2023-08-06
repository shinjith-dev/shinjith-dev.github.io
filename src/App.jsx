import React, { useEffect, useRef, useState } from "react";
import startGame from "./Game";

function App() {
  const canvas = useRef();
  const [play, setplay] = useState(false);

  useEffect(() => {
    if (canvas.current && play) startGame(canvas.current);
  }, [canvas.current, play]);

  return (
    <div className="p-2">
      <div className="text-3xl font-semibold mb-2">
        [503] Site is under construction
      </div>
      <div>If you really want to kill time, we can play a quick game :)</div>
      <button
        onClick={() => setplay((prev) => !prev)}
        className="p-1 px-3 font-medium bg-slate-600 text-white my-3"
      >
        {play ? "Stop" : "Start playing"}
      </button>
      {play && <canvas ref={canvas} id="myCanvas" width="480" height="320" />}
    </div>
  );
}

export default App;
