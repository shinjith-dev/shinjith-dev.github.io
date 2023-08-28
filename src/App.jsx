import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Loader from "./components/common/Loader";
import useDarkMode from "./components/hooks/useDarkMode";

function App() {
  const [loading, setLoading] = useState(true);
  useDarkMode();

  if (loading)
    return (
      <div className="bg-[#fff] dark:bg-dark-950 relative -z-[3]">
        <Loader pageLoaded={() => setLoading(false)} />;
      </div>
    );

  return (
    <div className="bg-[#fff] dark:bg-dark-950 relative -z-[3]">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/notes" element={<Notes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
