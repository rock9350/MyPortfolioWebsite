import React from "react";
import thumb from ".././../resource/pan_tool_alt_FILL0_wght400_GRAD0_opsz48.svg";
import pic from ".././../resource/kisspng-computer-cartoon-computer-work-5aabfec3a08f02.5493146915212213156577.png";
import "./part_1.css";

const Part_1 = () => {
  return (
    <div id="about-part-1">
      <div id="know-about">
        <div>
          <h2>
            Know Who <span className="LIGHT">I'M</span>
          </h2>
        </div>
        <div>
          <p id="story">
            Hi Everyone, I am <span className="LIGHT">Vijay Dahiya</span> from{" "}
            <span className="LIGHT">New Delhi ,India.</span> I had Completed My
            Graduation From <span className="LIGHT">University of Delhi</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="list">
            <li>
              <img src={thumb}></img> Playing Games
            </li>
            <li>
              <img src={thumb}></img>
              Searching New Topic
            </li>
            <li>
              <img src={thumb}></img>
              Travelling
            </li>
          </ul>

          <p id="quote">
            "Trust Is Most Powerful Thing In The Universe & No One Can But This!"
            <p>——Vijay Dahiya</p>
          </p>
        </div>
      </div>
      <div id="know-about-pic">
        <img src={pic}></img>
      </div>
    </div>
  );
};

export default Part_1;
