import React, { useState } from "react";
import "./NavBar.css";
import { Squash as Hamburger } from "hamburger-react";
import { FaHome } from "react-icons/fa";
import { IoPerson, IoSchool } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { FaBrain } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const NavBar = React.forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerMenuIsActive = useMediaQuery({ query: "(max-width: 520px)" });
  return (
    <div className="navbar">
      <div className="menu">
        <Hamburger rounded toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li
          className="link"
          id="home"
          onClick={() => {
            ref.current.scrollTo(0);
            setMenuOpen(false);
          }}
        >
          {hamburgerMenuIsActive ? (
            <div className="icon-wrapper">
              <FaHome/>
              <div className="icon-title">Home</div>
            </div>
          ) : (
            "Home"
          )}
        </li>
        <li
          className="link"
          id="about"
          onClick={() => {
            ref.current.scrollTo(1);
            setMenuOpen(false);
          }}
        >
          {hamburgerMenuIsActive ? <div className="icon-wrapper">
            <IoPerson />
            <div className="icon-title">About</div>
          </div> : "About"}
        </li>
        <li
          className="link"
          id="skills"
          onClick={() => {
            ref.current.scrollTo(2);
            setMenuOpen(false);
          }}
        >
          {hamburgerMenuIsActive ? <div className="icon-wrapper">
            <FaBrain />
            <div className="icon-title">Skills</div>
          </div> : "Skills"}
        </li>
        <li
          className="link"
          id="education"
          onClick={() => {
            ref.current.scrollTo(3);
            setMenuOpen(false);
          }}
        >
          {hamburgerMenuIsActive ? <div className="icon-wrapper">
            <IoSchool />
            <div className="icon-title">Education</div>
          </div> : "Education"}
        </li>
        <li
          className="link"
          id="projects"
          onClick={() => {
            ref.current.scrollTo(4);
            setMenuOpen(false);
          }}
        >
          {hamburgerMenuIsActive ? <div className="icon-wrapper">
            <AiFillProject />
            <div className="icon-title">Projects</div>
          </div> : "Projects"}
        </li>
      </ul>
    </div>
  );
});

export default NavBar;
