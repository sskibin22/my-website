import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export const Home = () => {
  return (
    <div className="home">
      <div className="name">Scott Skibin</div>
      <div className="contact-links">
        <ul>
          <li>
            <div className="links-wrapper">
              <div className="links-title">skibinsc@yahoo.com</div>
              <a href="mailto: skibinsc@yahoo.com" className="links">
                <MdOutlineMailOutline />
              </a>
            </div>
          </li>
          <li>
            <div className="links-wrapper">
              <div className="links-title">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/scott-skibin-47a765239/"
                target="_blank"
                rel="noopener noreferrer"
                className="links"
              >
                <FaLinkedin />
              </a>
            </div>
          </li>
          <li>
            <div className="links-wrapper">
              <div className="links-title">GitHub</div>
              <a
                href="https://github.com/sskibin22"
                target="_blank"
                rel="noopener noreferrer"
                className="links"
              >
                <FaGithub />
              </a>
            </div>
          </li>
          <li>
            <div className="links-wrapper">
              <div className="links-title">Resume</div>
              <a
                href="./downloads/SSkibin_Resume.pdf"
                download
                className="links"
              >
                <IoDocumentTextOutline />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
