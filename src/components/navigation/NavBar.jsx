import React from "react";
import "./NavBar.css";

const NavBar = React.forwardRef((props, ref) => {
  return (
    <div className="navbar">
      <ul>
        <li
          className="link"
          id="home"
          onClick={() => ref.current.scrollTo(0)}
        >
          Home
        </li>
        <li
          className="link"
          id="about"
          onClick={() => ref.current.scrollTo(1)}
        >
          About
        </li>
        <li
          className="link"
          id="skills"
          onClick={() => ref.current.scrollTo(2)}
        >
          Skills
        </li>
        <li
          className="link"
          id="education"
          onClick={() => ref.current.scrollTo(3)}
        >
          Education
        </li>
        <li
          className="link"
          id="projects"
          onClick={() => ref.current.scrollTo(4)}
        >
          Projects
        </li>
      </ul>
    </div>
  );
});

export default NavBar;