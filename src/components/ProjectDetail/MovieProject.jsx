import React from "react";
import movie from "../../images/movie.gif";

function MovieProject() {
  return (
    <>
      <div className="project-summary">
        <h4>Movie</h4>
        <p>
          Movie is a full-stack website that allows users to filter movies and
          manage their favorite movies or watch later lists.
        </p>
        <img src={movie} alt="movie website" className="clickable" />
      </div>

      <div className="project-about">
        <h4>About</h4>
        <p>
          Movie is a full-stack website that provides a platform for users to
          filter movies, and add, remove favorite movies or watch later. It
          features a user-friendly interface with a responsive design, ensuring
          a seamless experience across devices. The website is built using React
          for the frontend and Node.js for the backend, with DynamoDB as the
          database solution.
          <br />
        </p>
      </div>
      <div className="project-technologies">
        <h4>Technologies</h4>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>DynamoDB</li>
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

export default MovieProject;
