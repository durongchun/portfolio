import React from "react";
import postdashboard from "../../images/postdashboard.gif";

function PostDashboardProject() {
  return (
    <>
      <div className="project-summary">
        <h4>PostDashboard</h4>
        <img
          src={postdashboard}
          alt="postdashboard website"
          className="clickable"
        />
      </div>

      <div className="project-about">
        <h4>About</h4>
        <p>
          PostDashboard is add/remove favorite posts website, which is using
          Angular Pipes - Creating and using a custom pipe, Filter projects by
          tag, Refactoring for modularity, Setting up interfaces for data and
          Component Communication (Input/Output).
          <br />
        </p>
      </div>
      <div className="project-technologies">
        <h4>Technologies</h4>
        <ul>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>CSS3</li>
          <li>HTML5</li>
        </ul>
      </div>
      <div className="project-website">
        <h4>Website</h4>
        <a href=""></a>
      </div>
      <div className="project-links">
        <h4>Github</h4>
        <a href="https://github.com/durongchun/angular-postsdashboard">
          https://github.com/durongchun/angular-postsdashboard
        </a>
      </div>
    </>
  );
}

export default PostDashboardProject;
