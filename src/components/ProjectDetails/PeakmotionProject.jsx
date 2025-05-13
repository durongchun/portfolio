import React from "react";
import peakmotion from "../../images/peakmotionincludeadmin.gif";

function PeakmotionProject() {
  return (
    <>
      <div>
        <h3>PeakMotion</h3>
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
      <div>
        <h3>About</h3>
        <p>
          Peakmotion is an e-commerce website that I developed using ASP.NET,
          MVC Pattern, and the Identity framework. It features a user-friendly
          interface, secure authentication, and a seamless shopping experience.
        </p>
      </div>
      <div>
        <h3>Technologies</h3>
        <ul>
          <li>C#</li>
          <li>ASP.NET Core MVC</li>
          <li>ASP.NET Identity</li>
          <li>JavaScript (ES6+)</li>
          <li>Bootstrap</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </div>
      <div>
        <h3>Website</h3>
        <a href=""></a>
      </div>
      <div>
        <h3>Github</h3>
        <a href="https://github.com/durongchun/peakmotion"></a>
      </div>
    </>
  );
}

export default PeakmotionProject;
