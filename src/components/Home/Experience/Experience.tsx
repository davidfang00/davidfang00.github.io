import React from "react";

import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience-header" id="experience">
        Experience
      </div>

      {/* Experience */}
      <div className="experience-item">
        <div className="experience-right">
          <p>
            OpenAI, Heartleaf Studios [
            <a
              href="https://heartleaf.studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              heartleaf.studio
            </a>
            ], MIT CSAIL, Google, MIT Media Lab, MIT Research Laboratory of
            Electronics, Redfin
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
