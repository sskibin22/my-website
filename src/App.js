import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import NavBar from "./components/navigation/NavBar";
import {Home, About, Education, Projects, Skills} from './components/pages';

function App() {
  const parallax = useRef(null);
  return (
    <div className="App">
      <Parallax
        ref={parallax}
        pages={5}
        style={{ top: "0", left: "0" }}
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="space_layer bg"></div>
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

        <ParallaxLayer sticky={{ start: 0, end: 4 }} className="nav-layer">
          <NavBar ref={parallax}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.35} className="home-layer">
          <Home/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <About/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <Skills/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <Education/>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <Projects/>
        </ParallaxLayer>
        
        
      </Parallax>
    </div>
  );
}

export default App;
