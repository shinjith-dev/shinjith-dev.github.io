import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/notes" element={<Notes />} /> */}
    </Routes>
  );
}

export default App;
