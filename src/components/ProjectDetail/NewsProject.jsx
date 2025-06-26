import React from "react";
import news from "../../images/news.gif";

function NewsProject() {
  return (
    <>
      <div className="project-summary">
        <h4>Eddy News</h4>
        <img src={news} alt="news website" className="clickable" />
      </div>

      <div className="project-about">
        <h4>About</h4>
        <p>
          Eddy News is a website that provides a platform for users to read eddy
          news. It features a user-friendly interface with a responsive design,
          ensuring a seamless experience across devices. The website is built
          using Sass, CSS animation and Javascript.
          <br />
        </p>
      </div>
      <div className="project-technologies">
        <h4>Technologies</h4>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>Sass & CSS3</li>
          <li>HTML5</li>
        </ul>
      </div>
      <div className="project-website">
        <h4>Website</h4>
        <a href=""></a>
      </div>
      <div className="project-links">
        <h4>Github</h4>
        <a href="https://github.com/durongchun/movie">
          https://github.com/durongchun/movie
        </a>
      </div>
    </>
  );
}

export default NewsProject;
