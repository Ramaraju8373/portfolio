import React from "react";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      {/* Project 1 */}
      <div>
        <h3>Portfolio Website</h3>
        <p>
          Personal portfolio built using React and deployed using GitHub Pages.
        </p>
        <a 
          href="https://github.com/Ramaraju8373/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
      </div>

      <br />

      {/* Project 2 */}
      <div>
        <h3>College Attendance Analyzer</h3>
        <p>
          A system to analyze and manage student attendance efficiently.
        </p>
        <a 
          href="https://github.com/Ramaraju8373/college-attendance-analyzer"
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default Projects;