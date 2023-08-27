import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Loader from "./components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("loaded")) setLoading(false);
  }, []);

  if (loading) return <Loader pageLoaded={() => setLoading(false)} />;

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/notes" element={<Notes />} /> */}
    </Routes>
  );
}

export default App;
