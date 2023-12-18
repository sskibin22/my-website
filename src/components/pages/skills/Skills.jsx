import React from "react";
import "./Skills.css";
import { icons } from "../../../assets/skills_icons/skill_ico";

export const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h3> {">"} 2 Years</h3>
            <div className="content-items-container">
              {icons
                .filter((icon) => icon.exp === 2)
                .map((icon) => (
                  <div className="content-item">
                    <img
                      className="skill-icon"
                      src={icon.icon}
                      alt={icon.title}
                    />
                    <div className="skill-icon-title">{icon.title}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h3>1 - 2 Years</h3>
            <div className="content-items-container">
              {icons
                .filter((icon) => icon.exp === 1)
                .map((icon) => (
                  <div className="content-item">
                    <img
                      className="skill-icon"
                      src={icon.icon}
                      alt={icon.title}
                    />
                    <div className="skill-icon-title">{icon.title}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h3>{"<"} 1 Year</h3>
            <div className="content-items-container">
              {icons
                .filter((icon) => icon.exp === 0)
                .map((icon) => (
                  <div className="content-item">
                    <img
                      className="skill-icon"
                      src={icon.icon}
                      alt={icon.title}
                    />
                    <div className="skill-icon-title">{icon.title}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
