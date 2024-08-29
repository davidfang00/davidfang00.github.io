import React from "react";

import "./Teaching.css";
import headshot from "../../../assets/headshot.jpg";

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
          <p>Teaching Assistant, MIT EECS, Spring 2024</p>
          <br></br>
          <p>
            Taught Python and PyTorch tutorials and held weekly office hours for
            over 600 undergraduate and graduate students.
          </p>
          <p>
            {" "}
            <a
              href="https://advances-in-vision.github.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Course Website
            </a>{" "}
          </p>
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
            2023
          </p>
          <br></br>
          <p>
            I was as a TA for the program to teach machine learning and AI to
            college students in the Boston area. Also advised students on their
            industry projects with Dropbox and MIT-IBM Watson.
          </p>
          <p>
            {" "}
            <a
              href="https://computing.mit.edu/about/diversity-equity-inclusion/break-through-tech-ai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Program Website
            </a>{" "}
          </p>
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
            Momentum AI Executive Board, Curriculum Committee Co-Lead, MIT, 2022
          </p>
          <br></br>
          <p>
            I led curriculum development by creating slides/labs and delegated
            tasks for the curriculum committee in our first year. I also
            coordinated with founders on high-level goals for non-profit to
            teach machine learning to over 100 HS students.
          </p>
          <p>
            {" "}
            <a
              href="https://momentumai.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Program Website
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Teaching;
