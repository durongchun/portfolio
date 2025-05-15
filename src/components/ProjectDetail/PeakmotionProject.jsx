import React from "react";
import peakmotion from "../../images/peakmotionincludeadmin.gif";

function PeakmotionProject() {
  return (
    <>
      <div className="project-summary">
        <h4>PeakMotion</h4>
        <p>
          The website allows users to browse products, add them to their cart,
          and complete purchases securely. The admin panel enables easy
          management of products, orders, and user accounts.
        </p>
        <img
          src={peakmotion}
          alt="peakmotion ecommerce website"
          className="clickable"
        />
      </div>

      <div className="project-about">
        <h4>About</h4>
        <p>
          Peakmotion is an e-commerce website that I developed using ASP.NET,
          MVC Pattern, and the Identity framework. It features a user-friendly
          interface, secure authentication, and a seamless shopping experience.
        </p>
      </div>
      <div className="project-technologies">
        <h4>Technologies</h4>
        <ul>
          <li>C#</li>
          <li>MVC</li>
          <li>Identity framework</li>
          <li>JavaScript (ES6+)</li>
          <li>Bootstrap & CSS3</li>
          <li>HTML5</li>
        </ul>
      </div>
      <div className="project-website">
        <h4>Website</h4>
        <a href=""></a>
      </div>
      <div className="project-links">
        <h4>Github</h4>
        <a href="https://github.com/durongchun/peakmotion">
          https://github.com/durongchun/peakmotion
        </a>
      </div>
    </>
  );
}

export default PeakmotionProject;
