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
          Welcome to my coding journey! 🚀
          <br />
          <br />
          As a recent graduate from Rutgers University, I've embarked on an
          exciting adventure in the world of software development. I'm passionate
          about crafting intuitive, efficient, and innovative solutions through
          code.
          <br />
          <br />
          My journey began with an insatiable curiosity for technology and a
          love for problem-solving. From becoming proficient with languages like
          Python, C, HTML, CSS, and Javascript to delving into tools like React,
          Git and SQL, I've honed my skills through dedicated learning and
          hands-on projects.
          <br />
          <br />
          While my professional experience might be a blank canvas, my
          enthusiasm and determination to excel in software development are
          boundless. Through school projects and personal coding endeavors, I've
          cultivated a robust foundation that fuels my eagerness to tackle new
          challenges.
          <br />
          <br />
          When I'm not coding, you might find me cheering for my favorite hockey
          team, exploring the vast realms of video games, or experimenting with
          new recipes in the kitchen. These diverse passions not only keep me
          balanced but also infuse creativity into my problem-solving approach.
          <br />
          <br />I am eager to contribute my skills, dedication, and fresh
          perspectives to a dynamic software development team. Let's connect and
          create technology that makes a difference!
        </p>
      </div>
    </div>
  );
};
