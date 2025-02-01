import React from "react";

import headshot from "../../../assets/headshot.jpg";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          Hi, I'm David! I’m passionate about exploring how machines can learn
          and understand the world around us. I'm currently a Member of
          Technical Staff at OpenAI working on applied AI.
        </p>
        <p>
          Previously, I worked on my own startup building gen AI animation
          tools, and also at Google and Redfin. I graduated from MIT with an
          M.Eng. in CS in 2024 and a B.S. in CS and Physics in 2023.
        </p>
        <p>
          {" "}
          <a
            href="https://www.linkedin.com/in/davidfang00/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0000EE" }}
          >
            LinkedIn
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/davidfang00"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0000EE" }}
          >
            Github
          </a>{" "}
        </p>
      </div>
      <div className="about-right">
        <div className="about-img">
          <img
            src={headshot}
            alt=""
            className="about-img"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
