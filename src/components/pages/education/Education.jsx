import React from "react";
import "./Education.css";
import rutgers from "../../../assets/school_logos/ru2.png";
import bergen from "../../../assets/school_logos/bcc2.png";
import { IoDocumentTextOutline } from "react-icons/io5";

export const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="school-wrapper">
        <div className="school-container">
          <div className="school-logo-wrapper"><img className="school-logo" src={rutgers} alt="Rutgers University"/></div>
          <div className="school-title-wrapper">
            <h2 className="school-title">Rutgers University</h2>
            <div className="school-loc">New Brunswick, NJ</div>
            <div className="school-attend">September 2021 - May 2023</div>
          </div>
          <div className="school-details-wrapper">
            <h3 className="school-degree">BA Computer Science</h3>
            <div className="school-gpa">GPA: 3.6</div>
            <div className="school-transcript-wrapper">
              <a
                href="./downloads/RU_transcript_SCOTTSKIBIN.pdf"
                download
                className="links"
              >
                <IoDocumentTextOutline />
              </a>
              <div className="school-gpa">Transcript</div>
            </div>
          </div>
        </div>
        <div className="school-container">
          <div className="school-logo-wrapper"><img className="school-logo" src={bergen} alt="Bergen Community College" /></div>
          <div className="school-title-wrapper">
            <h2 className="school-title">Bergen Community College</h2>
            <div className="school-loc">Paramus, NJ</div>
            <div className="school-attend">September 2019 - May 2021</div>
          </div>
          <div className="school-details-wrapper">
            <h3 className="school-degree">AS Computer Science</h3>
            <div className="school-gpa">GPA: 3.9</div>
            <div className="school-gpa">Phi Theta Kappa Honor Society</div>
            <div className="school-transcript-wrapper">
              <a
                href="./downloads/BCC_transcript_SCOTTSKIBIN.pdf"
                download
                className="links"
              >
                <IoDocumentTextOutline />
              </a>
              <div className="school-gpa">Transcript</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

