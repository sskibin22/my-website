import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import NavBar from "./components/navigation/NavBar";
import { Home, About, Education, Projects, Skills } from "./components/pages";

function App() {
  const parallax = useRef(null);
  const pageSpeed = 0.2;
  return (
    <div className="App">
      <Parallax ref={parallax} pages={5} style={{ top: "0", left: "0" }}>
        {/*-----------------------------NavBar-----------------------------*/}
        <ParallaxLayer sticky={{ start: 0, end: 4 }} className="nav-layer">
          <NavBar ref={parallax} />
        </ParallaxLayer>

        {/*-----------------------------Home-----------------------------*/}
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="space_layer"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="space_layer" id="stars-bot"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="space_layer" id="stars-mid"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.05}>
          <div className="space_layer" id="stars-top"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.35} className="home-layer">
          <Home />
        </ParallaxLayer>

        {/*-----------------------------About-----------------------------*/}

        <ParallaxLayer offset={1.1} speed={-0.1}>
          <div className="space_layer" id="stars-bot"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={-0.2}>
          <div className="space_layer" id="stars-mid"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.05}>
          <div className="space_layer" id="stars-top"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={pageSpeed}>
          <About />
        </ParallaxLayer>

        {/*-----------------------------Skills-----------------------------*/}
        <ParallaxLayer offset={2.2} speed={-0.1}>
          <div className="space_layer" id="stars-bot"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.2}>
          <div className="space_layer" id="stars-mid"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={0.05}>
          <div className="space_layer" id="stars-top"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={pageSpeed}>
          <Skills />
        </ParallaxLayer>

        {/*-----------------------------Education-----------------------------*/}
        <ParallaxLayer offset={3.2} speed={-0.1}>
          <div className="space_layer" id="stars-bot"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={-0.2}>
          <div className="space_layer" id="stars-mid"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.05}>
          <div className="space_layer" id="stars-top"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={pageSpeed}>
          <Education />
        </ParallaxLayer>

        {/*-----------------------------Projects-----------------------------*/}
        <ParallaxLayer offset={4.2} speed={-0.1}>
          <div className="space_layer" id="stars-bot"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={-0.2}>
          <div className="space_layer" id="stars-mid"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={0.05}>
          <div className="space_layer" id="stars-top"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={pageSpeed}>
          <Projects />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
