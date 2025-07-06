import React from "react";
import aivideogenerator from "../../images/aivideogenerator.gif";

function AiVideoGeneratorProject() {
  return (
    <>
      <div className="project-summary">
        <h4>Ai Video Generator</h4>
        <img
          src={aivideogenerator}
          alt="aivideogenerator website"
          className="clickable"
        />
      </div>

      <div className="project-about">
        <h4>About</h4>
        <p>
          Ai Video Generator is started developing with Vue 3 in Vite to filter
          Video. It features a user-friendly interface with a responsive design,
          ensuring a seamless experience across devices.
          <br />
        </p>
      </div>
      <div className="project-technologies">
        <h4>Technologies</h4>
        <ul>
          <li>Vue</li>
          <li>JavaScript (ES6+)</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Vite</li>
        </ul>
      </div>
      <div className="project-website">
        <h4>Website</h4>
        <a href=""></a>
      </div>
      <div className="project-links">
        <h4>Github</h4>
        <a href="https://github.com/durongchun/vue-aivideogenerator">
          https://github.com/durongchun/vue-aivideogenerator
        </a>
      </div>
    </>
  );
}

export default AiVideoGeneratorProject;
