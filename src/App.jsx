import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Loader from "./components/common/Loader";
import useDarkMode from "./components/hooks/useDarkMode";
import Notes from "./pages/notes";

function App() {
  const [loading, setLoading] = useState(false); // true);
  const torch = useRef(null);

  useDarkMode();

  function mouseListener(e) {
    if (torch.current) {
      const circle = torch.current;
      const left = e.pageX;
      const top = e.pageY;
      circle.style.left = `${left}px`;
      circle.style.top = `${top}px`;
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", mouseListener);

    return () => {
      document.removeEventListener("mousemove", mouseListener);
    };
  }, []);

  if (loading)
    return (
      <div className="bg-[#fff] dark:bg-dark-950 relative -z-[3]">
        <Loader pageLoaded={() => setLoading(false)} />;
      </div>
    );

  return (
    <div className="bg-[#fff] dark:bg-dark-950 -z-[3] relative overflow-hidden">
      <div ref={torch} className="torch-effect" />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
