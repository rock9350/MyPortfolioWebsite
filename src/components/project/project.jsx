import React from "react";
import ProjectBox from "./forproject";
import "./project.css";
import Arr from "./data";
import { Component } from "react";

class Project extends Component {
  state = {
    arr: Arr(),
  };
  render() {
    console.log(this.state.arr);
    return (
      <div id="project">
        <div id="project-first">
          <h1>
            My Recent <span className="LIGHT">Works</span>
          </h1>
          <p>Here are a few projects I've worked on recently.</p>
        </div>
        <div id="project-detail">
          <ProjectBox Data={this.state.arr} />
        </div>
      </div>
    );
  }
}

export default Project;
