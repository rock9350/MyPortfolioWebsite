import React from "react";
import { NavLink } from "react-router-dom";
import resume from ".././../resource/Resume-Vijay -11024_1.jpg";
import "./resume.css";
import download from ".././../resource/download_FILL0_wght700_GRAD200_opsz48.svg";

const Resume = () => {
  return (
    <div id="resume">
      <div className="download">
        <a
          href="https://drive.google.com/file/d/1U7rgGSgk9p0lmnYj5WcdvfcCSY4JLwaY/view?usp=sharing"
          target="_blank"
        >
          <img src={download}></img>Download CV
        </a>
      </div>

      <br />
      <img className="resume-1" src={resume}></img>
      <br />
      <div className="download">
        <a
         href="https://drive.google.com/file/d/1U7rgGSgk9p0lmnYj5WcdvfcCSY4JLwaY/view?usp=sharing"
          target="_blank"
        >
          <img src={download}></img>Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
