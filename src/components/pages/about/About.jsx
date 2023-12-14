import React from "react";
import "./About.css";
import myPortrait from "../../../assets/my_photo/portrait.jpg";

export const About = () => {
  return (
    <div className="about">
      <h1>About</h1>

      <div className="about-body">
        <img className="portrait" src={myPortrait} alt="My Portrait" />
        <p className="about-text">
          Qui proident dolor in ullamco officia sit tempor. Exercitation dolore
          cillum voluptate fugiat ullamco enim adipisicing aute enim amet eu
          aliqua magna. Laboris culpa culpa sunt dolore. Lorem aute et tempor
          esse nulla esse proident nostrud aliquip ipsum sit elit adipisicing.
          Labore id adipisicing nulla ullamco sit occaecat cillum sit elit.
          Deserunt aliqua ullamco esse voluptate dolore dolore. Consequat
          exercitation eiusmod deserunt ipsum sint. Qui sit aute non consequat
          non enim aliqua nisi laborum culpa consequat minim commodo.
        </p>
      </div>
    </div>
  );
};
