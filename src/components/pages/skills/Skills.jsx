import React from "react";
import "./Skills.css";
import { icons } from "../../../assets/language_icons/lang_icons";

export const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <h2 className="section-title">Coding Languages</h2>
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
                      className="lang-icon"
                      src={icon.icon}
                      alt={icon.title}
                    />
                    <div className="lang-icon-title">{icon.title}</div>
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
                      className="lang-icon"
                      src={icon.icon}
                      alt={icon.title}
                    />
                    <div className="lang-icon-title">{icon.title}</div>
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
                      className="lang-icon"
                      src={icon.icon}
                      alt={icon.title}
                    />
                    <div className="lang-icon-title">{icon.title}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <h2 className="section-title">Hard Skills</h2>
      <h2 className="section-title">Soft Skills</h2>
      {/* <div className="skills-grid">
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
        <div className="grid-cell">Placeholder</div>
      </div> */}
    </div>
  );
};
