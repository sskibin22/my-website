import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";

function App() {
  const parallax = useRef(null);
  return (
    <div className="App">
      <Parallax
        ref={parallax}
        pages={5}
        style={{ top: "0", left: "0" }}
        className="animation"
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax bg"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="stars-bot"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="stars-mid"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.05}>
          <div className="animation_layer parallax" id="stars-top"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.35} className="info-layer">
          <div className="name-wrapper">
            <div className="name">Scott Skibin</div>
            <div className="email">skibinsc@yahoo.com</div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 4 }}>
          <div className="navbar">
            <ul>
              <li
                className="link"
                id="home"
                onClick={() => parallax.current.scrollTo(0)}
              >
                Home
              </li>
              <li
                className="link"
                id="about"
                onClick={() => parallax.current.scrollTo(1)}
              >
                About
              </li>
              <li
                className="link"
                id="skills"
                onClick={() => parallax.current.scrollTo(2)}
              >
                Skills
              </li>
              <li
                className="link"
                id="education"
                onClick={() => parallax.current.scrollTo(3)}
              >
                Education
              </li>
              <li
                className="link"
                id="projects"
                onClick={() => parallax.current.scrollTo(4)}
              >
                Projects
              </li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div className="bg-2">
            <h1>About</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div className="bg-3">
            <h1>Skills</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <div className="bg-4">
            <h1>Education</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <div className="bg-5">
            <h1>Projects</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
