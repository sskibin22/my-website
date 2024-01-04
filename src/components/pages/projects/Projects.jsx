import React from "react";
import "./Projects.css";

import {Slideshow} from "./project_slideshow/Slideshow.jsx";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="proj-slide-container">
        <Slideshow/>
      </div>
    </div>
  );
};
