import React from "react";
import "./part_2.css";
import face from "../resource/facebook.svg";
import git from "../resource/github.svg";
import instagram from "../resource/instagram.svg";
import linkedin from "../resource/linkedin.svg";
import { Link } from "react-router-dom";

const Part_2 = () => {
  return (
    <div id="part_2">
      <div id="intro">
        <div id="myself">
          <div>
            <h1>
              LET ME <span className="LIGHT">INTRODUCE</span> MYSELF
            </h1>
          </div>

          <div>
            {" "}
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br /> I am fluent in classics like{" "}
              <span className="LIGHT"> Java, Javascript and HTML.</span>
              <br />
              <br />
              My field of Interest's are building new{" "}
              <span className="LIGHT"> Web Technologies and Products</span> and
              also in areas related to{" "}
              <span className="LIGHT">
                {" "}
                Deep Learning and Natural Launguage Processing.
              </span>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <span className="LIGHT">Java</span> and{" "}
              <span className="LIGHT">Modern Javascript Library</span> and{" "}
              <span className="LIGHT"> Frameworks like React.js </span>{" "}
            </p>{" "}
          </div>
        </div>
        <div id="pic"></div>
      </div>
      <div id="left-part">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="LIGHT">connect</span> with me
        </p>
        <div>
          <ul>
            <li>
              {" "}
              <a href="https://www.google.com/" target="_blank">
                <img src={face}></img>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/rock9350" target="_blank">
                <img src={git}></img>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.google.com/" target="_blank">
                <img src={instagram}></img>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/vijay-dahiya-761abb1b4/" target="_blank">
                <img src={linkedin}></img>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Part_2;
