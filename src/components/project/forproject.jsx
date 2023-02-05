import React, { Fragment } from "react";
import "./forproject.css";

const ProjectBox = (props) => {
  return (
    <Fragment>
      {props.Data.map((items, index) => {
        return (
          <div className="show-demo" key={index}>
            <div>
              <img className="project-img" src={items.img}></img>
            </div>
            <div>
              <div>
                <h1>{items.title}</h1>
                <p>{items.summary}</p>
              </div>
              <div className="link-button">
                <div>
                  <a href={items.git} target="_blank">
                    GitHub
                  </a>
                </div>
                <div>
                  <a href={items.demo} target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProjectBox;
