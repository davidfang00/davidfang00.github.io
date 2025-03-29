import React from "react";

import "./Teaching.css";

const Teaching = () => {
  return (
    <>
      <div className="teaching-header" id="teaching">
        Teaching
      </div>

      {/* CV TA */}
      <div className="teaching-item">
        {/* <div className="teaching-left">
          <img src={headshot} alt="" className="teaching-img" />
        </div> */}
        <div className="teaching-right">
          <h3>6.8300/1 Advances in Computer Vision</h3>
          <p>
            Teaching Assistant, MIT EECS, Spring 2024,{" "}
            <a
              href="https://advances-in-vision.github.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Course Website
            </a>
          </p>
          {/* <br></br> */}
        </div>
      </div>

      {/* BTTAI TA */}
      <div className="teaching-item">
        {/* <div className="teaching-left">
          <img src={headshot} alt="" className="teaching-img" />
        </div> */}
        <div className="teaching-right">
          <h3>Break Through Tech AI</h3>
          <p>
            Teaching Assistant, MIT Schwarzman College of Computing, Summer/Fall
            2023,{" "}
            <a
              href="https://computing.mit.edu/about/diversity-equity-inclusion/break-through-tech-ai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Program Website
            </a>
          </p>
          {/* <br></br> */}
        </div>
      </div>

      {/* Momentum AI */}
      <div className="teaching-item">
        {/* <div className="teaching-left">
          <img src={headshot} alt="" className="teaching-img" />
        </div> */}
        <div className="teaching-right">
          <h3>Momentum AI</h3>
          <p>
            Momentum AI Executive Board, Curriculum Committee Co-Lead, MIT,
            2022,{" "}
            <a
              href="https://momentumai.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Program Website
            </a>
          </p>
          {/* <br></br> */}
        </div>
      </div>
    </>
  );
};

export default Teaching;
