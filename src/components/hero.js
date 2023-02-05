import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import boy from "../resource/giphy.gif"


const Main = () => {
  return (
   <React.Fragment>
      <div id="sec">
        <h1>Hi There!</h1>
        <h1>I'M VIJAY DAHIYA</h1>
        <Typewriter 
         options={{
          strings: ["I'M Front End Developer", "I'M JAVASCRIPT Developer","I'M REACT.JS Developer"],
          autoStart: true,
          loop: true,
        }}
        />
      </div>
      <div>
        <img id="gif" src={boy}></img>
      </div>
      </React.Fragment>
  );
};

export default Main;
