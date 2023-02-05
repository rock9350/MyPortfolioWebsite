import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/about/about";
import Navbar from "./components/nav";
import Project from "./components/project/project";
import Resume from "./components/resume/resume";
import Footer from "./part/part_3";

function Path() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/PROJECT" element={<Project />} />
        <Route path="/RESUME" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Path;
