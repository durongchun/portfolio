import React, { useEffect } from "react";
import CanvasBackground from "../components/CanvasBackground";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";

function PageHome() {
  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);
  return (
    <>
      <main>
        <div className="name">
          <h2 class="intro__text">
            <mark className="mark">Lucy Du</mark>
          </h2>
          <h2 class="intro__text">
            <mark class="mark">Software Developer</mark>
          </h2>
          <div className="introduction">
            <p>
              I am a full stack developer with a passion for building
              user-friendly web applications. My expertise includes C#, .NET,
              JavaScript, React, and Node.js, and I have experience in both
              front-end and back-end development.
            </p>
            <p>
              With a strong foundation in full stack development, practical
              industry project experience, and a soon-to-be-completed Software
              Systems Development certificate from BCIT, I am confident in my
              ability to contribute effectively to your development team.
              Throughout my academic and professional journey, I’ve taken on
              progressively responsible roles that required both individual
              initiative and teamwork. At BCIT, I led a team in developing a
              shopping cart backend for an industry-sponsored project, where I
              implemented RESTful APIs, designed SQL Server tables, and applied
              the DTO pattern for clean data management. My hands-on experience
              extends to modern frameworks like React, Node.js, and .NET Core
              MVC, and I’ve built and deployed scalable web applications on AWS.
              In my role at Foggix, I contributed to a real-time elevator
              monitoring platform, using Vue.js, PostgreSQL, and Node.js, and
              introduced automated fault detection that improved maintenance
              efficiency. At Holinova, I worked on system integration and built
              an automation testing framework, enhancing software reliability.
              My diverse technical skill set, combined with my ability to adapt
              quickly and communicate effectively in both English and Chinese,
              make me a strong candidate for this role. I am particularly drawn
              to [Company Name] because of your commitment to innovation and the
              opportunity to work with a team that values quality and
              user-focused development. I would welcome the chance to discuss
              how I can contribute to your team. Thank you for considering my
              application. I look forward to the opportunity to speak with you
              further.
            </p>
            <Link to="/about" className="see-more-link">
              See more about me
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <CanvasBackground />
        <div></div>
      </main>
    </>
  );
}

export default PageHome;
