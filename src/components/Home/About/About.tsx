import React from "react";

import headshot from "../../../assets/headshot.jpg";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <h2>About Me</h2>
        {/* <h2>Transforming Animation with Intelligent Tools</h2> */}
        <p>
          Hi, I'm David! I’m currently pursuing a M.Eng. in Computer Science at
          MIT. I’m interested in computer vision and how machines can understand
          the world around us. I graduated with a B.S. in Computer Science and
          Physics from MIT in 2023. I previously worked at Google and Redfin.
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
